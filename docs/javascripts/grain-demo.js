/* Звуковые демо гранулятора: <div class="grain-demo" data-demo="sync|size|density|pitch"></div> */
(() => {
  let ctx = null;
  let out = null;
  let spoon = null;
  let current = null; // демо, которое сейчас играет

  // Язык берём из адреса: английские страницы лежат в /en/
  const EN = /\/en(\/|$)/.test(location.pathname);
  const T = (ru, en) => (EN ? en : ru);

  const ICON_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';
  const ICON_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  const fmt = (n, d = 0) => n.toFixed(d).replace(".", EN ? "." : ",");
  const logMap = (v, lo, hi) => lo * Math.pow(hi / lo, v / 100);

  function audio() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 10;
      out = ctx.createGain();
      out.gain.value = 0.55;
      out.connect(comp).connect(ctx.destination);
      spoon = makeSpoon();
    }
    return ctx;
  }

  // Синтезированный удар ложки о чашку: стук, звон из негармонических призвуков, хвост
  function makeSpoon() {
    const sr = ctx.sampleRate;
    const n = Math.floor(sr * 1.6);
    const buf = ctx.createBuffer(1, n, sr);
    const d = buf.getChannelData(0);
    const partials = [[1320, 1, 2.2], [3060, 0.55, 3.5], [5610, 0.3, 5], [8750, 0.16, 7], [2210, 0.22, 4]];
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      let s = 0;
      for (const [f, a, k] of partials) s += a * Math.sin(2 * Math.PI * f * t) * Math.exp(-t * k);
      if (t < 0.006) s += (Math.random() * 2 - 1) * (1 - t / 0.006) * 1.2;
      d[i] = s * 0.3;
    }
    return buf;
  }

  const WINDOWS = {
    hann: (x) => Math.sin(Math.PI * x) ** 2,
    gauss: (x) => Math.exp(-0.5 * ((x - 0.5) / 0.15) ** 2),
    tukey: (x) => (x < 0.15 ? Math.sin((Math.PI * x) / 0.3) ** 2 : x > 0.85 ? Math.sin((Math.PI * (1 - x)) / 0.3) ** 2 : 1),
    perc: (x) => (x < 0.02 ? x / 0.02 : Math.exp(-5 * (x - 0.02)) * (1 - x)),
    rev: (x) => WINDOWS.perc(1 - x),
    rect: () => 1,
  };
  const curves = {};
  function curve(shape, gain) {
    if (!curves[shape]) curves[shape] = Float32Array.from({ length: 128 }, (_, i) => WINDOWS[shape](i / 127));
    return curves[shape].map((v) => v * gain);
  }

  function grain(t, g) {
    const src = ctx.createBufferSource();
    src.buffer = spoon;
    src.playbackRate.value = g.rate;
    const amp = ctx.createGain();
    amp.gain.value = 0;
    amp.gain.setValueCurveAtTime(curve(g.shape, g.gain), t, g.size);
    let node = src.connect(amp);
    if (ctx.createStereoPanner && g.pan) {
      const p = ctx.createStereoPanner();
      p.pan.value = g.pan;
      node = node.connect(p);
    }
    node.connect(out);
    const pos = Math.max(0, Math.min(g.pos, spoon.duration - g.size * g.rate - 0.01));
    src.start(t, pos);
    src.stop(t + g.size + 0.01);
  }

  // ── Описания демо: элементы управления, параметры зерна, подсказка ──
  const DEMOS = {
    sync: {
      title: T("Послушай: ровный поток и вразнобой", "Listen: a steady stream and a scattered one"),
      controls: [
        { type: "range", key: "d", label: T("Плотность", "Density"), value: 30, show: (v) => `${Math.round(logMap(v, 2, 220))} ${T("зёрен/с", "grains/s")}` },
        { type: "seg", key: "mode", label: T("Режим потока", "Stream mode"), options: [["sync", T("Ровно", "Steady")], ["async", T("Вразнобой", "Scattered")]], value: "sync" },
      ],
      params(s) {
        const d = logMap(s.d, 2, 220);
        return { density: d, jitter: s.mode === "sync" ? 0 : 1, grain: () => ({ pos: 0.08, size: 0.03, rate: 1, shape: "hann", pitch: 0 }) };
      },
      hint(s) {
        const d = Math.round(logMap(s.d, 2, 220));
        if (s.mode === "sync") return d < 18 ? T("Дробь: ухо ещё различает отдельные удары.", "A rattle: the ear can still pick out single hits.") : T(`Тон: высота ноты равна частоте зёрен, ${d} Гц.`, `A tone: the pitch equals the grain rate, ${d} Hz.`);
        return d < 18 ? T("Редкие капли в случайные моменты.", "Rare drops at random moments.") : T("Облако: шелест без высоты, тона больше нет.", "A cloud: a rustle with no pitch, the tone is gone.");
      },
    },
    size: {
      title: T("Послушай: размер зерна и форма окна", "Listen: grain size and window shape"),
      controls: [
        { type: "range", key: "s", label: T("Размер зерна", "Grain size"), value: 62, show: (v) => `${fmt(logMap(v, 1, 500), logMap(v, 1, 500) < 10 ? 1 : 0)} ${T("мс", "ms")}` },
        { type: "seg", key: "shape", label: T("Форма окна", "Window shape"), options: [["hann", T("Колокол", "Bell")], ["gauss", T("Гаусс", "Gauss")], ["tukey", T("Трапеция", "Trapezoid")], ["perc", T("Перкуссия", "Percussive")], ["rev", T("Обратная", "Reversed")], ["rect", T("Прямоугольник", "Rectangle")]], value: "hann" },
      ],
      params(s) {
        const size = logMap(s.s, 1, 500) / 1000;
        return {
          density: Math.min(400, Math.max(3, 2.5 / size)),
          jitter: 0.6,
          grain: () => ({ pos: 0.06 + Math.random() * 0.02, size, rate: 1, shape: s.shape, pitch: 0 }),
        };
      },
      hint(s) {
        const ms = logMap(s.s, 1, 500);
        let h = ms <= 10 ? T("Щелчки и жужжание: тембр ложки пропал.", "Clicks and buzzing: the spoon's timbre is gone.") : ms <= 30 ? T("Зернисто и шершаво, ложка едва узнаётся.", "Grainy and rough, the spoon is barely recognizable.") : ms <= 100 ? T("Тон и окраска звона: зона пэдов.", "The pitch and colour of the ring: pad territory.") : T("Слышны куски звона целиком.", "You can hear whole pieces of the ring.");
        if (s.shape === "rect") h += T(" Прямоугольное окно щёлкает на каждом зерне.", " The rectangular window clicks on every grain.");
        if (s.shape === "perc") h += T(" Каждое зерно звучит как маленький щипок.", " Each grain sounds like a tiny pluck.");
        if (s.shape === "rev") h += T(" Зёрна всасываются, как запись задом наперёд.", " The grains get sucked in, like a recording played backwards.");
        return h;
      },
    },
    density: {
      title: T("Послушай: от капель к облаку", "Listen: from drops to a cloud"),
      controls: [
        { type: "range", key: "d", label: T("Плотность", "Density"), value: 18, show: (v) => `${Math.round(logMap(v, 2, 300))} ${T("зёрен/с", "grains/s")}` },
        { type: "range", key: "j", label: T("Разброс времени", "Timing jitter"), value: 100, show: (v) => `${Math.round(v)}%` },
      ],
      params(s) {
        return {
          density: logMap(s.d, 2, 300),
          jitter: s.j / 100,
          grain: () => ({ pos: 0.07 + Math.random() * 0.02, size: 0.05, rate: 1, shape: "hann", pitch: 0 }),
        };
      },
      hint(s) {
        const d = logMap(s.d, 2, 300);
        const o = d * 0.05;
        const head = T(`Зерно 50 мс, перекрытие ${fmt(o, 1)}. `, `Grain 50 ms, overlap ${fmt(o, 1)}. `);
        if (s.j < 15 && d >= 20) return head + T(`Поток ровный: облако гудит тоном ${Math.round(d)} Гц.`, `The stream is steady: the cloud hums at ${Math.round(d)} Hz.`);
        return head + (o < 0.45 ? T("Отдельные капли, редкий дождь.", "Single drops, a sparse rain.") : o <= 1 ? T("Дробь, зёрна почти встык.", "A rattle, grains nearly end to end.") : o <= 5 ? T("Гладкое облако.", "A smooth cloud.") : T("Плотная стена: звук похож на шум с окраской.", "A dense wall: it sounds like coloured noise."));
      },
    },
    pitch: {
      title: T("Послушай: разброс высоты", "Listen: pitch spread"),
      controls: [
        { type: "range", key: "p", label: T("Разброс высоты", "Pitch spread"), value: 30, show: (v) => centsLabel(spreadCents(v)) },
        { type: "seg", key: "mode", label: T("Привязка высоты", "Pitch snapping"), options: [["free", T("Свободно", "Free")], ["oct", T("Октавы", "Octaves")], ["fifth", T("Октавы и квинты", "Octaves and fifths")], ["scale", T("Ноты лада", "Scale notes")]], value: "free" },
      ],
      params(s) {
        const cents = spreadCents(s.p);
        const sets = { oct: [-12, 0, 12, 24], fifth: [-12, -5, 0, 7, 12, 19, 24], scale: [-12, -10, -8, -7, -5, -3, -1, 0, 2, 4, 5, 7, 9, 11, 12] };
        return {
          density: 30,
          jitter: 1,
          grain: () => {
            let st;
            if (s.mode === "free") st = ((Math.random() * 2 - 1) * cents) / 100;
            else {
              const ok = sets[s.mode].filter((x) => Math.abs(x) * 100 <= cents);
              st = ok[Math.floor(Math.random() * ok.length)];
            }
            return { pos: 0.08 + Math.random() * 0.05, size: 0.12, rate: Math.pow(2, st / 12), shape: "hann", pitch: st, pan: Math.random() * 1.2 - 0.6 };
          },
        };
      },
      hint(s) {
        const c = spreadCents(s.p);
        if (s.mode === "oct") return c < 1200 ? T("Подними разброс до октавы, и зёрна начнут прыгать по регистрам.", "Raise the spread to an octave and the grains will start jumping between registers.") : T("Мерцание по октавам: блики на воде, а нота одна.", "Shimmering in octaves: glints on water, yet it is one note.");
        if (s.mode === "fifth") return c < 500 ? T("Подними разброс, чтобы появились квинты и октавы.", "Raise the spread to bring in fifths and octaves.") : T("Мерцающий органный аккорд.", "A shimmering organ chord.");
        if (s.mode === "scale") return c < 200 ? T("Подними разброс, чтобы зёрна разошлись по нотам лада.", "Raise the spread so the grains fan out across the notes of the scale.") : T("Одна клавиша, а звучит облако-аккорд.", "One key, and a cloud of a chord sounds.");
        return c < 1 ? T("Все зёрна на одной ноте.", "All the grains are on one note.") : c <= 10 ? T("Лёгкий хорус: звук шире и теплее.", "A light chorus: the sound is wider and warmer.") : c <= 50 ? T("Плывущая, «пьяная» расстройка.", "A drifting, \"drunken\" detune.") : c <= 600 ? T("Облако соседних нот: кластер, туман.", "A cloud of neighbouring notes: a cluster, a haze.") : T("Зёрна прыгают по регистрам.", "The grains jump between registers.");
      },
    },
  };

  function spreadCents(v) {
    return 2400 * (v / 100) ** 2;
  }
  function plural(n, one, few, many) {
    const m10 = n % 10;
    const m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }
  function centsLabel(c) {
    if (c < 100) {
      const n = Math.round(c);
      return `±${n} ${EN ? (n === 1 ? "cent" : "cents") : plural(n, "цент", "цента", "центов")}`;
    }
    const st = c / 100;
    if (st < 10 && Math.abs(st - Math.round(st)) >= 0.05) return `±${fmt(st, 1)} ${T("полутона", "semitones")}`;
    const n = Math.round(st);
    return `±${n} ${EN ? (n === 1 ? "semitone" : "semitones") : plural(n, "полутон", "полутона", "полутонов")}`;
  }

  // ── Один экземпляр демо на странице ──
  function mount(el) {
    const spec = DEMOS[el.dataset.demo];
    if (!spec || el.dataset.ready) return;
    el.dataset.ready = "1";
    const state = {};
    el.innerHTML = "";

    const title = document.createElement("p");
    title.className = "gd-title";
    title.textContent = spec.title;
    const canvas = document.createElement("canvas");
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", T("Зёрна на временной шкале: каждое зерно появляется справа в момент, когда звучит", "Grains on a timeline: each grain appears on the right at the moment it sounds"));
    const row = document.createElement("div");
    row.className = "gd-row";
    const play = document.createElement("button");
    play.className = "gd-play";
    play.type = "button";
    play.setAttribute("aria-label", T("Играть", "Play"));
    play.innerHTML = ICON_PLAY;
    row.append(play);
    const row2 = document.createElement("div");
    row2.className = "gd-row";
    const hint = document.createElement("p");
    hint.className = "gd-hint";
    hint.setAttribute("aria-live", "polite");

    for (const c of spec.controls) {
      state[c.key] = c.value;
      if (c.type === "range") {
        const id = `gd-${el.dataset.demo}-${c.key}-${Math.random().toString(36).slice(2, 7)}`;
        const wrap = document.createElement("div");
        wrap.className = "gd-slider";
        wrap.innerHTML = `<label for="${id}"><span>${c.label}</span><span class="gd-value"></span></label><input id="${id}" type="range" min="0" max="100" step="1" value="${c.value}">`;
        const input = wrap.querySelector("input");
        const val = wrap.querySelector(".gd-value");
        const sync = () => {
          state[c.key] = +input.value;
          val.textContent = c.show(+input.value);
          update();
        };
        input.addEventListener("input", sync);
        val.textContent = c.show(c.value);
        (row.children.length < 2 ? row : row2).append(wrap);
      } else {
        const seg = document.createElement("div");
        seg.className = "gd-seg";
        seg.setAttribute("role", "group");
        seg.setAttribute("aria-label", c.label);
        for (const [v, label] of c.options) {
          const b = document.createElement("button");
          b.type = "button";
          b.textContent = label;
          b.setAttribute("aria-pressed", String(v === c.value));
          b.addEventListener("click", () => {
            state[c.key] = v;
            seg.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
            update();
          });
          seg.append(b);
        }
        row2.append(seg);
      }
    }
    el.append(title, canvas, row);
    if (row2.children.length) el.append(row2);
    el.append(hint);

    const demo = { el, playing: false, timer: null, next: 0, dots: [], stop };
    function update() {
      hint.textContent = spec.hint(state);
    }
    function tick() {
      const p = spec.params(state);
      if (demo.next < ctx.currentTime) demo.next = ctx.currentTime + 0.02;
      while (demo.next < ctx.currentTime + 0.12) {
        const g = p.grain();
        g.gain = 0.75 / Math.sqrt(Math.max(1, p.density * g.size));
        grain(demo.next, g);
        demo.dots.push({ t: demo.next, size: g.size, pitch: g.pitch || 0 });
        const period = 1 / p.density;
        demo.next += period * (1 - p.jitter + p.jitter * -Math.log(1 - Math.random()));
      }
      if (demo.dots.length > 400) demo.dots.splice(0, demo.dots.length - 400);
    }
    async function start() {
      audio();
      if (ctx.state === "suspended") await ctx.resume();
      if (current && current !== demo) current.stop();
      current = demo;
      demo.playing = true;
      demo.next = ctx.currentTime + 0.05;
      demo.timer = setInterval(tick, 25);
      play.innerHTML = ICON_PAUSE;
      play.setAttribute("aria-label", T("Пауза", "Pause"));
      kick();
    }
    function stop() {
      demo.playing = false;
      clearInterval(demo.timer);
      play.innerHTML = ICON_PLAY;
      play.setAttribute("aria-label", T("Играть", "Play"));
      if (current === demo) current = null;
    }
    play.addEventListener("click", () => (demo.playing ? stop() : start()));

    // Временная шкала: голубая волна-исходник, оранжевые зёрна в момент звучания
    const g2d = canvas.getContext("2d");
    const SPAN = 2;
    let looping = false;
    function kick() {
      if (!looping) {
        looping = true;
        requestAnimationFrame(draw);
      }
    }
    function draw() {
      looping = false;
      if (!canvas.isConnected) return;
      const dpr = window.devicePixelRatio || 1;
      const cw = Math.round(canvas.clientWidth * dpr);
      const ch = Math.round(canvas.clientHeight * dpr);
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
      }
      const W = cw;
      const H = ch;
      let visible = false;
      g2d.clearRect(0, 0, W, H);
      g2d.strokeStyle = "rgba(143,211,224,0.55)";
      g2d.lineWidth = 2 * dpr;
      g2d.lineCap = "round";
      g2d.beginPath();
      for (let x = 0; x <= W; x += 4 * dpr) {
        const y = H * 0.5 + Math.sin((x / W) * Math.PI * 4) * H * 0.1;
        x ? g2d.lineTo(x, y) : g2d.moveTo(x, y);
      }
      g2d.stroke();
      if (ctx) {
        const now = ctx.currentTime;
        for (const d of demo.dots) {
          const age = now - d.t;
          if (age > SPAN) continue;
          visible = true;
          if (age < 0) continue;
          const x = W - (age / SPAN) * W;
          const y = H * 0.5 - (d.pitch / 26) * H * 0.85 + Math.sin((x / W) * Math.PI * 4) * H * 0.1;
          const w = Math.max(3 * dpr, (d.size / SPAN) * W);
          g2d.fillStyle = `rgba(232,131,42,${(1 - age / SPAN) * 0.9 + 0.1})`;
          g2d.beginPath();
          g2d.ellipse(x - w / 2, y, w / 2, 3.2 * dpr, 0, 0, Math.PI * 2);
          g2d.fill();
        }
      }
      if (demo.playing || visible) kick();
    }
    if (window.ResizeObserver) new ResizeObserver(() => kick()).observe(canvas);
    update();
    draw();
  }

  function init() {
    if (current) current.stop();
    document.querySelectorAll(".grain-demo").forEach(mount);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && current) current.stop();
  });

  if (window.document$) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
