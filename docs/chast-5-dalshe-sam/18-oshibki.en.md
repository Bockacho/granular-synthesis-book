<p class="eyebrow">Chapter 18</p>

# Common mistakes

Almost all problems with a granulator come down to about fifteen symptoms. Find yours in the left column.

| Symptom | Cause | What to do | Chapter |
| --- | --- | --- | --- |
| Clicks and crackle | the window is too sharp, the grain edges break off; the sample markers aren't on zero crossings | a bell window or higher smoothing; snap markers to zero, fades at the sample edges | 1, 5, 10, 12 |
| A mechanical hum when frozen | all the grains are identical, the stream has become periodic | position spread 5–30 ms | 4 |
| The cloud falls into holes | the overlap is less than one; grains are taken from silence | density or grain length up; a reading window without silence | 2, 4 |
| Mush in the low end | a dense cloud accumulates rumble | a high-pass filter; lower density; a filter on the sample before the granulator | 14, 16 |
| The volume jumps, the output is overloaded | volume grows with density | overall volume down, a limiter on the output, spreads for decorrelation | 6, 16 |
| The sound is out of tune | the sample's root note isn't C | find the note with a tuner, adjust the transposition or Root Note | 10, 11, 12 |
| The voice has become a chipmunk | grain transposition moves the formants | set the note with the grain rate; take a source in the right key | 6, 7, 14 |
| The source isn't recognizable, but it should be | the grains are too short, the spreads are large | grain longer than 30–50 ms, smaller spreads | 5, 13 |
| The source is recognizable, but it shouldn't be | the grains are long, there are no spreads | a shorter grain, higher position and pitch spread | 5, 13 |
| A wide cloud vanishes in mono | grain panning at maximum | reduce the width, check mono on the master | 8 |
| The processor crackles | too many grains: density × unison × polyphony | a grain limit, fewer voices, render to audio | 10, 12, 16 |
| The rhythm drifted | the length and density aren't tied to the tempo; transposition changes the grain length | tempo modes; length as a fraction of the period; the calculation 60,000 / BPM | 10, 11, 12 |
| Everything sounds the same and flat | spreads at zero, no modulation | spreads one at a time, a slow LFO on position | 8, 9 |
| The captured sound has disappeared | the capture in Granulator III wasn't saved | the Save button after a successful capture | 11 |

## The order of troubleshooting

When it's unclear what the matter is, go from top to bottom. First zero out all the spreads and modulation. Then check the source: listen to it without the granulator. Then return the grain length and density to the middle of the cloud on the map (100 ms, 30 grains a second). If the sound is normal at that point, bring the knobs back one at a time until the problem appears. The knob that brought it back is the culprit.
