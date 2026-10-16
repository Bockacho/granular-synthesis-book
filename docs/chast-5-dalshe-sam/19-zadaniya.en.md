<p class="eyebrow">Chapter 19</p>

# Exercises

The exercises are split into three levels. The first is within a schoolchild's reach, the third is for those who have read the "Under the hood" boxes. You don't have to do them in order.

## Level 1. First steps

1. **Five freezes.** Record five everyday sounds on your phone: a kettle, a door, footsteps, water, your own laugh. In each find the point where the freeze sounds best, and note where it is: in the attack, in the middle or in the tail.
2. **A choir of yourself.** Sing one long vowel and make a choir from it using the recipe from [chapter 14](../chast-4-praktika/14-recepty-po-istochniku.md).
3. **The map from memory.** Draw the map from [chapter 13](../chast-4-praktika/13-karta-zvuka.md) without peeking. Mark on it five of your own sounds from exercise 1.
4. **A melody on the spoon.** Play a simple melody on the spoon synthesizer (recipe 11.2) or on any sound with pitch tied to the keys.

## Level 2. The workshop

5. **One pad, three instruments.** Build the same pad in Serum 2, Granulator III and Pigments, using the "Where the parameters from [Part 2](../chast-2-parametry/index.md) are" tables. Compare by ear and write down how the sounds differ with equivalent settings.
6. **A track from one object.** Sixteen bars where all the sounds, drums and bass included, are made from one object.
7. **A ten-minute set.** An improvisation with live-sound capture or with one main knob (chapters 11 and 16). Record it and listen to it a day later.
8. **A freeze-frame in a track.** Put a freeze-frame and a fall after the climax into a finished track of your own ([chapter 15](../chast-4-praktika/15-recepty-po-zadache.md)).

## Level 3. Under the hood

9. **Calculating a note.** A synchronous stream must sound the note A4 (440 Hz) with an overlap of 2. What grain length is needed? The answer is at the end of the chapter.
10. **Uncertainty by ear.** Generate a 440 Hz sine. Cut a 2 ms grain and a 100 ms grain from it and look at both in any spectrum analyzer. Explain the difference with the formula from the box in [chapter 5](../chast-2-parametry/05-razmer-i-ogibayushchaya.md).
11. **A granulator in code.** Repeat exercise 1.1 in Pure Data, SuperCollider or Max: one grain with a window, then a stream of grains with a controllable position.
12. **The volume of a cloud.** Measure how much the level rises, in decibels, when you double the density with zero position spread and with a large one. Compare with the expectation from the box in [chapter 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md): from +3 to +6 dB.

## Final project. A portrait of a place { .exercise }

1. Choose a place: a courtyard, a station, a kitchen, a forest. Record a minute of sound there.
2. Make a three-minute piece from this recording using only granular means. Take no other sound sources.
3. Write down all the settings you used and mark the piece's path on the map from [chapter 13](../chast-4-praktika/13-karta-zvuka.md).
4. Let someone who hasn't been to that place listen, and ask what they imagined.

??? question "Answer to exercise 9"

    The overlap equals the grain length multiplied by the grain rate. So the length is 2 / 440 of a second, that is, about 4.5 ms.
