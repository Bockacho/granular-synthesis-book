<p class="eyebrow">Chapter 8</p>

# Space, randomness and voices

<figure markdown="span">
  ![A cloud of grains around the listener's head](../images/8-1.png)
  <figcaption>Illustration 8.1. A cloud in stereo.</figcaption>
</figure>

## Grain panning

Each grain can be placed at its own spot in the stereo field. As long as all the grains sound in the center, the cloud is narrow, as if from a single speaker. Scatter them, and the cloud spills across the whole width, and in headphones the grains start flying past your ears.

**What it's called:** Pan Spread, Stereo Spread, Width, Pan Random, Spatialize.

- **0%.** All grains in the center.
- **20–50%.** The cloud is wide, but the center is dense. A good option for a pad in a mix.
- **100%.** The grains fly from edge to edge. Impressive in headphones, but on a mono speaker part of the sound may vanish.

Check a wide cloud in mono: in your DAW switch the master to mono for a couple of seconds. If the sound dropped out or went dull, reduce the width.

Width can be obtained in another way too. Inside Quanta 2 there are two independent granulators, one for the left and one for the right channel, with shared knobs. Even from a mono recording they produce different grains, especially when the spreads are on, and the sound comes out wide. The WIDTH knob mixes the channels into each other: at zero the sound is mono, and further on the width grows up to the maximum.

??? info "Under the hood"

    Random panning per grain decorrelates the left and right channels. A wide cloud of decorrelated grains loses less when summed to mono than a stereo chorus does, because it contains few out-of-phase copies of the same signal. But with a stereo source of wide base and full spread, dropouts in mono are still possible.

## Random volume

Each grain can be given a random volume. The cloud starts to sparkle: some grains sound brighter, others are barely audible. The sound stops seeming polished.

**What it's called:** Amp Random, Level Spread, Gain Jitter, Velocity Random.

## Randomness as a knob of its own

Notice that almost every granulator parameter has a random twin: position spread, timing spread, pitch spread, pan, volume, direction. This is the heart of granular sound. The main knob sets where the sound is headed, and the spread sets how alive it is.

A simple rule to start with: first find the sound at zero spreads, then raise them one at a time, listening to each. If you raise everything at once, you get mush, and it's unclear which knob cooked it.

In some granulators the randomness can be "frozen": set the generator's seed, and the random pattern will repeat identically each time you press a note. Useful when you need a part that is alive but predictable.

## Grain limit and the CPU

Each grain costs the processor work. Density 200 grains a second, size 100 ms, a chord of six notes: about 120 grains sound at once. That is why granulators have a ceiling on the number of grains per voice. When it is reached, new grains aren't born, and the cloud may start to thin out or sound uneven.

**What it's called:** Max Grains, Grain Limit, Voices, Polyphony, Quality.

If the project lags: reduce the density, shorten the grains, cut the polyphony or freeze or bounce the track to audio.

## Voices and play modes

As in any synthesizer, a granulator has polyphony: how many notes can sound at once. Each note carries its own cloud.

- **Poly.** Chords, each note with its own cloud.
- **Mono and legato.** One note at a time. A new note can pick up the previous note's cloud instead of starting from the beginning. Good for basses and solo lines.
- **MPE.** If the instrument and the controller support MPE, each finger controls its own cloud separately: by pressure, tilt, up-and-down movement. You can, for example, open the position spread on just one note of a chord with finger pressure.

## After the granulator

Grains almost always benefit from processing after the granulator:

- **Reverb** glues the grains into one whole space and hides the clicking.
- **Delay** multiplies the grains and stretches the cloud in time.
- **A filter** removes the extra low end from a dense cloud and the extra top from crackle.
- **A compressor** evens out a cloud where the volume jumps with density.

## Exercise 8.1. A cloud around your head { .exercise }

1. Take the sound from exercise 6.1, where the cloud has just formed. Put on headphones.
2. Raise the pan spread from 0 to 100%. Note the moment the cloud opens up into space.
3. Switch the master to mono. Compare. Find the width at which mono still sounds fine.
4. Add random volume of 30–50%. The cloud will sparkle.
5. After the granulator, put a reverb with a long tail and a delay. Listen to how the sound turns into a place.
