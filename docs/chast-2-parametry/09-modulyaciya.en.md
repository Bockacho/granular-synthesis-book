<p class="eyebrow">Chapter 9</p>

# Modulation: a sound that lives on its own

<figure markdown="span">
  ![Modulation controls a cloud of grains](../images/9-1.png)
  <figcaption>Illustration 9.1. An LFO moves the stream of grains.</figcaption>
</figure>

If all the knobs stand still, the cloud sounds beautiful but static, like a photograph. Modulation moves the knobs by itself, without your hands, and the photograph becomes a film. In granular synthesis modulation is especially important: grains are already random in the small details, and modulation gives them movement on the large scale.

## Modulation sources

**LFO, low-frequency oscillator.** Swings a parameter back and forth, over and over. The main settings: speed (in hertz or in note divisions), shape (sine, triangle, saw, square, random steps), depth.

- A slow sine on position (0.05–0.2 Hz) makes the cloud drift through the file, and the sound changes every few seconds.
- Random steps (Sample & Hold) on position, in time with quarter notes: on every beat the grains are taken from a new place. Instant rhythmic slicing.
- A fast LFO on grain pitch (5–7 Hz, depth 20–50 cents) gives vibrato.

**Envelope, ADSR.** Changes a parameter once per note: from key press to release.

- An envelope on position: each note starts with the spoon's knock and slides into the ring. The sound plays like a sample, but with a granular character.
- An envelope on size: at the start of the note the grains are short and click, toward the end they are long and smooth. A crunchy attack, a soft tail.
- An envelope on density: the cloud flares up and dies away together with the note.

**Performance.** Parameters that you control by hand as you play:

- **Key velocity.** The harder you hit, the greater the position spread. Quiet notes are clean, loud ones crumble.
- **Modulation wheel.** The most common assignment for a granulator: grain size or spread. One hand plays, the other turns the cloud.
- **Aftertouch and MPE.** Press harder on the key, and the cloud opens up.
- **Note number (keytrack).** High notes get short grains, low notes long ones. That way the sound is more even across the whole keyboard.

**Random per note.** A new random value on every key press. For example, a random start position: each note starts from its own place in the file, and even a repeating part doesn't sound the same twice.

## Depth and polarity

Every "source → parameter" connection has a depth: how far the modulation moves the knob. And a sign: plus moves it one way, minus the other. Depth matters more than speed. Start with a small depth and increase it until you hear movement, then back off a little. The most common beginner's mistake: modulation at full, and the sound turns into a carousel.

## Parameter links

The most expressive sounds come when one knob moves several parameters at once, sometimes in opposite directions. Macros are there for this.

**What it's called:** Macro, Quick Control, Performance Control, Morph.

| Link | What it does |
| --- | --- |
| size down + density up | the cloud becomes finer and thicker without falling into holes |
| position spread up + pitch spread up | the source dissolves into a haze |
| position along the file + filter brightness | the sound "wakes up" toward the end of the file |
| density down + reverb up | drops fall into an empty big hall |
| scan down + size up | time freezes, the sound turns into a long pad |

It is worth building yourself one such "tone → cloud" macro in an evening and playing it like a fader. On stage it is the main knob of the whole instrument.

## Modulation or automation

Internal modulation is done by the synthesizer itself and repeats on every note. Automation in the DAW is drawn along the track's timeline: for example, the spread slowly grows through the whole second verse. Use both: modulation gives life to each note, automation gives shape to the whole track.

??? info "Under the hood"

    When position is modulated by an audio-rate LFO (above 20 Hz), the modulation stops being movement and becomes timbre: the position swings so fast that the grains read the sound with frequency modulation inside. The same goes for grain pitch: an LFO in the audio range on pitch gives sidebands, as in FM synthesis. Not all instruments let the LFO go that high, but where they do, you get metallic and bell-like timbres from any source.

??? info "Under the hood"

    Modulation in a granulator almost always acts on grains that haven't been born yet. The values of the knobs are read at the moment a grain is born, and from then on the grain plays out to the end with them. Roads calls this grain integrity: in EmissionControl2 a released grain no longer changes its filter, its pan or its place in the file, and that protects against clicks ([Roads et al., 2021](https://doi.org/10.1162/comj_a_00613)). The Kaivo manual says the same, and Granulator III calculates the window shape this way ([chapter 11](../chast-3-instrumenty/11-granulator-iii.md)). So fast modulation on long grains sounds not like a smooth shift but like a scattering of grains with different values.

## Exercise 9.1. A breathing pad { .exercise }

1. The spoon, position on the ring, size 120 ms, density 30, position spread 30 ms, pitch spread 10 cents, pan 50%.
2. Assign a slow sine LFO (0.1 Hz) to position, with a depth such that the position wanders through the whole ring.
3. Assign an envelope to density: attack 2 seconds, release 4 seconds.
4. Assign the modulation wheel to grain size, negative: you turn the wheel, and the grains get finer.
5. Take a long chord and play with the wheel. That's your first complete granular instrument made from a spoon.
