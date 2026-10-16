<p class="eyebrow">Chapter 1</p>

# Sound can be cut up

<figure markdown="span">
  ![One sound: whole, cut into pieces and scattered as a cloud of grains](../images/1-1.png)
  <figcaption>Illustration 1.1. A sound is cut into grains.</figcaption>
</figure>

The sound you recorded sits in your computer as a long row of numbers. Each number says where the microphone's diaphragm was at that instant: slightly forward or slightly back. There are 44,100 or 48,000 such numbers in one second, depending on how the file was recorded.

Since it is a row of numbers, it can be cut into pieces of any length. Granular synthesis cuts sound into very short pieces, usually from 1 to 100 milliseconds. A millisecond is a thousandth of a second. A 50 ms piece lasts one twentieth of a second: you will hear it, but you are unlikely to recognize where it was cut from.

Such a piece with a smooth start and a smooth end is called a grain. One grain means almost nothing, just as one drop is not yet rain. But fire off hundreds of grains a second and a new sound is born: a cloud. What it sounds like depends on four things: where the grains are taken from, how long they are, how often they fly and what pitch they sound at.

## The main superpower

In a tape machine or an ordinary sampler, the speed, pitch and length of a sound are locked together. Play a recording twice as fast and it sounds an octave higher and lasts half as long. Slow it down and it sounds lower and lasts longer. That is where the chipmunk voice and the voice of a slowed-down monster come from.

A granulator breaks that coupling. It decides separately where in the file to take grains from and separately what pitch to play them at. That gives you tricks a sampler doesn't have:

- **Freeze.** You stay at one point of the file, and the spoon's ring lasts as long as you like, even ten minutes.
- **Stretching.** You play through three seconds of sound over three minutes, and the pitch stays the same.
- **Transposition without changing length.** The ring plays an octave lower and lasts exactly as long.
- **Shuffling.** Grains are taken from random places in the file, and the sound crumbles into a mosaic.

??? info "Under the hood"

    At 48 kHz a 50 ms grain holds 2,400 samples. A granulator changes a grain's pitch the same way a sampler does: it reads the samples faster or slower and interpolates between them. The difference is that the start of each new grain is set separately, and the end of the previous one doesn't affect it. So the reading speed inside a grain (pitch) and the speed at which the position moves through the file (time) become two independent knobs.

## Why a grain needs smooth edges

Cut a piece of sound out with scissors and the waveform breaks off at the edges. The ear hears a break as a click. A hundred clicks a second turn into crackle. So each grain first rises smoothly out of silence and at the end sinks smoothly back into it. This volume shape is called the grain envelope, or window. We will go through window shapes in [chapter 5](../chast-2-parametry/05-razmer-i-ogibayushchaya.md).

??? info "Under the hood"

    A click is born from a discontinuity: the signal jumps from a nonzero value to zero in a single sample. A sharp jump has energy at all frequencies at once, hence the broadband click. The window brings the amplitude to zero at the edges, so a jump has nowhere to come from.

## Exercise 1.1. A granulator by hand { .exercise }

You can do this experiment in any DAW without plugins.

1. Put the spoon sound on an audio track.
2. Cut a 50 ms piece out of the middle of the ring. Zoom in so you hit the spot exactly.
3. Copy the piece 20 times in a row, end to end. The ring has become an even hum, but it crackles at the joins.
4. Give each piece a fade-in and a fade-out of 10–15 ms. The crackle is gone. You have just built a grain envelope.
5. Second version: cut 20 pieces of 50 ms, each 10 ms later than the previous one, and set them end to end with the same fades. The ring now changes slowly, as if time had slowed down, but the pitch is the same. That is stretching.
6. Third version: cut 20 pieces from random places across the whole file. There is your mosaic.

A granulator does the same thing, only hundreds of times a second, and instead of scissors it has knobs.
