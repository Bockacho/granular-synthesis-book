<p class="eyebrow">Chapter 4</p>

# Source and position

<figure markdown="span">
  ![The position in the file and the spread of grains around it](../images/4-1.png)
  <figcaption>Illustration 4.1. Position and position spread.</figcaption>
</figure>

## Source

A granulator invents nothing by itself: everything it plays comes from a source, most often from a recorded file. A bad source won't become good through a granulator, but a good one will open up in a dozen ways.

What makes a sound a good source:

- **A rich spectrum.** A ring, a voice, a string, street noise give the grains plenty of material. A pure sine gives a boring sine.
- **Change over time.** If a sound changes as it goes, each position in the file sounds different, and moving the position becomes music. The spoon does just that: the knock, the ring, the tail.
- **A clean recording.** Overload and digital clicks will be multiplied by a granulator into hundreds of copies.
- **No extra silence.** A grain taken from silence sounds like silence. The cloud will start falling into holes.

Stereo or mono? A stereo source gives the grains its own width, while mono leaves it up to the pan knob ([chapter 8](../chast-2-parametry/08-prostranstvo-i-golosa.md)). Start with mono, it makes clearer what each knob does.

The source doesn't have to be a recording. In Quanta 2 the input of the granulator is fed by the signals of two built-in oscillators, noise and a loaded file: four INPUT LEVELS sliders mix them, and the mix is cut into grains. So the granulator sounds even without a file. Simple waves with spreads turn into a dense layer like a "supersaw". Noise usually gives just more noise, but a little of it is useful mixed into a recording for density, or you can build percussion from it. In Serum 2 you can also granulate not only recordings but wavetables ([chapter 10](../chast-3-instrumenty/10-serum-2.md)).

## Position

Position tells from which place in the file to take the next grain. It is the main knob of a granulator, because it controls time.

**What it's called in interfaces:** Position, Pos, Start, Scan, Playhead, Offset.

Position is set as a percentage of the file length, in milliseconds, or with a cursor right on the picture of the waveform. It can be moved in three ways.

**Standing still (freeze).** The position doesn't move, and all the grains are taken from one point. The sound at that point goes on endlessly. Steady places freeze best: a vowel in a voice, the middle of a ring, an even string note. An attack freezes worse: grains from a knock give a buzz like a motor.

**Moving by hand.** You turn the knob and move through the file at any speed, forward and back. The sound becomes an instrument that you play with time.

**Moving automatically (scan).** The position travels through the file by itself at a set speed. A speed of 100% means the original tempo. 50% means half as fast, 0% means a freeze, and a negative speed means backwards.

$$
T_{\text{new}} = \frac{T_{\text{source}}}{s}
$$

Here s is the scan speed (1 = 100%) and T is the duration. A 3-second spoon at a speed of 1% sounds for 300 seconds, that is, 5 minutes, at the same pitch.

## Reading window

Many granulators let you limit the piece of the file that the position moves through: a start and an end, sometimes with a loop. You can lock the spoon sound into the zone of the ring and throw out the knock.

**What it's called:** Start/End, Loop, Region, Window, Range.

## Position spread

Spread tells how far from the position each grain may jump. At a spread of 0, all grains are taken from one point. At 20 ms, each grain is taken at random from somewhere within 20 ms of it.

**What it's called:** Spray, Jitter, Scatter, Random Position, Pos Rand, Variation.

| Spread | What you hear |
| --- | --- |
| 0 | a pure freeze, may sound "mechanical", with a hum |
| 5–30 ms | the sound comes alive, the hum goes away, a soft chorus appears |
| 50–300 ms | the source smears, a cloud is born |
| the whole file | a mosaic: grains from the knock, ring and tail mixed together |

This is the first knob to raise if a frozen sound seems mechanical.

??? info "Under the hood"

    The hum at zero spread arises because all the grains are identical: a stream of identical grains becomes a periodic signal, and the grain rate sticks out as a separate tone ([chapter 2](../chast-1-zerno/02-anatomiya-zerna.md)). Position spread makes neighboring grains different and breaks this periodicity. In essence it is decorrelation, the same trick on which a chorus is built.

## Live input

Some granulators can take grains from sound that is coming in right now: from a microphone, a guitar, a neighboring track. The sound is written into a short ring buffer, and the position moves through that. This turns the granulator into an effect. Which of our three instruments can do this we will go through in [Part 3](../chast-3-instrumenty/index.md).

## Exercise 4.1. Three points of the spoon { .exercise }

1. Load the spoon into any granulator. Scan at 0, spread at 0.
2. Put the position on the knock. Listen to the buzz.
3. Put the position in the middle of the ring. Listen to the steady tone.
4. Put the position in the tail, where it is almost silent. A quiet rustle and dropouts.
5. Go back to the ring and slowly raise the spread from 0 to maximum. Remember the point where the tone turns into a cloud.
