<p class="eyebrow">Chapter 16</p>

# Granular sound live

On stage a granulator stops being an effect and becomes an instrument. One note holds the cloud, while your hands move time, density and graininess. For this to work you need three things: convenient control, headroom on the processor and a safety net against surprises.

## Control: fewer knobs, more meaning

You can't turn twenty knobs on stage. Put together two or three main ones.

- **The main macro.** The very "tone → cloud" one from [chapter 9](../chast-2-parametry/09-modulyaciya.md): one knob moves grain length, position spread and the filter at once. Put it on a physical controller. In Serum assign a macro and bind it with MIDI Learn in the knob's context menu. In Pigments the four macros M1–M4 also learn from a controller. In Live any knob of Granulator III can be bound to a controller with the standard mapping.
- **Position at hand.** The X|Y pad in Serum ([chapter 10](../chast-3-instrumenty/10-serum-2.md)) or Position on a separate knob. Moving through the file is the most expressive action in granular playing.
- **Hold.** Hold in Granulator III keeps a chord after the keys are released: both hands are free for the knobs.
- **MPE.** Granulator III fully supports MPE, and so does Pigments. With an MPE controller each finger controls its own cloud: you open the spread with pressure and move the position with a slide.

## Live input

The strongest stage trick: granulating sound that is being born right now. Of the three instruments in the book, Granulator III can do this (Capture, [chapter 11](../chast-3-instrumenty/11-granulator-iii.md)). A voice, a guitar, a hardware synth, the sound of the room through a microphone: everything becomes a source with one press. Paired with an LFO on the Capture button, it turns the granulator into a machine that updates its material by itself every few bars.

In hardware, live granular sound comes from modules like Mutable Instruments Clouds and Make Noise Morphagene ([chapter 3](../chast-1-zerno/03-istoriya.md)). The principle is the same: a buffer records the input, grains read the buffer. Among newer ones are Beads, the successor of Clouds, and the Instruō Arbhar with a microphone right on the panel, and for guitarists pedals like the Hologram Microcosm and the Red Panda Particle 2. The desktop Tasty Chips GR-1 plays both as a synthesizer and as a drone machine.

Inside, a live granulator is built like a delay line: the input is constantly written into a short ring buffer, and grains read it with different lags. If you send part of the output back into the buffer (feedback), the grains start to granulate themselves, and the cloud builds up in layers, like an echo. Truax built this kind of feedback into his system as early as the 1980s ([Truax, 1988](https://doi.org/10.2307/3679938)). It is more convenient to keep the processed and dry signals on two separate knobs rather than one mix knob: then the granulated sound lives as a voice of its own. This is how the Stanford prototype GrainProc (2013) was built: a guitarist controlled these knobs on a tablet with their toes ([NIME 2013](https://www.nime.org/proceedings/2013/nime2013_99.pdf)).

## The processor

A granulator is more CPU-hungry than an ordinary synthesizer; the Serum 2 manual says so directly. On stage a processor overload sounds like crackle, and you can't mistake it for anything.

- **Grain limit.** Max Grains in Serum, Limit in Pigments, Density in Cloud mode for Granulator III. Set the ceiling with some headroom.
- **Unison and polyphony.** They multiply the number of grains. On stage three or four voices are often enough instead of eight.
- **Extra processing.** The Granulator III filter can be switched off to save CPU; Henke says so explicitly.
- **Freezing to audio.** Everything you don't need to turn live, convert to audio files in advance. The background layer can be played as a recording, leaving just one granulator live.
- **The audio interface buffer.** A bigger buffer gives the processor more headroom at the cost of latency. For clouds and drones a delay of 10–20 ms hardly gets in the way.

## Safety nets

- **A limiter on the output.** Density raises the volume ([chapter 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md)), and on stage this is easy to do by accident. A limiter catches the jumps before the audience hears them.
- **A high-pass filter.** A dense cloud accumulates rumble. A cut below 30–40 Hz is almost inaudible but protects the speakers and your volume headroom.
- **A point of return.** Set up the main macro so that in the zero position a safe, proven sound plays. Lost in the noise? Macro to zero.
- **Capture with a safety net.** Granulator III normalizes the captured sound to 0 dB: a quiet rustle can suddenly sound loud. Keep the track volume lower until you hear the capture.
- **A mono check.** A venue often sounds closer to mono than headphones do. Check the widest clouds in mono in advance ([chapter 8](../chast-2-parametry/08-prostranstvo-i-golosa.md)).

## Show the grains to the audience

The authors of the Borderlands granulator noticed a weak spot of granular performances: everything the musician does is hidden behind the laptop screen, and the audience doesn't see the link between the movement of a hand and the sound. Their solution: show the interface itself. In Borderlands the sound files lie on the screen as rectangles, clouds of grains are moved over them with a mouse, and each grain flashes at the moment of its birth.

If your granulator draws something, for example the X|Y pad in Serum 2 or a waveform with a moving position, put it on a projector. The audience will start to hear what it sees.

## States and transitions

Within one scene (more on scenes in the next section) it helps to think in states. A state is a snapshot of all the knobs at once: for example "sparse drops" and "a dense wall". You can play a transition from one to the other. Truax already worked this way: for him a tendency mask could be a smooth transition from one preset to another ([chapter 3](../chast-1-zerno/03-istoriya.md)). And in 2013 the same principle became the basis of the audiovisual granulator Kortex: there you can save a whole state and flow smoothly into another.

The character of a transition is decided by its shape. An even, linear transition sounds mechanical. A transition with acceleration or braking sounds more natural, and a transition with a bounce creates a sense of physics, as if the sound had bounced elastically.

In Serum 2 and Pigments this is built with a macro, and in Live with a macro of an Instrument Rack that holds Granulator III: it has no macros of its own. Set it up so that at zero the first state sounds and at maximum the second, and turn it. The shape of the transition is set by your hand or by an automation curve: slow at the start and fast at the end, or the other way round.

## How to build a performance

It helps to think of a granular set in scenes. A scene: a source, one setting, one main knob. Transitions between scenes come from the tricks in [chapter 15](../chast-4-praktika/15-recepty-po-zadache.md): the freeze-frame, the fall after the climax, the riser. Inside a scene the sound lives by modulation, and you add only large movements.

## Exercise 16.1. Ten minutes with one knob { .exercise }

1. Choose one source and build a cloud.
2. Assign the main macro to a physical knob: grain length, position spread and the filter.
3. Switch on recording and improvise for ten minutes, touching only this knob and the position.
4. Listen to the recording a day later. Mark the moments that were interesting and write down where the knobs stood. These are the raw material for a real set.
