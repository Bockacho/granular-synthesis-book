<p class="eyebrow">Chapter 7</p>

# Pitch, direction and pitch spread

<figure markdown="span">
  ![The pitch and direction of grains](../images/7-1.png)
  <figcaption>Illustration 7.1. Pitch spread across octaves.</figcaption>
</figure>

## Grain pitch

Grain pitch decides the speed at which the granulator reads the sound inside each grain. Read twice as fast, and the grain sounds an octave higher. Twice as slow, and an octave lower. The main point: this has no effect on position, and time moves through the file as it did.

**What it's called:** Pitch, Tune, Transpose, Grain Pitch, Coarse/Fine, Semi/Cent.

Pitch is usually set with two knobs: a coarse one in semitones and a fine one in cents (hundredths of a semitone). Plus the keyboard: in a synthesizer a pressed note transposes the grains relative to the base note, as in a sampler.

An important detail. When pitch is changed by the reading speed, the timbre travels along with the note. The spoon two octaves lower sounds like a cathedral bell, two octaves higher like glass dust. A voice an octave higher turns into a chipmunk, though the length of the sound hasn't changed. This property is easy to turn into an instrument: grain pitch works as a knob for the "size" of the source.

??? info "Under the hood"

    Changing the reading speed by a factor of k multiplies all the frequencies inside the grain by k, formants included. Some engines can shift pitch while preserving formants, but that is spectral processing on top of the granular kind. And in the synchronous mode from [chapter 6](06-plotnost-i-sinkhronnost.md) it is the other way round: the note is set by the grain rate, and the grain's pitch moves only the formants.

## Pitch spread

Pitch spread gives each grain a random deviation from the main note. It is one of the most beautiful knobs of a granulator.

**What it's called:** Pitch Spread, Pitch Random, Pitch Jitter, Detune, Pitch Scatter.

| Spread | What you hear |
| --- | --- |
| 1–10 cents | a light chorus, the sound is wider and warmer |
| 10–50 cents | a drifting, "drunken" detune, a sound as if from old tape |
| a few semitones | a cloud of neighbouring notes, a cluster, a haze |
| octaves | the grains jump between registers, shimmering |

??? info "Under the hood"

    Truax has an exact boundary for sine-wave grains: as long as the frequency band is narrower than about 10% of the mean frequency (a spread of about ±5%, that is, ±85 cents), the ear still hears pitch. Wider, the tone turns into a narrow band of noise, and then into broad noise ([Truax, 1988](https://doi.org/10.2307/3679938)). For grains from a recording the boundary is blurrier, because the sound inside the grain has a spectrum of its own, but the direction is the same.

In many granulators the spread can be tied to intervals. Then each grain takes its pitch only from a set: octaves, fifths, scale notes.

- **Octaves only.** The sound shimmers like glints on water, yet stays on one note. A classic ambient trick.
- **Octaves and fifths.** A shimmering organ chord.
- **Scale notes.** Each grain plays a random note of the scale, and one pressed key gives birth to a cloud of a chord.

In Quanta 2 this snapping is called QUANT: a button with a keyboard next to the TUNE knob opens a small window with keys. Switch on the notes you need, and each grain will play only those. If you switch on all twelve, the grains will go to any notes of the octave, and if only the bottom row, then only to notes without sharps and flats. Quantization takes the plugin's current tuning into account, so it also works with nonstandard tunings. That way the cloud stays in the key of the track.

<div class="grain-demo" data-demo="pitch">The sound demo runs in the browser with JavaScript enabled.</div>

## Direction

A grain can be read backwards. A short reversed grain is almost indistinguishable from a forward one by ear, but on grains longer than 50 ms the attacks turn around and the sound starts to be "sucked in".

**What it's called:** Reverse, Direction, Rev Prob, Backwards.

Often you get a probability: 0% means all grains are forward, 100% means all are reversed, 50% means mixed. The mix gives a wobbly, unsteady sound, as if time is staggering.

In Quanta 2 grain direction has five modes. FORWARD and REVERSE play the grains forwards or backwards. PLAY DIR follows the movement of the position: when the position travels towards the end of the file, the grains play forwards, when towards the start, backwards. -PLAY DIR works the opposite way. RANDOM picks the direction at random for each grain. A reversed grain reads the same piece of the file as the forward one, only backwards, so the edge of the piece doesn't shift.

??? info "Under the hood"

    Why a short reversed grain sounds like a forward one was explained by Truax: the grain's window is symmetrical, and a texture of synthesized grains can be played backwards with no change of timbre at all. He called such textures palindromic ([Truax, 1988](https://doi.org/10.2307/3679938)). A grain from a recording has its own movement inside, an attack and a decay, so on long grains the reversal is already audible.

## Sliding inside the grain

In some engines pitch can be changed right inside the grain: each one starts on one note and slides to another. Short grains with falling pitch sound like drops or laser "pew", long ones sound like groans. If your instrument has no such knob, no problem: a similar effect comes from fast pitch modulation ([chapter 9](../chast-2-parametry/09-modulyaciya.md)). Curtis Roads has a name of his own for such grains: glissons, and synthesis from them is called glisson synthesis.

## Exercise 7.1. A chord from one spoon { .exercise }

1. The spoon, position on the ring, size 100 ms, density 40, position spread 20 ms.
2. Play the note C. The ring has become that note.
3. Lower the pitch by −24 semitones. The spoon has become a bell.
4. Bring the pitch back. Give a pitch spread of 15 cents. The sound has become wider.
5. If there is a way to tie spread to intervals, choose octaves and raise the spread to ±1 octave. Shimmering.
6. Set the reverse probability to 50%. Listen to how wobbly it has become.
