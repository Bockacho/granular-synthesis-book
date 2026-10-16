<p class="eyebrow">Chapter 6</p>

# Density and synchronicity

<figure markdown="span">
  ![From sparse grains to a dense cloud](../images/6-1.png)
  <figcaption>Illustration 6.1. Density: from drops to a cloud.</figcaption>
</figure>

## Density

Density tells how many grains are born per second for one note. It is the knob that turns a rattle into a cloud.

**What it's called:** Density, Rate, Grains, Frequency, Grain Rate, Spawn Rate, Interval. If the knob is called Interval or Period, it works the other way round: it sets the pause between grains in milliseconds, and the bigger the number, the sparser the grains.

Three ways to set density:

- **Grains per second, in hertz.** 10 Hz means 10 grains per second.
- **In note divisions.** 1/16 means a grain on every sixteenth. The grains fall onto the grid, and the granulator becomes a drum machine.
- **From the pitch of the note.** The grain rate follows the keyboard, and the grains themselves give a tone (below).

What you hear as density grows, at a grain size of 50 ms:

| Density | Overlap | What you hear |
| --- | --- | --- |
| 2–8 grains/s | 0.1–0.4 | separate drops, pointillism, a sparse rain |
| 10–20 | 0.5–1 | a rattle, tremolo, grains almost end to end |
| 30–100 | 1.5–5 | a smooth cloud, chorus |
| 100 and up | over 5 | a dense wall, the source is blurred, the sound is like colored noise |

The composer John McKay described the same ladder in a listener's words: as density grows, a sequence of separate sounds turns into a stream, the stream into a swarm, the swarm into a merged band, and the band into a solid mass (retold after [Truax, 1988](https://doi.org/10.2307/3679938)).

<div class="grain-demo" data-demo="density">The sound demo runs in the browser with JavaScript enabled.</div>

## Volume grows with density

The more grains sound at once, the louder the cloud. Double the density and the level rises by about 3 dB if the grains are different. If the grains are identical and in phase, the rise is 6 dB. So when you raise the density, watch the output and turn the volume down. Some granulators compensate for this themselves.

??? info "Under the hood"

    Uncorrelated signals add by power: N grains give an amplitude proportional to the square root of N, that is, +3 dB for every doubling. Correlated ones add by amplitude: N grains give an amplitude N times greater, +6 dB per doubling. Position and pitch spread decorrelate the grains and protect against sharp jumps in volume.

## Synchronicity

[Chapter 2](../chast-1-zerno/02-anatomiya-zerna.md) introduced three stream modes: synchronous, asynchronous and quasi-synchronous. In interfaces you usually switch between them with a single knob.

**What it's called:** Sync, Async, Random Rate, Rate Jitter, Spray (in time), Irregularity, Chaos.

- **Timing spread 0.** The grains go like a metronome. Above 20 grains a second, a tone is born.
- **Timing spread medium.** The tone is rough and alive, like a choir or a bow.
- **Timing spread maximum.** There is no tone, there is a cloud, a rustle, a swarm.

Next to synchronicity there is sometimes one more knob: intermittency. It sets the probability that the next grain simply won't be born. The stream keeps to its previous grid, even or random, but holes appear in it, and the cloud thins out without a change of density on the knob. This is how the knob works in the free EmissionControl2 ([chapter 21](../chast-5-dalshe-sam/21-chto-dalshe.md)).

## Grains as a note generator

The most unexpected trick of granular synthesis. Tie density to the keyboard: press A4 and the grains go 440 times a second, synchronously. Now the granulator plays notes, though the position stands still and you haven't touched the grain's pitch.

The inside of the grain decides the timbre. A grain from the spoon's ring gives a metallic note, a grain from the vowel "ah" gives a note colored with "ah". That is how a synthetic choir is assembled from a recorded voice, and a bass from a knock on a table.

In this mode the sound has two pitches at once. One is set by the grain rate, and that is the note. The other is set by the pitch inside the grain ([chapter 7](../chast-2-parametry/07-vysota-i-napravlenie.md)), and that is the color, the formant. Move the grain's pitch and the note stays, while the timbre "opens" and "closes" like a mouth when singing.

This mode exists in ready-made instruments too. In Grain from Reason Studios it is called Grain Oscillator: the sound is assembled from two very short grains, the grain rate follows the note, and the original pitch of the recording is responsible only for the timbre. Two knobs show both sides of the principle. Grain Spacing sets the distance between the two grains inside the recording: the larger it is, the more even the sound from note to note, almost like a wavetable. Formant moves the color without touching the note, and at a large Grain Spacing sounds similar to classic oscillator sync.

??? info "Under the hood"

    This principle underlies FOF synthesis and pulsar synthesis. The rate r at which grains follow one another sets the fundamental. The duration of the grain and its content set the spectral envelope: where the spectrum rises, there is a formant. If the grain size is longer than the period 1/r, the grains overlap and the formants become narrower; if shorter, there is silence between the grains, and the spectrum becomes wider and more "pulsar-like".

??? info "Under the hood"

    Truax described this effect back in 1988. If grains of one length follow one after another, the granulator is in effect doing amplitude modulation at a frequency of 1 / (grain length + pause): a 15 ms grain and a 5 ms pause give 50 Hz. The envelope sets the shape of the modulating wave: the sharper the edges of the window, the more sidebands and the brighter the sound. The effect is strongest when the frequency inside the grain is a multiple of the modulation frequency. Scatter the grain lengths a little, and the even modulation crumbles into a rough stochastic texture ([Truax, 1988](https://doi.org/10.2307/3679938)).

## Exercise 6.1. Rain and a note { .exercise }

1. The spoon, position on the ring, size 30 ms, position spread 10 ms.
2. Density 3 grains a second, asynchronous. Sparse drops.
3. Smoothly raise the density to 200. Note where the drops merged into a cloud.
4. Set the timing spread to zero. Raise the density past 100. Hear how the cloud begins to hum with a tone.
5. If your instrument lets you tie density to the keyboard, play a scale. You are playing a melody with the spoon, while the position stands still all the time.
