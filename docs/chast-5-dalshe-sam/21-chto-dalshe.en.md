<p class="eyebrow">Chapter 21</p>

# Free instruments and what to read next

## Free granulators

Prices and terms of free plugins change often, so check the developer's page before downloading.

**Ribs, Hvoya Audio.** A granular effect and synthesizer in one, by Eugene Yakshin. On the developer's page it is distributed on a "pay what you want" basis, and zero is allowed. Modes: a synthesizer played by notes, a "scratch" with precise control of the head, a rhythmic mode with polyrhythms, plus an effect mode. An important feature: you can't load your own WAV file into Ribs, it fills its buffers with sound from the track it sits on. In Ableton Live a routing setup is needed, and the author shows it in a video ([hvoyaaudio.itch.io](https://hvoyaaudio.itch.io/ribs)).

**Argotlunar, Michael Ourednik.** A live-sound granulator built on a delay line: each grain gets a random volume, pan, duration, delay, pitch, glissando, filter and envelope. Open source under the GPLv2 license, versions for Windows, macOS and Linux ([GitHub](https://github.com/mourednik/argotlunar)). The plugin is old, the latest version 2.0.6 was built on the 2013 JUCE library, so it may not run on newer systems.

**Emergence, Daniel Gergely.** A live-sound granulator: up to 600 grains in four independent streams, buffer freeze, transposition ±24 semitones. The early version 0.3 was given away for free, but version 1.0 on the author's page is already paid, from 20 dollars ([itch.io](https://daniel-gergely.itch.io/emergence1)). It is an effect: you don't load your own file into it, it granulates the sound that passes through it.

**Granulator II, Robert Henke.** The predecessor of Granulator III, free, under a non-commercial Creative Commons license ([Synthtopia, Henke's quote](https://synthtopia.com/?p=48204)). It needs Max for Live. Henke writes that Granulator II is still available but most likely won't be updated any more.

**EmissionControl2, Curtis Roads, Jack Kilgore, Rodney DuPlessis.** A standalone program (not a plugin) for macOS, Windows and Linux, open source under the GPL-3 license. It works with sound files and doesn't take live input. Up to 2,048 grains at once, grain length from 20 microseconds to 10 seconds, each grain with its own filter, pan and window, six LFOs up to 6,000 Hz, intermittency and stream-count knobs, presets with smooth transitions between them. Made by the author of "Microsound" for study, research and the stage ([GitHub](https://github.com/EmissionControl2/EmissionControl2)).

**Pure Data and SuperCollider.** Free environments where a granulator is built from blocks or written in code. Suitable for exercise 11 from [chapter 19](../chast-5-dalshe-sam/19-zadaniya.md) and for anyone curious how it works inside. For Pure Data and Max there is the free +bubbler granulator by Tom Erbe, the author of algorithms for Make Noise modules ([SoundHack](https://www.soundhack.com/freeware/)).

## Paid, but interesting: Grain in Reason

Grain Sample Manipulator is included in Reason, in the Reason Rack plugin (VST3, AU and AAX, so it works in any DAW) and in the Reason+ subscription. You load your sound into it by dragging or record straight into the instrument with the Start sampling button. After that comes the usual set: up to 12 voices, four envelopes, three LFOs, eight modulation buses and six effects whose order is changed by dragging.

The peculiarity of Grain is that it has four algorithms, and each reads the same file in its own way.

| Algorithm | What it does |
| --- | --- |
| Spectral Grains | breaks the recording into partials and works with them separately |
| Grain Oscillator | two very short grains, the grain rate follows the note (chapter 6) |
| Long Grains | long grains with knobs for length, speed, crossfade and pitch spread |
| Tape | like a tape recorder: speed and pitch are linked, at speed 0 the tape stops |

**Spectral Grains.** The algorithm analyzes the frequencies of the recording and finds partials in it. The Snap knob pulls inharmonic partials to the nearest harmonic ones: at zero the sound barely changes, at 100% only harmonic ones remain. The Filter knob does the same by cutting: inharmonic partials are suppressed, harmonic ones remain. The ring of a spoon against a cup is just inharmonic, so this algorithm is most audible on it. The Curve knob lets you draw your own formant curve: above the pink zone the partials are boosted, below it they are attenuated, and Amount sets the strength.

**Motion modes.** They are responsible for how the head moves through the file: Freeze (stands at the start), One Shot (a single pass), FW Loop and FW-BW Loop (a loop forwards or as a pendulum), End Freeze (a pass and a stop at the end) and Envelope 1. In the last one the path through the file is drawn by an envelope: the bottom of the curve means the start of the selected section, the top means the end. If you choose a straight upward ramp, switch on the loop and sync to the beat, the sample will run exactly in time with the project.

**The pitch of the recording as modulation.** On loading, Grain analyzes the pitch of the sound across the whole recording and stores it as a curve. This curve can be taken as a modulation source: parameters will start to follow the pitch at the place in the file where the position marker stands.

!!! success "Recipe 21.1. The spoon that became a note"

    1. Load the spoon. Motion in Freeze mode, the Sample Start marker on the ring.
    2. The Spectral Grains algorithm, Snap and Filter at zero, Formant Kbd at 100%. Play a scale: the spoon sounds just as metallic, but now follows the keys.
    3. Smoothly raise Snap. The inharmonic partials are pulled toward harmonic ones, the ring loses its metal and becomes tonal. After that the pitch can be set with the ordinary OCT, SEMI and TUNE knobs.
    4. Try Filter instead of Snap and compare. The filter doesn't move tones but removes the extra ones, so the sound is drier.
    5. Draw a curve in Curve and raise Amount. That is how you choose which partials remain the main ones.

## A standalone granulator: Quanta 2

!!! note "About the version"

    The description corresponds to Quanta 2, manual version 2.0.

Quanta 2 from Audio Damage is a synthesizer with the granulator in the place of the oscillator. It is built like a classic subtractive one: the granulator, two analog oscillators and noise go into two filters (in series or in parallel), and then through chorus, delay and reverb. Up to 15 voices. Formats: on macOS AU, VST3 and AAX, on Windows VST3 and AAX, on Ubuntu VST3. There is a demo version: it works like the full one, but doesn't save presets and project state and stops sounding 20 minutes after being added to a session.

You load your own file by dragging it onto the window. Quanta accepts WAV, AIFF, MP3, Ogg and FLAC of any sample rate and bit depth, takes the first two channels, normalizes the recording on loading and stores it right inside the preset. So a preset moves to another computer without the original file, but is heavy. Quanta determines the root note itself by measuring pitch in four places of the recording. For a simple steady sound this is usually accurate, while for a complex one, such as a drum loop, it sets C4. Correct an error with the mouse in the ROOT NOTE field.

| Parameter from Part 2 | Where in Quanta 2 |
| --- | --- |
| Position (chapter 4) | the POSITION knob from 0 to 1 or a click on the waveform |
| Size (chapter 5) | LENGTH, from 1 ms to 1 s |
| Envelope (chapter 5) | ENVELOPE, ten shapes |
| Density (chapter 6) | GRAINS, from 1 to 100 grains per second |
| Pitch (chapter 7) | TUNE (±2400 cents), FINE (±100 cents), QUANT |
| Direction (chapter 7) | the DIRECTION menu |
| Spreads (chapters 4–8) | RAND knobs next to many granulator knobs |
| Width (chapter 8) | WIDTH |
| Volume (chapter 8) | LEVEL |

ENVELOPE flips through ten shapes: Rectangle, Triangle, Trapezoid, Sine Squared, Half Sine and Rounded Rectangle, and four asymmetric ones besides. Curved Down and Ramp Down start sharply and decay, exponentially or in a straight line: this is how drops and plucks sound. Curved Up and Ramp Up grow toward the end of the grain: this gives the impression of reverse playback on long grains. The permitted grain length of up to a second was chosen on purpose so that Quanta can make glitches similar to delay.

On the waveform an orange oval shows where the granulator is reading from right now: it moves along with the position modulation, and its width shows the range of the random spread.

**Modulation.** A right-click on any knob opens the routing panel. Press the plus, choose a source and move the depth slider: to the left of center the signal is inverted. Up to five sources can be applied to one target. The sources: four FEG envelopes, two LFOs, sample-and-hold, KEY, VELOCITY, AFTERTOUCH, PITCHBEND, MODWHEEL, CC 74, T-RAND (a random number on each note, separate for each voice) and four macros that can be bound to MIDI controllers. The FEG envelopes are drawn by points: any number of points, the loop goes forwards or as a pendulum, and the SCALE knob from 1/8 to 8 speeds up or slows down the whole curve. Pitch follows the keys through a KEY route to TUNE with a value of 100, and in a new instance it is already set up.

**If there is no sound.** The GLOBAL LEVEL parameter as a modulation target works as the final amplifier: at least one envelope must be connected to it, by default that is FEG 1. Silence can also come from the two filters set up so that in series mode nothing is left: switch them to parallel.

!!! success "Recipe 21.2. The spoon in key"

    1. Load the spoon. If Quanta determined the root note wrongly, correct ROOT NOTE.
    2. POSITION on the ring, LENGTH about 120 ms, GRAINS about 30, ENVELOPE on Sine Squared: this shape is click-free.
    3. Switch on QUANT and leave only the notes of your scale.
    4. Raise RAND on TUNE: the grains spread out in pitch but stay in your scale.
    5. Play a chord.

## What to read

- **Curtis Roads, "Microsound"** (MIT Press, 2001). The main textbook on granular synthesis and microsound: theory, history, methods, pulsar synthesis.
- **Curtis Roads, "Introduction to Granular Synthesis"** (Computer Music Journal, 1988). A short introduction to the subject from the author of "Microsound".
- **Chris Carlson, Ge Wang, "Borderlands: An Audiovisual Interface for Granular Synthesis"** (NIME conference, 2012). How a granulator in which the grains are visible on the screen is built.
- **Iannis Xenakis, "Formalized Music"** (English edition of 1971). The theory on which granular composition grew.
- **Dennis Gabor, "Acoustical Quanta and the Theory of Hearing"** (Nature, 1947). The paper where sound is first described as a stream of quanta.
- **Barry Truax, Granular Synthesis** ([sfu.ca](https://www.sfu.ca/~truax/gran.html)). A short text by the author of the first real-time granulator.
- **Barry Truax, "Real-Time Granular Synthesis with a Digital Signal Processor"** (Computer Music Journal, 1988; [doi.org](https://doi.org/10.2307/3679938)) and **"Composing with Real-Time Granular Sound"** (Perspectives of New Music, 1990). The primary sources on the first real-time granular synthesis.
- **Joshua Batty, Kipps Horn, Stefan Greuter, "Audiovisual Granular Synthesis: Micro Relationships Between Sound and Image"** (IE '13 conference, ACM, 2013; [doi.org](https://doi.org/10.1145/2513002.2513568)). Granular synthesis of sound and video at the same time, the Kortex instrument.
- **Curtis Roads, Jack Kilgore, Rodney DuPlessis, "Architecture for Real-Time Granular Synthesis With Per-Grain Processing: EmissionControl2"** (Computer Music Journal, 2021; [doi.org](https://doi.org/10.1162/comj_a_00613)). How a modern granulator is built inside, and a short history of the method from Gabor to the present day.
- **Curtis Roads, "Path to Half Life"** ([curtisroads.net](https://www.curtisroads.net/s/04-Path-to-Half-Life.pdf)). How a composer went from the first studies to music made of grains.
- **Robert Henke, the Granulator III page** ([roberthenke.com](https://www.roberthenke.com/technology/granulator3.html)). A full description of the instrument by its author.
- **The Serum 2 and Pigments 7 manuals.** Full descriptions of all parameters, opened from the instruments' own menus.
- **The Reason Studios manual, the Grain Sample Manipulator section** ([reasonstudios.com](https://reasonstudios.com/devices/grain)). All the parameters of the four algorithms and the Motion modes.
- **The Quanta 2 manual, Audio Damage** ([audiodamage.com](https://www.audiodamage.com/products/ad055-quanta-2)). All the granulator's knobs, modulation, tuning settings and MPE.

## Instead of an afterword

You began the book with three seconds of a spoon's ring, and you end it with a map, three instruments and twenty recipes. But the most valuable discovery lies beyond the knobs. Any sound around you is now material: a creaking door, rain on the windowsill, a friend's voice. Record something today. Tomorrow it will become an instrument that no one else has.
