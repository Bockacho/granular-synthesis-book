<p class="eyebrow">Chapter 5</p>

# Grain size and envelope

<figure markdown="span">
  ![Grains of different sizes and envelope shapes](../images/5-1.png)
  <figcaption>Illustration 5.1. Grain window shapes.</figcaption>
</figure>

## Size

Size tells how long each grain lasts. It is the second main knob after position, and it decides whether you recognize the source.

**What it's called:** Size, Length, Duration, Grain Size, Window Size.

Size is set in three ways, and it is useful to understand which one your instrument uses:

- **In milliseconds.** The most common option. 50 ms stays 50 ms on any note.
- **In note divisions.** The size is tied to the project tempo: 1/16, 1/32. Handy for rhythmic slicing.
- **Relative to pitch.** The size is counted in periods of the note being played, and on high notes the grains become shorter by themselves. This is how engines are built where the grains give a tone ([chapter 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md)).

What happens as you turn the size down from 500 ms to 1 ms:

1. **500–100 ms.** Pieces of the source are audible, the spoon is recognizable as a whole, with its attack.
2. **100–30 ms.** The attack blurs, and what remains is tone and colour. The zone of beautiful pads.
3. **30–10 ms.** The source is barely recognizable, and the sound becomes grainy and rough.
4. **10–1 ms.** The source's timbre vanishes, leaving clicks, buzzing, hissing. In a synchronous stream, new timbres are born here.

Size and density work as a pair (the overlap formula is in [chapter 2](../chast-1-zerno/02-anatomiya-zerna.md)). Reduce the size without touching the density, and the cloud thins out and gets holes. To keep it smooth, raise the density when the grains are short.

??? info "Under the hood"

    A short grain sounds wider than a long one because of the uncertainty principle: the duration of a signal and the width of its spectrum are inversely proportional. A 2 ms grain cut from a pure 440 Hz tone contains less than one period of that tone, and the spectrum smears over thousands of hertz. A 100 ms grain contains 44 periods, and the spectrum stays a narrow peak at 440 Hz.

## Grain envelope

The envelope decides how the grain's volume changes from start to end. You already know what it's for: removing clicks. But the shape of the envelope also strongly affects the sound.

**What it's called:** Window, Envelope, Shape, Grain Env, Smoothness, Contour.

| Shape | What it looks like | What it sounds like |
| --- | --- | --- |
| Bell (Hann) | a smooth rise, a smooth fall | soft, no clicks; the default working shape |
| Gauss | a narrower bell with long tails | even softer, but a smaller part of the grain is audible; the sound is foggier |
| Trapezoid (Tukey) | a fast rise, a flat shelf, a fast fall | more of the source, brighter and clearer; on short grains it can tick |
| Triangle | a straight rise, a straight fall | between the bell and the trapezoid, slightly harsher than the bell |
| Percussive | an instant attack, a long fall | each grain like a small pluck: drops, glassy rings, plucks |
| Reverse percussive | a long rise, an instant cutoff | the grains get sucked in, the sound is like a recording played backwards |
| Rectangle | no rise and no fall | clicks on every grain, harsh digital crackle, glitch |

Percussive windows have similar names in different programs. In Pigments it is Expodec (from exponential decay) and its opposite Rexpodec, in Serum 2 ExpDec and Exp Dec Rev, in the Borderlands granulator EXPDEC and its time-reversed version. If you see a name like that, you are looking at a drop or its reflection.

Often, instead of choosing a shape, you get one or two knobs:

- **Smoothing (Smooth).** Moves the shape from a rectangle to a bell. Zero means crackle, maximum means softness.
- **Skew (Skew, Tilt, Attack/Decay).** Shifts the peak of the envelope towards the start or the end of the grain. A peak at the start gives percussion, a peak at the end gives reverse percussion.

<div class="grain-demo" data-demo="size">The sound demo runs in the browser with JavaScript enabled.</div>

The window affects not only the grain's timbre but also the start of every note. The first grain of a note starts from zero and rises along the shape of the window. If a grain lasts a second and the window is triangular, the attack of the note will stretch to half a second, whatever is in the source. So on long grains a window with a sharp start gives the note its punch back, while a symmetrical window opens it softly. Rising windows on long grains give the impression of a recording played backwards, even though it is read forwards.

??? info "Under the hood"

    The window is multiplied with the grain, and multiplication in time is convolution in the spectrum: the window's spectrum smears the source's spectrum. For windows with smooth edges (Hann, Gauss) the main lobe is slightly wider, but the side lobes are tens of decibels lower, so they add little noise. The rectangular window gives high side lobes, hence the crackle. The trapezoid stands in the middle: the shelf lets more of the source through, but the steep edges raise the side lobes.

## Exercise 5.1. The shape decides { .exercise }

1. The spoon, position on the ring, spread 10 ms, medium density.
2. Size 80 ms. Switch through all the available envelope shapes and write down one word for each for yourself.
3. Size 5 ms. Repeat. Notice that on short grains the difference between shapes is more audible.
4. Find a percussive shape and set a lower density. The spoon has crumbled into drops.
