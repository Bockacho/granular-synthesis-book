# -*- coding: utf-8 -*-
"""Генератор диаграммы «Карта звука» на четырёх языках.

Запуск из корня репозитория:  python3 scripts/make_karta_zvuka.py
Пишет docs/images/karta-zvuka.svg (ru) и karta-zvuka-{en,es,de}.svg.

Диаграмма нарисована как тёмный экран (как осциллограф в звуковых демо), поэтому
одинаково смотрится на светлой и тёмной теме сайта и не требует CSS-фильтров.
Зоны различаются не только цветом, но и сплошной или пунктирной рамкой.
"""
import math
import pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / "docs" / "images"

# палитра сайта
BG = "#070b0f"
GRID = "#19f0ff"        # сетка рисуется этим цветом с малой прозрачностью
CYAN = "#19f0ff"
PINK = "#ff4db0"
STEEL = "#aab5bd"
INK = "#eef2f4"         # названия зон
MUTED = "#9fb0b9"       # подписи и описания
AXIS = "#8a969e"

SANS = '"Helvetica Neue", Helvetica, Arial, sans-serif'
MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'

# геометрия графика: 1 мс … 1 с по X, 1 … 1000 зёрен/с по Y
X0, X1, Y0, Y1 = 120.0, 700.0, 520.0, 120.0
DX = (X1 - X0) / 3.0
DY = (Y0 - Y1) / 3.0


def px(ms):
    return X0 + math.log10(ms) * DX


def py(dens):
    return Y0 - math.log10(dens) * DY


TEXT = {
    "ru": dict(
        title="Длина зерна и плотность задают характер облака",
        sub="Обе шкалы логарифмические. Границы зон приблизительные и плывут от исходника.",
        clicks=("щелчки, треск", "короткие и редкие"),
        buzz=("жужжание, тон", "ровный поток: нота", "вразнобой: шипение"),
        drops=("капли, дробь", "пунктир с паузами"),
        cloud=("облако", "зёрна внахлёст"),
        slicing=("нарезка", "обрывки исходника"),
        wall=("стена", "исходник размыт"),
        ms=("1 мс", "10 мс", "100 мс", "1 с"),
        xname="длина зерна",
        yname="плотность, зёрен в секунду",
        foot1="Сплошная линия: перекрытие 1, зёрна встык. Левее и ниже пунктир с паузами, правее и выше облако.",
        foot2="Пунктирная линия: перекрытие 10, дальше звук густеет до стены.",
    ),
    "en": dict(
        title="Grain length and density set the character of the cloud",
        sub="Both scales are logarithmic. The zone boundaries are approximate and shift with the source.",
        clicks=("clicks, crackle", "short and sparse"),
        buzz=("buzz, tone", "even stream: a note", "scattered: a hiss"),
        drops=("drops, rattle", "dotted, with gaps"),
        cloud=("cloud", "overlapping grains"),
        slicing=("slicing", "scraps of the source"),
        wall=("wall", "the source is blurred"),
        ms=("1 ms", "10 ms", "100 ms", "1 s"),
        xname="grain length",
        yname="density, grains per second",
        foot1="Solid line: overlap 1, grains end to end. Left and below it, dotted with gaps; right and above it, a cloud.",
        foot2="Dashed line: overlap 10, beyond it the sound thickens into a wall.",
    ),
    "es": dict(
        title="La duración del grano y la densidad definen el carácter de la nube",
        sub="Ambas escalas son logarítmicas. Los límites de las zonas son aproximados y varían según la fuente.",
        clicks=("clics, crepitar", "cortos y escasos"),
        buzz=("zumbido, tono", "flujo regular: una nota", "disperso: un siseo"),
        drops=("gotas, repiqueteo", "punteado con pausas"),
        cloud=("nube", "granos solapados"),
        slicing=("troceado", "retazos de la fuente"),
        wall=("muro", "la fuente se difumina"),
        ms=("1 ms", "10 ms", "100 ms", "1 s"),
        xname="duración del grano",
        yname="densidad, granos por segundo",
        foot1="Línea continua: solapamiento 1, granos uno tras otro. A la izquierda y abajo, punteado con pausas; a la derecha y arriba, una nube.",
        foot2="Línea discontinua: solapamiento 10; más allá el sonido se espesa hasta ser un muro.",
    ),
    "de": dict(
        title="Grain-Länge und Dichte bestimmen den Charakter der Wolke",
        sub="Beide Skalen sind logarithmisch. Die Zonengrenzen sind ungefähr und verschieben sich je nach Quelle.",
        clicks=("Klicks, Knistern", "kurz und selten"),
        buzz=("Summen, Ton", "gleichmäßiger Strom: ein Ton", "ungeordnet: ein Zischen"),
        drops=("Tropfen, Rattern", "gepunktet mit Pausen"),
        cloud=("Wolke", "überlappende Grains"),
        slicing=("Zerschneiden", "Fetzen der Quelle"),
        wall=("Wand", "die Quelle verschwimmt"),
        ms=("1 ms", "10 ms", "100 ms", "1 s"),
        xname="Grain-Länge",
        yname="Dichte, Grains pro Sekunde",
        foot1="Durchgezogene Linie: Überlappung 1, Grains lückenlos. Links und darunter gepunktet mit Pausen, rechts und darüber eine Wolke.",
        foot2="Gestrichelte Linie: Überlappung 10, dahinter verdichtet sich der Klang zur Wand.",
    ),
}


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def zone(x, y, w, h, color, dashed, fill_op=0.13):
    c = 9  # срезанный правый верхний угол
    d = f"M{x:.1f},{y:.1f} L{x + w - c:.1f},{y:.1f} L{x + w:.1f},{y + c:.1f} L{x + w:.1f},{y + h:.1f} L{x:.1f},{y + h:.1f} Z"
    dash = ' stroke-dasharray="6 4"' if dashed else ""
    return f'<path d="{d}" fill="{color}" fill-opacity="{fill_op}" stroke="{color}" stroke-width="1.5"{dash}/>'


def build(lang):
    t = TEXT[lang]
    o = []
    o.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="1520" height="1260" viewBox="0 0 760 630" font-family=\'{SANS}\' font-size="13">')
    o.append(f"<title>{esc(t['title'])}</title>")
    o.append(f'<rect width="760" height="630" fill="{BG}"/>')
    # заголовок: неоновая закладка и чёрная линия, как на страницах книги
    o.append(f'<rect x="24" y="16" width="30" height="3" fill="{CYAN}"/>')
    o.append(f'<text x="24" y="40" font-size="15.5" font-weight="700" fill="{INK}">{esc(t["title"])}</text>')
    o.append(f'<text x="24" y="60" font-size="11.5" fill="{MUTED}">{esc(t["sub"])}</text>')
    # сетка: декады
    for k in range(4):
        x = X0 + k * DX
        y = Y0 - k * DY
        o.append(f'<line x1="{x:.1f}" x2="{x:.1f}" y1="{Y1}" y2="{Y0}" stroke="{GRID}" stroke-opacity="0.16"/>')
        o.append(f'<line x1="{X0}" x2="{X1}" y1="{y:.1f}" y2="{y:.1f}" stroke="{GRID}" stroke-opacity="0.16"/>')
    # зоны
    zs = [
        (124.0, 350.5, 185.3, 165.5, CYAN, False),    # щелчки
        (124.0, 124.0, 243.5, 125.3, PINK, False),    # жужжание
        (375.5, 367.2, 127.1, 108.7, CYAN, True),     # капли
        (452.5, 257.3, 142.4, 101.9, STEEL, False),   # облако
        (510.7, 430.8, 185.3, 85.2, STEEL, True),     # нарезка
        (510.7, 124.0, 185.3, 125.3, PINK, True),     # стена
    ]
    for z in zs:
        o.append(zone(*z))
    # подписи зон
    def name(x, y, s, anchor):
        return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-weight="700" fill="{INK}">{esc(s)}</text>'

    def desc(x, y, s, anchor):
        return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-size="11.5" fill="{MUTED}">{esc(s)}</text>'

    o.append(name(216.7, 432, t["clicks"][0], "middle")); o.append(desc(216.7, 448, t["clicks"][1], "middle"))
    o.append(name(132.0, 215, t["buzz"][0], "start")); o.append(desc(132.0, 231, t["buzz"][1], "start")); o.append(desc(132.0, 245, t["buzz"][2], "start"))
    o.append(name(439.1, 412, t["drops"][0], "middle")); o.append(desc(439.1, 428, t["drops"][1], "middle"))
    o.append(name(514.0, 300, t["cloud"][0], "middle")); o.append(desc(514.0, 316, t["cloud"][1], "middle"))
    o.append(name(520.0, 485, t["slicing"][0], "start")); o.append(desc(520.0, 501, t["slicing"][1], "start"))
    o.append(name(603.0, 180, t["wall"][0], "middle")); o.append(desc(603.0, 196, t["wall"][1], "middle"))
    # линии перекрытия
    o.append(f'<line x1="120" y1="120" x2="700" y2="520" stroke="{INK}" stroke-width="1.6" stroke-opacity="0.85"/>')
    o.append(f'<line x1="{px(10):.1f}" y1="120" x2="700" y2="{py(10):.1f}" stroke="{INK}" stroke-width="1.4" stroke-opacity="0.65" stroke-dasharray="5 4"/>')
    o.append(f'<text x="380" y="284" font-family=\'{MONO}\' font-size="11.5" fill="{INK}">O = 1</text>')
    o.append(f'<text x="430" y="186" font-family=\'{MONO}\' font-size="11.5" fill="{INK}">O = 10</text>')
    # оси и деления (в том числе промежуточные 2…9, шкала логарифмическая)
    o.append(f'<line x1="{X0}" x2="{X1}" y1="{Y0}" y2="{Y0}" stroke="{AXIS}" stroke-width="1.5"/>')
    o.append(f'<line x1="{X0}" x2="{X0}" y1="{Y1}" y2="{Y0}" stroke="{AXIS}" stroke-width="1.5"/>')
    for dec in range(3):
        for m in range(2, 10):
            v = m * 10 ** dec
            x = px(v)
            o.append(f'<line x1="{x:.1f}" x2="{x:.1f}" y1="{Y0}" y2="{Y0 + 4}" stroke="{AXIS}"/>')
            y = py(v)
            o.append(f'<line x1="{X0 - 4}" x2="{X0}" y1="{y:.1f}" y2="{y:.1f}" stroke="{AXIS}"/>')
    for i, lab in enumerate(t["ms"]):
        x = X0 + i * DX
        o.append(f'<line x1="{x:.1f}" x2="{x:.1f}" y1="{Y0}" y2="{Y0 + 7}" stroke="{AXIS}" stroke-width="1.5"/>')
        o.append(f'<text x="{x:.1f}" y="{Y0 + 22}" text-anchor="middle" font-family=\'{MONO}\' font-size="11.5" fill="{MUTED}">{esc(lab)}</text>')
    for i, lab in enumerate(["1", "10", "100", "1000"]):
        y = Y0 - i * DY
        o.append(f'<line x1="{X0 - 7}" x2="{X0}" y1="{y:.1f}" y2="{y:.1f}" stroke="{AXIS}" stroke-width="1.5"/>')
        o.append(f'<text x="{X0 - 11}" y="{y + 4:.1f}" text-anchor="end" font-family=\'{MONO}\' font-size="11.5" fill="{MUTED}">{lab}</text>')
    o.append(f'<text x="410" y="568" text-anchor="middle" font-weight="700" fill="{INK}">{esc(t["xname"])}</text>')
    o.append(f'<text x="46" y="320" text-anchor="middle" transform="rotate(-90 46 320)" font-weight="700" fill="{INK}">{esc(t["yname"])}</text>')
    fs = 11.5 if lang in ("ru", "en") else 10.6
    o.append(f'<text x="24" y="596" font-size="{fs}" fill="{MUTED}">{esc(t["foot1"])}</text>')
    o.append(f'<text x="24" y="613" font-size="{fs}" fill="{MUTED}">{esc(t["foot2"])}</text>')
    o.append("</svg>")
    return "\n".join(o) + "\n"


if __name__ == "__main__":
    for lang in TEXT:
        name = "karta-zvuka.svg" if lang == "ru" else f"karta-zvuka-{lang}.svg"
        (OUT / name).write_text(build(lang), encoding="utf-8")
        print("записан", OUT / name)
