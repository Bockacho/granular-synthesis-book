<p class="eyebrow">Chapter 2</p>

# The anatomy of a grain and a cloud

<figure markdown="span">
  ![The anatomy of a grain: a smooth start and end](../images/2-1.png)
  <figcaption>Illustration 2.1. The anatomy of a single grain.</figcaption>
</figure>

Every grain has its own set of properties, like a note in a score:

- **position**: where in the file it was taken from;
- **size**: how long it lasts;
- **envelope**: how it rises and fades;
- **pitch**: the speed at which its content is read;
- **volume**;
- **pan**: where it sounds, left or right.

A cloud adds two more properties. Density tells how many grains are born per second. Synchronicity tells how evenly they follow one another in time.

In a synthesizer, every key you press starts its own stream of grains. Play a chord of three notes and you have three clouds, each at its own pitch.

## What the ear hears at different lengths

| Grain length | What you hear | Where it's useful |
| --- | --- | --- |
| under 2 ms | a click, the source is unrecognizable | percussion, crackle, glitch |
| 2–20 ms | a coloured click, a buzz; in a dense stream, a new timbre | basses, synthetic voices, metal |
| 20–100 ms | the pitch and colour of the source are recognizable, but not its words or rhythm | pads, clouds, stretching |
| over 100 ms | whole fragments of the source are audible | slicing, rhythms, mosaic |

The boundaries are blurry and shift with the material. A voice is recognized from shorter grains than noise is, and the pure tone of the spoon is recognized from very short ones.

??? info "Under the hood"

    Truax gathered the data of psychoacoustics into a simple picture. A single short sound gets its pitch at about 13 ms, and its timbre unfolds fully by 40–50 ms. Hence a rough boundary around 50 ms: grains noticeably shorter merge into a continuous texture, grains noticeably longer are heard as separate events, and near 50 ms the sound seems to split into layers. A grain shorter than one period of the source doesn't carry its pitch at all and sounds like a wide band ([Truax, 1988](https://doi.org/10.2307/3679938)).

## Overlap

Grains can follow with gaps, end to end, or pile on top of each other. How much they pile up is simple to calculate:

$$
O = d \times r
$$

Here d is the grain length in seconds, r is the density in grains per second, and O shows how many grains sound at once on average.

- 50 ms × 10 grains per second = 0.5. There are gaps between the grains, and you hear a rattle.
- 50 ms × 20 = 1. The grains go end to end.
- 100 ms × 40 = 4. Four grains sound at once, and the cloud is smooth.

Below one means a dotted line and rhythm. Above one means a merged cloud, and the higher it is, the thicker the cloud and the more blurred the source.

## Synchronous and scattered

<figure markdown="span">
  ![A synchronous stream of grains and a scattered cloud](../images/2-2.png)
  <figcaption>Illustration 2.2. A synchronous and an asynchronous stream.</figcaption>
</figure>

**Synchronous stream.** The grains come at equal intervals, like metronome ticks. While there are fewer than 15–20 a second, you hear a rattle. Beyond that the ear stops telling the separate hits apart and hears a tone, and the pitch of that tone equals the number of grains per second. 110 grains per second sounds like the note A2, and 220 sounds like A3. And it doesn't matter what is inside the grain: a spoon or a voice. The inside of the grain sets the colour, and the grain rate sets the note.

**Asynchronous stream.** The intervals are random. There is no tone, there is a rustle, rain, gravel, a swarm. This is how classic granular clouds sound.

**Quasi-synchronous stream.** The intervals are even, but with a small random spread. The tone stays, but becomes rough and alive, like a choir or a bow.

<div class="grain-demo" data-demo="sync">The sound demo runs in the browser with JavaScript enabled.</div>

??? info "Under the hood"

    A synchronous stream of grains gives a periodic signal with period 1/r. Its spectrum consists of harmonics of the frequency r, while the spectral envelope, that is, the formants, is set by the content of the grain and the window shape. The same principle underlies Xavier Rodet's FOF formant synthesis from IRCAM and the pulsar synthesis that Curtis Roads described in the book "Microsound". In an asynchronous stream there is no period, and the spectrum smears into a continuous band of noise coloured by the source.

## Exercise 2.1. Calculate the cloud { .exercise }

Calculate the overlap and predict what you will hear. The answers are hidden below, open them once you have calculated.

1. Grain 30 ms, 10 grains per second.
2. Grain 200 ms, 25 grains per second.
3. Grain 5 ms, synchronous, 440 grains per second.

??? question "Answers"

    First: 0.3, a sparse rattle with gaps. Second: 5, a thick smooth cloud. Third: 2.2, a merged tone, the note A4 coloured by the source.
