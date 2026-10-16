<p class="eyebrow">Kapitel 4</p>

# Quelle und Position

<figure markdown="span">
  ![Die Position in der Datei und die Streuung der Grains um sie herum](../images/4-1.png)
  <figcaption>Illustration 4.1. Position und Positionsstreuung.</figcaption>
</figure>

## Quelle

Ein Granulator erfindet nichts selbst: Alles, was er spielt, kommt aus einer Quelle, meistens aus einer aufgenommenen Datei. Eine schlechte Quelle wird durch den Granulator nicht gut, aber eine gute zeigt ein Dutzend Seiten.

Was einen Klang zu einer guten Quelle macht:

- **Ein reiches Spektrum.** Ein Klingen, eine Stimme, eine Saite, Straßenlärm geben den Grains viel Material. Ein reiner Sinus ergibt einen langweiligen Sinus.
- **Veränderung in der Zeit.** Wenn sich ein Klang im Verlauf ändert, klingt jede Position in der Datei anders, und die Bewegung der Position wird zu Musik. Beim Löffel ist das so: Anschlag, Klingen, Ausklang.
- **Eine saubere Aufnahme.** Übersteuerung und digitale Klicks vervielfacht der Granulator in Hunderten Kopien.
- **Keine überflüssige Stille.** Ein Grain aus der Stille klingt nach Stille. Die Wolke fällt dann in Löcher.

Stereo oder mono? Eine Stereoquelle gibt den Grains ihre eigene Breite, eine Monoquelle überlässt sie dem Panoramaregler ([Kapitel 8](../chast-2-parametry/08-prostranstvo-i-golosa.md)). Fang mit mono an, so ist klarer, was jeder Regler tut.

Die Quelle muss keine Aufnahme sein. In Quanta 2 kommen am Eingang des Granulators die Signale zweier eingebauter Oszillatoren, des Rauschens und einer geladenen Datei an: Vier Schieberegler INPUT LEVELS mischen sie, und die Mischung wird in Grains geschnitten. Deshalb klingt der Granulator auch ohne Datei. Einfache Wellen mit Streuungen werden zu einer dichten Schicht wie einem „Supersaw“. Rauschen ergibt meist nur noch mehr Rauschen, aber ein wenig davon unter eine Aufnahme gemischt sorgt für Dichte, oder man baut Perkussion daraus. Auch in Serum 2 lassen sich nicht nur Aufnahmen granulieren, sondern auch Wavetables ([Kapitel 10](../chast-3-instrumenty/10-serum-2.md)).

## Position

Die Position sagt, von welcher Stelle der Datei das nächste Grain genommen wird. Sie ist der wichtigste Regler eines Granulators, denn sie steuert die Zeit.

**So heißt sie in Oberflächen:** Position, Pos, Start, Scan, Playhead, Offset.

Die Position wird in Prozent der Dateilänge angegeben, in Millisekunden oder mit einem Cursor direkt im Wellenbild. Bewegen lässt sie sich auf drei Arten.

**Stehen bleiben (Einfrieren).** Die Position bewegt sich nicht, alle Grains kommen von einer Stelle. Der Klang an dieser Stelle dauert endlos an. Am besten frieren stabile Stellen ein: ein Vokal in einer Stimme, die Mitte eines Klingens, ein gleichmäßiger Saitenton. Ein Anschlag friert schlechter ein: Grains aus dem Anschlag ergeben ein Summen wie von einem Motor.

**Von Hand bewegen.** Du drehst den Regler und bewegst dich mit beliebiger Geschwindigkeit durch die Datei, vorwärts und rückwärts. Der Klang wird zu einem Instrument, das du mit der Zeit spielst.

**Automatisch bewegen (Scan).** Die Position fährt von selbst mit einer vorgegebenen Geschwindigkeit durch die Datei. 100 % bedeutet das Originaltempo. 50 % bedeutet halb so schnell, 0 % bedeutet Einfrieren, eine negative Geschwindigkeit bedeutet rückwärts.

$$
T_{\text{new}} = \frac{T_{\text{source}}}{s}
$$

Dabei ist s die Scan-Geschwindigkeit (1 = 100 %) und T die Dauer. Ein Löffel von 3 Sekunden klingt bei 1 % Geschwindigkeit 300 Sekunden lang, also 5 Minuten, in derselben Tonhöhe.

## Lesefenster

Viele Granulatoren erlauben es, den Abschnitt der Datei einzugrenzen, durch den sich die Position bewegt: Anfang und Ende, manchmal mit Loop. Den Löffelklang kannst du in der Zone des Klingens einsperren und den Anschlag weglassen.

**So heißt es:** Start/End, Loop, Region, Window, Range.

## Positionsstreuung

Die Streuung sagt, wie weit jedes Grain von der Position wegspringen darf. Bei einer Streuung von 0 kommen alle Grains von einer Stelle. Bei 20 ms wird jedes Grain zufällig irgendwo innerhalb von 20 ms um sie herum genommen.

**So heißt sie:** Spray, Jitter, Scatter, Random Position, Pos Rand, Variation.

| Streuung | Was man hört |
| --- | --- |
| 0 | reines Einfrieren, kann „maschinell“ klingen, mit einem Brummen |
| 5–30 ms | der Klang wird lebendig, das Brummen verschwindet, ein weicher Chorus entsteht |
| 50–300 ms | die Quelle verschwimmt, eine Wolke entsteht |
| die ganze Datei | ein Mosaik: Grains aus Anschlag, Klingen und Ausklang durcheinander |

Das ist der erste Regler, den du aufdrehen solltest, wenn ein eingefrorener Klang mechanisch wirkt.

??? info "Unter der Haube"

    Das Brummen bei null Streuung entsteht, weil alle Grains gleich sind: Ein Strom identischer Grains wird zu einem periodischen Signal, und die Grain-Rate tritt als eigener Ton hervor ([Kapitel 2](../chast-1-zerno/02-anatomiya-zerna.md)). Die Positionsstreuung macht benachbarte Grains verschieden und bricht diese Periodizität. Im Grunde ist das Dekorrelation, derselbe Trick, auf dem ein Chorus beruht.

## Live-Eingang

Manche Granulatoren können Grains aus einem Klang nehmen, der gerade hereinkommt: von einem Mikrofon, einer Gitarre, einer benachbarten Spur. Der Klang wird in einen kurzen Ringpuffer geschrieben, und die Position bewegt sich durch ihn. So wird der Granulator zum Effekt. Welche unserer drei Instrumente das können, sehen wir in [Teil 3](../chast-3-instrumenty/index.md).

## Übung 4.1. Drei Stellen des Löffels { .exercise }

1. Lade den Löffel in einen beliebigen Granulator. Scan auf 0, Streuung auf 0.
2. Setz die Position auf den Anschlag. Hör dir das Summen an.
3. Setz die Position in die Mitte des Klingens. Hör dir den gleichmäßigen Ton an.
4. Setz die Position in den Ausklang, wo fast Stille ist. Leises Rauschen und Aussetzer.
5. Geh zurück ins Klingen und dreh die Streuung langsam von 0 auf Maximum. Merk dir den Punkt, an dem der Ton zur Wolke wird.
