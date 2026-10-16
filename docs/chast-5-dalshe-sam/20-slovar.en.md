<p class="eyebrow">Chapter 20</p>

# Glossary

The terms are given the way they most often appear in interfaces and manuals. In a particular instrument the name of a knob may differ: see the "Where the parameters from [Part 2](../chast-2-parametry/index.md) are" tables in chapters 10–12.

| Term | Also called | What it means | Chapter |
| --- | --- | --- | --- |
| Asynchronous stream | asynchronous | grains are born at random intervals; there is no tone, there is a cloud | 2, 6 |
| Audio-rate modulation | | an LFO faster than 20 Hz: movement turns into timbre | 9 |
| Buffer | | an area of memory where the granulator records live sound so it can read grains from it | 4, 11, 16 |
| Capture | grab | recording live sound into the granulator as a new sample | 11, 16 |
| Cloud | | many overlapping grains sounding as a single sound | 1, 2, 13 |
| Density | rate | how many grains are born per second | 6 |
| FOF | Fonctions d'Onde Formantique | Xavier Rodet's formant synthesis from IRCAM, related to synchronous granular | 2, 6 |
| Formant | | a rise in the spectrum that sets the color of a sound, for example a vowel | 6, 7 |
| Freeze | | the position stands still, and the sound at that point goes on endlessly | 4 |
| Grain | | a short piece of sound, usually 1–100 ms, with a smooth start and end | 1, 2 |
| Grain envelope | window, shape | the volume shape of each grain; removes clicks and colors the sound | 1, 5 |
| Grain integrity | | a released grain plays out with the parameters it was born with | 9 |
| Grain limit | max grains, limit | the ceiling of simultaneously sounding grains; the main way to save the processor | 8, 16 |
| Grain pitch | pitch, transpose | the pitch of a grain, changed by reading speed; it moves the formants too | 7 |
| Grain size | length | the duration of a single grain | 5 |
| Intermittency | | the probability that the next grain won't be born; thins the stream without changing the density | 6 |
| Key tracking | key | the dependence of a parameter on the number of the note played | 9, 11 |
| Macro | | one knob that moves several parameters at once | 9, 16 |
| MPE | MIDI Polyphonic Expression | controlling each note separately: by pressure, slide, tilt | 8, 16 |
| Overlap | | how many grains sound at once on average: length × density | 2, 13 |
| Pan spread | spread, width, pan random | the placement of grains across the stereo field | 8 |
| Pitch quantization | quant | tying each grain's pitch to a given set of notes | 7 |
| Position | start | the place in the file from which a grain is taken | 4 |
| Pulsar synthesis | | Curtis Roads's method: the grain rate sets the note, the grain content sets the color | 2, 6 |
| Quasi-synchronous stream | quasi-synchronous | even intervals with a small random spread | 2 |
| Reading window | start/end, trim, region | the section of the file that the position moves through | 4 |
| Reverse | direction | the share of grains playing backwards | 7 |
| Scan | | automatic movement of the position through the file at a set speed | 4 |
| Skew | | shifting the peak of the envelope toward the start or end of the grain | 5 |
| Spread | spray, jitter, variation, random | a random deviation of a parameter for each grain | 4, 7, 8 |
| Synchronous stream | synchronous | grains go at equal intervals; above 20 a second a tone is born | 2, 6 |
| Tendency mask | | limits within which a parameter is chosen at random; the limits themselves move smoothly in time | 3 |
| Uncertainty principle | | the shorter the sound, the wider its spectrum; that is why short grains sound noisier | 3, 5 |
