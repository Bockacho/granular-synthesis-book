<p class="eyebrow">Chapter 14</p>

# Recipes by source

A granulator plays only what lies in the file. So the first question is always the same: what is there in this sound that isn't in others? Every source has its own strong zone on the map and its own traps.

About rights. For your own tracks, use your own recordings or samples with a licence that allows reworking. A granulator can make someone else's recording unrecognizable, but the rights to the source don't go anywhere because of that.

## Singing

**What it has.** Steady vowels with a clear pitch and formants, transitions between notes, breath.

**Where to put the position.** In the middle of a long vowel: there the sound is the most even and freezes best. Consonants give clicks and hiss, so avoid them or use them on purpose. Even better, sing vowels with transitions (ah-oh-oo), with sibilant and nasal tones: each transition becomes a new point for the position.

**Where to start.** Grain 80–150 ms, a cloud, a bell, position spread 10–20 ms. A voice is recognized even from short grains, so for an "inhuman" choir go down to 20–40 ms and add pitch spread.

**The trap.** Transposing the grains shifts the formants as well: an octave higher, the voice becomes a chipmunk. If you need a voice of the same colour but on another note, keep the grain pitch in place and change the note with the grain rate ([chapter 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md)) or take a vowel in the right key.

**Recipe.** One drawn-out "ah", the position in its middle, Cloud or a dense cloud, pitch spread 15–25 cents, wide stereo. You get a choir from one voice.

## Speech

**What it has.** A fast change of sounds, the rhythm of syllables, pauses.

**Where to put the position.** A scan at the original speed keeps the words intelligible. Slow the scan down, and the phrase stretches until it turns into a texture of vowels.

**Where to start.** Grain 40–80 ms, scan 25–50%, a small position spread so that the order of syllables is kept.

**The trap.** The pauses between words. Grains from silence give dropouts. Cut the pauses before loading, or lock the reading window onto one phrase.

**Recipe.** Position tied to the keys (recipe 11.5): each key takes its own syllable. You get a speaking instrument.

## Field recording

**What it has.** A complex noise spectrum, random events, the space of the place.

**Where to put the position.** Look for stretches with character: a passing car, a bird, a creak. An even city hum is good as an underlay but boring as the main voice.

**Where to start.** Long grains 200–500 ms, a slow scan, strong position spread. The sound keeps the place but loses the plot.

**The trap.** Low-frequency rumble. A dense cloud accumulates it and turns it to mush. Cut the low end with a filter before the granulator or in it.

**Recipe.** Street noise, scan 2–5%, grain 400 ms, a cloud, a long reverb. The city slows into breath.

## A string: guitar, violin, pluck

**What it has.** A clear pitch, rich harmonics, an attack and a long decay. A separate gold mine is an overdriven guitar with feedback from the amp: complex drifting harmonics give dozens of places to freeze.

**Where to put the position.** The attack gives a pluck and a knock, the middle of the decay gives a pure tone. The frozen middle of a note sounds like a bowed instrument without a bow.

**Where to start.** Grain 60–120 ms, position in the decay, a cloud, a slow LFO on position within the decay.

**The trap.** Tuning. The note in the recording rarely matches C. Find out what it is with a tuner and adjust the transposition ([chapter 11](../chast-3-instrumenty/11-granulator-iii.md)).

**Recipe.** A chord on the guitar, the position in the middle of the sound, a unison chord mode or an octave stack, a long volume attack. You get a pad in which you can hear the wood of the guitar.

## Drums and loops

**What they have.** Rhythm, sharp attacks, pauses between hits.

**Where to put the position.** It depends on the task. A scan at the original speed and on the grid keeps the groove. A freeze on a cymbal gives a hissing drone, on a kick a humming low end.

**Where to start.** Long grains (100–300 ms), the sample's pass tied to the bar, density by tempo. The Loop mode in Granulator III is the closest to an ordinary sampler, and the pack page on the Ableton site describes it as a mode for rhythmic material.

**The trap.** Short grains on percussion quickly turn rhythm into noise. It is beautiful, but the rhythm is gone. If the groove matters, keep the grain longer than the hit.

**Recipe.** A loop, scan 25%, medium position spread, reversed grains 30%. The drums crumble into "granular madness", as Henke calls it.

## Noise: white, wind, water

**What it has.** A continuous spectrum with no pitch.

**Where to put the position.** It hardly matters: noise is the same everywhere. But the granulator works here as a generator of rhythm and tone.

**Where to start.** Short grains of 2–10 ms in an even stream, the position stands still, spreads at zero: all grains are identical, and the noise turns into a tone with the pitch of the grain rate. And somewhat longer grains, 10–30 ms, with a percussive window and low density give rain.

**The trap.** Volume. Noise is dense by nature, and a dense cloud made of it quickly overloads the output.

**Recipe.** Water from a tap, grain 15 ms, 6 grains a second, a window with a sharp attack, pitch spread an octave up and down. You get drops on metal.

**One more recipe.** Slowly changing noise (a boiling kettle, waves), a slow scan, short grains with a percussive window and density by tempo of 1/16. You get a hi-hat part, as exact as a drum machine's, but with a timbre that keeps changing slightly.

## Keyboards and synth pads

**What they have.** An even tone without noise, a predictable spectrum.

**Where to put the position.** Anywhere inside the sound: it is even anyway.

**Where to start.** The granulator here adds movement. Medium grains, strong position and volume spread, pitch spread in octaves.

**The trap.** An even source plus zero spreads gives a bland cloud, similar to the source. Here spreads are a must.

**Recipe.** A piano chord, a freeze, grain 200 ms, a percussive window, 4–8 grains a second, position spread across the whole tail. The piano crumbles into a music box.

## The chords of your own song

**What they have.** Harmony that already fits the track.

**Where to put the position.** On the joins. Record all the chords or notes of the song on any instrument one after another and overlapping: with a long reverb tail or a sustained pad. Where the chords overlap, "in-between" harmonies are born that exist in no single chord.

**Where to start.** Long grains 150–300 ms, a slow scan, a cloud and a small position spread so the harmony doesn't blur into mush.

**The trap.** Tuning. Record in the same key as the track, and don't touch the grain transposition.

**Recipe.** A slow scan through the transitions between chords, a long reverb on top. You get an underlay that sounds in the track's harmony but repeats none of its chords.

## Exercise 14.1. Seven sources, one setting { .exercise }

1. Build a pad from recipe 10.1, 11.1 or 12.1.
2. Without touching the knobs, swap the source: singing, speech, street, guitar, drums, noise, piano.
3. For each, find the one knob that improves the sound the most. Write it down.
4. Compare the list with the traps of this chapter. Most likely you found them yourself.
