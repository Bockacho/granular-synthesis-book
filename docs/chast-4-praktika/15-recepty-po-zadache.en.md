<p class="eyebrow">Chapter 15</p>

# Recipes by task

[Chapter 14](14-recepty-po-istochniku.md) started from the source. This one starts from the track: you need a pad, a bass or a transition, and you have to work out where to turn. The table below works as a cheat sheet, the zone is given by the map from [chapter 13](../chast-4-praktika/13-karta-zvuka.md).

| Task | Map zone | Main knobs | Modulation | After the granulator |
| --- | --- | --- | --- | --- |
| Pad | cloud | grain 80–200 ms, a dense cloud, a bell window, position and pitch spreads a little | a slow LFO on position, a long volume attack | chorus or reverb |
| Drone | cloud or wall | freeze, long grains 200–500 ms, zero pitch tracking by keys | a very slow LFO on position and filter | a long reverb, saturation |
| Background layer, ambient | wall | long grains, high density, strong position spread | a random LFO on position | a high-pass filter, reverb |
| Rhythm, glitch | slicing, drops | density and length by tempo, reversed grains, a stepped random LFO on position | automation of grain reversal | compressor, sidechain |
| Percussion | clicks, drops | position on the attack, grain 5–30 ms, a percussive window, density by tempo | an envelope on grain length and shape | filter, transient shaper |
| Bass | cloud, low end | transposition down 2–3 octaves, a long grain, mono, glide | an envelope on the filter | a low-pass filter, saturation |
| Vocal chops | slicing | speech or singing, position tied to keys, mono with glide | an envelope on grain shape and length | reverb, delay |
| Riser | from drops to a wall | density grows, the grain shrinks, the pitch rises | one macro or automation over 4–8 bars | the filter opens, the reverb grows |
| Fall after the climax | from a wall to drops | everything the other way: density falls, the grain grows, the pitch drops | the same macro in reverse | the reverb dies away |
| Freeze-frame | cloud | at the right moment the scan goes to zero, the sound freezes at the current point | scan automation | nothing: the effect is in the stop itself |
| Granular ornament | slicing, cloud | a granulator as an effect right on the track (drums, vocal, guitar), reading position and grain length by tempo | automation of density, window shape, direction and mix | reverb to taste: the sound lies on top of the original, like a live delay |

## Five questions before the first knob

When the task isn't in the table, questions help. Answer them in order, and most of the knobs will fall into place by themselves.

1. **Must the sound hold a pitch?** Yes: watch the key tracking and the tuning of the source. No: zero out the pitch tracking.
2. **Is the sound rhythmic?** Yes: density and length by tempo, the slicing or drops zone. No: a cloud.
3. **Must the source be recognizable?** Yes: grains longer than 30–50 ms and small spreads. No: short grains, strong spreads.
4. **Does the sound move by itself or is it played?** By itself: LFOs and envelopes ([chapter 9](../chast-2-parametry/09-modulyaciya.md)). Played: a macro, the modulation wheel, MPE.
5. **Where is it in the mix?** At the bottom: cut the top and narrow the stereo. At the top: cut the low end, widen the stereo. In the center of attention: keep the spreads smaller so the sound stays compact.

## The freeze-frame in detail

You won't find this trick in ordinary samplers, and it easily makes a track memorable. The sound goes as usual, the scan at the original speed, and at one moment the scan drops to zero. The sound doesn't cut off: it freezes at the point where it was and keeps sounding, like a frame put on pause. A bar later the scan returns, and the sound moves on.

In Serum it is automation of SCAN, in Granulator III automation of Scan, in Pigments the Scan knob moved to 12 o'clock. To keep the freeze-frame from humming mechanically, keep a small position spread.

## Exercise 15.1. A track from one spoon { .exercise }

1. Take five rows of the table: pad, bass, percussion, riser, freeze-frame.
2. Build them from the spoon on five tracks.
3. Play sixteen bars: the pad and bass hold the harmony, the percussion the rhythm, the riser leads to the freeze-frame on the last bar.
4. Listen and ask yourself: would you recognize the spoon in this track if you didn't know?
