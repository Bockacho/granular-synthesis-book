<p class="eyebrow">Kapitel 1</p>

# Klang lässt sich zerschneiden

<figure markdown="span">
  ![Ein Klang: am Stück, in Stücke geschnitten und als Wolke aus Grains verstreut](../images/1-1.png)
  <figcaption>Illustration 1.1. Ein Klang wird in Grains zerschnitten.</figcaption>
</figure>

Der Klang, den du aufgenommen hast, liegt im Computer als lange Reihe von Zahlen. Jede Zahl sagt, wo die Membran des Mikrofons in diesem Augenblick war: ein wenig vorn oder ein wenig hinten. In einer Sekunde stecken 44.100 oder 48.000 solcher Zahlen, je nachdem, wie die Datei aufgenommen wurde.

Weil es eine Reihe von Zahlen ist, lässt sie sich in Stücke beliebiger Länge schneiden. Die Granularsynthese schneidet Klang in sehr kurze Stücke, meist zwischen 1 und 100 Millisekunden. Eine Millisekunde ist eine Tausendstelsekunde. Ein Stück von 50 ms dauert eine Zwanzigstelsekunde: Du hörst es, aber du erkennst kaum, woraus es geschnitten wurde.

Ein solches Stück mit sanftem Anfang und sanftem Ende heißt Grain, auf Deutsch Korn. Ein einzelnes Grain bedeutet fast nichts, so wie ein Tropfen noch kein Regen ist. Aber feuere Hunderte Grains pro Sekunde ab, und ein neuer Klang entsteht: eine Wolke. Wie sie ausfällt, entscheiden vier Dinge: woher die Grains genommen werden, wie lang sie sind, wie oft sie fliegen und in welcher Tonhöhe sie klingen.

## Die wichtigste Superkraft

Beim Tonbandgerät und beim normalen Sampler sind Geschwindigkeit, Tonhöhe und Länge eines Klangs fest miteinander verschweißt. Spiel eine Aufnahme doppelt so schnell ab, und sie klingt eine Oktave höher und halb so lang. Verlangsame sie, und sie wird tiefer und dauert länger. Daher kommen die Mickymaus-Stimme und die Stimme des verlangsamten Monsters.

Der Granulator bricht diese Kopplung auf. Er entscheidet getrennt, von welcher Stelle der Datei er die Grains nimmt und in welcher Tonhöhe er sie spielt. Daraus entstehen Tricks, die ein Sampler nicht kann:

- **Einfrieren.** Du bleibst an einer Stelle der Datei stehen, und das Klingen des Löffels dauert, so lange du willst, auch zehn Minuten.
- **Dehnen.** Du durchläufst drei Sekunden Klang in drei Minuten, und die Tonhöhe bleibt gleich.
- **Transponieren ohne Längenänderung.** Das Klingen spielt eine Oktave tiefer und dauert genauso lang.
- **Mischen.** Die Grains werden von zufälligen Stellen der Datei genommen, und der Klang zerfällt zu einem Mosaik.

??? info "Unter der Haube"

    Bei 48 kHz enthält ein Grain von 50 ms 2400 Samples. Der Granulator ändert die Tonhöhe eines Grains genauso wie ein Sampler: Er liest die Samples schneller oder langsamer und interpoliert dazwischen. Der Unterschied ist, dass der Anfang jedes neuen Grains eigens festgelegt wird und das Ende des vorigen keinen Einfluss darauf hat. So werden die Lesegeschwindigkeit innerhalb des Grains (Tonhöhe) und die Geschwindigkeit, mit der sich die Position durch die Datei bewegt (Zeit), zu zwei unabhängigen Reglern.

## Warum ein Grain weiche Ränder braucht

Schneid ein Stück Klang mit der Schere heraus, und die Welle reißt an den Rändern ab. Das Ohr hört den Abriss als Klick. Hundert Klicks pro Sekunde werden zu einem Knistern. Deshalb taucht jedes Grain zuerst sanft aus der Stille auf und gleitet am Ende sanft in sie zurück. Diese Lautstärkeform heißt Grain-Hüllkurve oder Fenster. Die Fensterformen nehmen wir in [Kapitel 5](../chast-2-parametry/05-razmer-i-ogibayushchaya.md) durch.

??? info "Unter der Haube"

    Ein Klick entsteht aus einer Unstetigkeit: Das Signal springt innerhalb eines einzigen Samples von einem Wert ungleich null auf null. Ein harter Sprung hat Energie auf allen Frequenzen zugleich, daher der breitbandige Klick. Das Fenster führt die Amplitude an den Rändern auf null, und ein Sprung kann gar nicht erst entstehen.

## Übung 1.1. Ein Granulator von Hand { .exercise }

Das Experiment funktioniert in jeder DAW ohne Plugins.

1. Leg den Löffelklang auf eine Audiospur.
2. Schneide aus der Mitte des Klingens ein Stück von 50 ms heraus. Zoome hinein, um genau zu treffen.
3. Kopiere das Stück 20-mal hintereinander, lückenlos. Das Klingen ist zu einem gleichmäßigen Summen geworden, aber an den Nahtstellen knistert es.
4. Gib jedem Stück einen Fade-in und einen Fade-out von 10–15 ms. Das Knistern ist weg. Du hast gerade eine Grain-Hüllkurve gebaut.
5. Zweite Variante: Schneide 20 Stücke von 50 ms aus, jedes 10 ms später als das vorige, und setze sie lückenlos mit denselben Fades aneinander. Das Klingen verändert sich jetzt langsam, als hätte sich die Zeit verlangsamt, aber die Tonhöhe ist dieselbe. Das ist Dehnen.
6. Dritte Variante: Schneide 20 Stücke von zufälligen Stellen der ganzen Datei aus. Da ist dein Mosaik.

Ein Granulator macht dasselbe, nur Hunderte Male pro Sekunde, und statt einer Schere hat er Regler.
