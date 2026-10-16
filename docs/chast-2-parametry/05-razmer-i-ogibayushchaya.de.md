<p class="eyebrow">Kapitel 5</p>

# Grain-Größe und Hüllkurve

<figure markdown="span">
  ![Grains verschiedener Größen und Hüllkurvenformen](../images/5-1.png)
  <figcaption>Illustration 5.1. Formen des Grain-Fensters.</figcaption>
</figure>

## Größe

Die Größe sagt, wie lange jedes Grain dauert. Nach der Position ist sie der zweite Hauptregler, und sie entscheidet, ob du die Quelle wiedererkennst.

**So heißt sie:** Size, Length, Duration, Grain Size, Window Size.

Die Größe wird auf drei Arten angegeben, und es lohnt sich zu wissen, welche dein Instrument verwendet:

- **In Millisekunden.** Die häufigste Variante. 50 ms bleiben auf jedem Ton 50 ms.
- **In Notenwerten.** Die Größe ist an das Projekttempo gekoppelt: 1/16, 1/32. Praktisch für rhythmisches Zerschneiden.
- **Relativ zur Tonhöhe.** Die Größe wird in Perioden des gespielten Tons gezählt, und bei hohen Tönen werden die Grains von selbst kürzer. So arbeiten Engines, in denen die Grains einen Ton ergeben ([Kapitel 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md)).

Was passiert, wenn du die Größe von 500 ms auf 1 ms herunterdrehst:

1. **500–100 ms.** Man hört Stücke der Quelle, der Löffel ist ganz zu erkennen, mit Anschlag.
2. **100–30 ms.** Der Anschlag verschwimmt, Ton und Farbe bleiben. Die Zone der schönen Pads.
3. **30–10 ms.** Die Quelle ist kaum noch zu erkennen, der Klang wird körnig und rau.
4. **10–1 ms.** Die Klangfarbe der Quelle verschwindet, es bleiben Klicks, Summen, Zischen. Im synchronen Strom entstehen hier neue Klangfarben.

Größe und Dichte arbeiten als Paar (die Formel für die Überlappung steht in [Kapitel 2](../chast-1-zerno/02-anatomiya-zerna.md)). Verringere die Größe, ohne die Dichte anzufassen, und die Wolke wird dünner und bekommt Löcher. Damit sie glatt bleibt, erhöhe bei kurzen Grains die Dichte.

??? info "Unter der Haube"

    Ein kurzes Grain klingt wegen der Unschärferelation breiter als ein langes: Die Dauer eines Signals und die Breite seines Spektrums sind umgekehrt proportional. Ein Grain von 2 ms, aus einem reinen Ton von 440 Hz geschnitten, enthält weniger als eine Periode dieses Tons, und das Spektrum verschmiert über Tausende Hertz. Ein Grain von 100 ms enthält 44 Perioden, und das Spektrum bleibt eine schmale Spitze bei 440 Hz.

## Grain-Hüllkurve

Die Hüllkurve entscheidet, wie sich die Lautstärke eines Grains vom Anfang bis zum Ende verändert. Wozu sie dient, weißt du schon: Klicks entfernen. Aber die Form der Hüllkurve beeinflusst auch den Klang stark.

**So heißt sie:** Window, Envelope, Shape, Grain Env, Smoothness, Contour.

| Form | Wie sie aussieht | Wie sie klingt |
| --- | --- | --- |
| Glocke (Hann) | sanfter Anstieg, sanfter Abfall | weich, ohne Klicks; die Standardform |
| Gauß | schmalere Glocke mit langen Ausläufern | noch weicher, aber man hört einen kleineren Teil des Grains; der Klang ist nebliger |
| Trapez (Tukey) | schneller Anstieg, flaches Plateau, schneller Abfall | mehr Quelle, heller und deutlicher; bei kurzen Grains kann es ticken |
| Dreieck | gerader Anstieg, gerader Abfall | zwischen Glocke und Trapez, etwas härter als die Glocke |
| Perkussiv | sofortiger Anschlag, langes Abklingen | jedes Grain wie ein kleines Zupfen: Tropfen, gläsernes Klingen, Plucks |
| Umgekehrt perkussiv | langer Anstieg, sofortiger Abriss | die Grains werden eingesogen, der Klang wie eine rückwärts abgespielte Aufnahme |
| Rechteck | kein Anstieg und kein Abfall | Klicks bei jedem Grain, hartes digitales Knistern, Glitch |

Perkussive Fenster heißen in verschiedenen Programmen ähnlich. In Pigments sind es Expodec (von exponential decay, exponentielles Abklingen) und das umgekehrte Rexpodec, in Serum 2 ExpDec und Exp Dec Rev, im Granulator Borderlands EXPDEC und seine zeitlich umgekehrte Version. Siehst du einen solchen Namen, hast du einen Tropfen oder sein Spiegelbild vor dir.

Oft gibt es statt einer Formauswahl einen oder zwei Regler:

- **Glättung (Smooth).** Bewegt die Form vom Rechteck zur Glocke. Null bedeutet Knistern, Maximum bedeutet Weichheit.
- **Schräglage (Skew, Tilt, Attack/Decay).** Verschiebt die Spitze der Hüllkurve zum Anfang oder zum Ende des Grains. Die Spitze am Anfang ergibt Perkussion, die Spitze am Ende umgekehrte Perkussion.

<div class="grain-demo" data-demo="size">Die Klangdemo läuft im Browser mit aktiviertem JavaScript.</div>

Das Fenster beeinflusst nicht nur die Klangfarbe des Grains, sondern auch den Anfang jedes Tons. Das erste Grain eines Tons startet bei null und steigt entlang der Fensterform an. Dauert das Grain eine Sekunde und ist das Fenster dreieckig, zieht sich der Anschlag des Tons über eine halbe Sekunde, egal was in der Quelle liegt. Deshalb gibt ein Fenster mit hartem Start dem Ton bei langen Grains seinen Schlag zurück, während ein symmetrisches Fenster ihn weich öffnet. Ansteigende Fenster erzeugen bei langen Grains den Eindruck einer rückwärts abgespielten Aufnahme, obwohl sie vorwärts gelesen wird.

??? info "Unter der Haube"

    Das Fenster wird mit dem Grain multipliziert, und Multiplikation im Zeitbereich ist Faltung im Spektrum: Das Spektrum des Fensters verschmiert das Spektrum der Quelle. Fenster mit weichen Rändern (Hann, Gauß) haben eine etwas breitere Hauptkeule, aber die Nebenkeulen liegen Dutzende Dezibel tiefer, deshalb fügen sie wenig Rauschen hinzu. Das Rechteckfenster ergibt hohe Nebenkeulen, daher das Knistern. Das Trapez liegt in der Mitte: Das Plateau lässt mehr Quelle durch, aber die steilen Flanken heben die Nebenkeulen an.

## Übung 5.1. Die Form entscheidet { .exercise }

1. Der Löffel, Position im Klingen, Streuung 10 ms, mittlere Dichte.
2. Größe 80 ms. Schalte alle verfügbaren Hüllkurvenformen durch und notiere für dich ein Wort zu jeder.
3. Größe 5 ms. Wiederhole das. Achte darauf, dass der Unterschied zwischen den Formen bei kurzen Grains deutlicher zu hören ist.
4. Such eine perkussive Form und stell die Dichte niedriger. Der Löffel ist in Tropfen zerfallen.
