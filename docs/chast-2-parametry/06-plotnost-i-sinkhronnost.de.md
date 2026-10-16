<p class="eyebrow">Kapitel 6</p>

# Dichte und Synchronität

<figure markdown="span">
  ![Von vereinzelten Grains zur dichten Wolke](../images/6-1.png)
  <figcaption>Illustration 6.1. Dichte: von Tropfen zur Wolke.</figcaption>
</figure>

## Dichte

Die Dichte sagt, wie viele Grains pro Sekunde und pro Ton entstehen. Das ist der Regler, der aus einem Rattern eine Wolke macht.

**So heißt sie:** Density, Rate, Grains, Frequency, Grain Rate, Spawn Rate, Interval. Heißt der Regler Interval oder Period, arbeitet er umgekehrt: Er legt die Pause zwischen den Grains in Millisekunden fest, und je größer die Zahl, desto seltener die Grains.

Drei Arten, die Dichte festzulegen:

- **Grains pro Sekunde, in Hertz.** 10 Hz bedeutet 10 Grains pro Sekunde.
- **In Notenwerten.** 1/16 bedeutet ein Grain auf jede Sechzehntel. Die Grains landen im Raster, und der Granulator wird zur Drum-Machine.
- **Nach der Tonhöhe.** Die Grain-Rate folgt der Tastatur, und die Grains selbst ergeben einen Ton (siehe unten).

Was man bei steigender Dichte hört, bei einer Grain-Größe von 50 ms:

| Dichte | Überlappung | Was man hört |
| --- | --- | --- |
| 2–8 Grains/s | 0,1–0,4 | einzelne Tropfen, Pointillismus, dünner Regen |
| 10–20 | 0,5–1 | Rattern, Tremolo, Grains fast lückenlos |
| 30–100 | 1,5–5 | eine glatte Wolke, Chorus |
| 100 und mehr | über 5 | eine dichte Wand, die Quelle verschwimmt, es klingt wie gefärbtes Rauschen |

Der Komponist John McKay hat dieselbe Stufenleiter aus Sicht des Hörers beschrieben: Mit wachsender Dichte wird aus einer Folge einzelner Klänge ein Strom, aus dem Strom ein Schwarm, aus dem Schwarm ein geschlossenes Band und aus dem Band eine kompakte Masse (nach [Truax, 1988](https://doi.org/10.2307/3679938)).

<div class="grain-demo" data-demo="density">Die Klangdemo läuft im Browser mit aktiviertem JavaScript.</div>

## Die Lautstärke wächst mit der Dichte

Je mehr Grains gleichzeitig klingen, desto lauter die Wolke. Verdopple die Dichte, und der Pegel steigt um etwa 3 dB, wenn die Grains verschieden sind. Sind die Grains identisch und phasengleich, sind es 6 dB. Behalte deshalb beim Erhöhen der Dichte den Ausgang im Blick und nimm die Lautstärke zurück. Manche Granulatoren gleichen das selbst aus.

??? info "Unter der Haube"

    Unkorrelierte Signale addieren sich nach Leistung: N Grains ergeben eine Amplitude proportional zur Wurzel aus N, also +3 dB pro Verdopplung. Korrelierte addieren sich nach Amplitude: N Grains ergeben eine N-mal größere Amplitude, +6 dB pro Verdopplung. Positions- und Tonhöhenstreuung dekorrelieren die Grains und schützen vor harten Lautstärkesprüngen.

## Synchronität

[Kapitel 2](../chast-1-zerno/02-anatomiya-zerna.md) hat drei Strommodi vorgestellt: synchron, asynchron und quasi-synchron. In Oberflächen schaltet man meist mit einem einzigen Regler zwischen ihnen um.

**So heißt sie:** Sync, Async, Random Rate, Rate Jitter, Spray (zeitlich), Irregularity, Chaos.

- **Zeitstreuung 0.** Die Grains laufen wie ein Metronom. Über 20 Grains pro Sekunde entsteht ein Ton.
- **Zeitstreuung mittel.** Der Ton ist rau und lebendig, wie ein Chor oder ein gestrichenes Instrument.
- **Zeitstreuung maximal.** Es gibt keinen Ton, sondern eine Wolke, ein Rascheln, einen Schwarm.

Neben der Synchronität steht manchmal noch ein Regler: die Intermittenz (Intermittency). Sie legt die Wahrscheinlichkeit fest, dass das nächste Grain einfach nicht entsteht. Der Strom folgt weiter seinem Raster, gleichmäßig oder zufällig, aber es entstehen Lücken, und die Wolke wird dünner, ohne dass sich die Dichte am Regler ändert. So arbeitet dieser Regler im kostenlosen EmissionControl2 ([Kapitel 21](../chast-5-dalshe-sam/21-chto-dalshe.md)).

## Grains als Tongenerator

Der überraschendste Trick der Granularsynthese. Kopple die Dichte an die Tastatur: Drück A4, und die Grains kommen 440-mal pro Sekunde, synchron. Jetzt spielt der Granulator Töne, obwohl die Position stillsteht und du die Grain-Tonhöhe nicht angefasst hast.

Das Innere des Grains entscheidet dabei über die Klangfarbe. Ein Grain aus dem Klingen des Löffels ergibt einen metallischen Ton, ein Grain aus dem Vokal „a“ einen Ton mit „a“-Färbung. So entsteht aus einer aufgenommenen Stimme ein synthetischer Chor und aus einem Klopfen auf den Tisch ein Bass.

In diesem Modus hat der Klang zwei Tonhöhen zugleich. Die eine bestimmt die Grain-Rate, das ist der Ton. Die andere bestimmt die Tonhöhe im Grain ([Kapitel 7](../chast-2-parametry/07-vysota-i-napravlenie.md)), das ist die Farbe, der Formant. Bewegst du die Grain-Tonhöhe, bleibt der Ton stehen, während sich die Klangfarbe „öffnet“ und „schließt“ wie ein Mund beim Singen.

Diesen Modus gibt es auch in fertigen Instrumenten. In Grain von Reason Studios heißt er Grain Oscillator: Der Klang wird aus zwei sehr kurzen Grains gebaut, die Grain-Rate folgt dem Ton, und die ursprüngliche Tonhöhe der Aufnahme ist nur für die Klangfarbe zuständig. Zwei Regler zeigen beide Seiten des Prinzips. Grain Spacing legt den Abstand zwischen den beiden Grains innerhalb der Aufnahme fest: Je größer er ist, desto gleichmäßiger klingt es von Ton zu Ton, fast wie ein Wavetable. Formant verschiebt die Farbe, ohne den Ton anzutasten, und klingt bei großem Grain Spacing ähnlich wie klassischer Oszillator-Sync.

??? info "Unter der Haube"

    Dieses Prinzip liegt der FOF-Synthese und der Pulsar-Synthese zugrunde. Die Rate r, mit der die Grains aufeinander folgen, bestimmt den Grundton. Dauer und Inhalt des Grains bestimmen die spektrale Hüllkurve: Wo das Spektrum ansteigt, liegt ein Formant. Ist das Grain länger als die Periode 1/r, überlappen sich die Grains und die Formanten werden schmaler; ist sie kürzer, herrscht zwischen den Grains Stille, und das Spektrum wird breiter und „pulsarartiger“.

??? info "Unter der Haube"

    Truax beschrieb diesen Effekt schon 1988. Folgen Grains gleicher Länge aufeinander, führt der Granulator in Wahrheit eine Amplitudenmodulation mit der Frequenz 1 / (Grain-Länge + Pause) aus: Ein Grain von 15 ms und eine Pause von 5 ms ergeben 50 Hz. Die Hüllkurve bestimmt die Form der Modulationswelle: Je schärfer die Ränder des Fensters, desto mehr Seitenbänder und desto heller der Klang. Am stärksten ist der Effekt, wenn die Frequenz im Grain ein Vielfaches der Modulationsfrequenz ist. Streut man die Grain-Längen ein wenig, zerfällt die gleichmäßige Modulation in eine raue, stochastische Textur ([Truax, 1988](https://doi.org/10.2307/3679938)).

## Übung 6.1. Regen und Ton { .exercise }

1. Der Löffel, Position im Klingen, Größe 30 ms, Positionsstreuung 10 ms.
2. Dichte 3 Grains pro Sekunde, asynchron. Vereinzelte Tropfen.
3. Erhöhe die Dichte langsam bis 200. Achte darauf, wo die Tropfen zur Wolke verschmelzen.
4. Stell die Zeitstreuung auf null. Erhöhe die Dichte über 100. Hör, wie die Wolke mit einem Ton zu summen beginnt.
5. Wenn sich in deinem Instrument die Dichte an die Tastatur koppeln lässt, spiel eine Tonleiter. Du spielst mit dem Löffel eine Melodie, und die Position steht die ganze Zeit still.
