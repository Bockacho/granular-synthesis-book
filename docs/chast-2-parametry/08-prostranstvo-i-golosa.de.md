<p class="eyebrow">Kapitel 8</p>

# Raum, Zufall und Stimmen

<figure markdown="span">
  ![Eine Wolke aus Grains um den Kopf des Hörers](../images/8-1.png)
  <figcaption>Illustration 8.1. Eine Wolke in Stereo.</figcaption>
</figure>

## Panorama der Grains

Jedes Grain lässt sich an einen eigenen Platz im Stereopanorama setzen. Solange alle Grains in der Mitte klingen, ist die Wolke schmal, wie aus einem einzigen Lautsprecher. Verteil sie, und die Wolke breitet sich über die ganze Breite aus, und im Kopfhörer fliegen die Grains an deinen Ohren vorbei.

**So heißt es:** Pan Spread, Stereo Spread, Width, Pan Random, Spatialize.

- **0 %.** Alle Grains in der Mitte.
- **20–50 %.** Die Wolke ist breit, aber die Mitte ist dicht. Eine gute Wahl für ein Pad im Mix.
- **100 %.** Die Grains fliegen von Rand zu Rand. Eindrucksvoll im Kopfhörer, aber auf einem Monolautsprecher kann ein Teil des Klangs verschwinden.

Prüf eine breite Wolke in Mono: Schalte in der DAW den Master für ein paar Sekunden auf mono. Wenn der Klang einbricht oder dumpf wird, nimm die Breite zurück.

Breite lässt sich auch anders erreichen. In Quanta 2 arbeiten zwei unabhängige Granulatoren, einer für den linken und einer für den rechten Kanal, mit gemeinsamen Reglern. Selbst aus einer Monoaufnahme liefern sie verschiedene Grains, vor allem mit eingeschalteten Streuungen, und der Klang wird breit. Der Regler WIDTH mischt die Kanäle ineinander: Bei null ist der Klang mono, danach wächst die Breite bis zum Maximum.

??? info "Unter der Haube"

    Ein zufälliges Panorama pro Grain dekorreliert linken und rechten Kanal. Eine breite Wolke aus dekorrelierten Grains verliert beim Summieren auf mono weniger als ein Stereo-Chorus, weil sie kaum gegenphasige Kopien desselben Signals enthält. Bei einer Stereoquelle mit breiter Basis und voller Streuung sind Einbrüche in Mono aber trotzdem möglich.

## Zufällige Lautstärke

Jedem Grain lässt sich eine zufällige Lautstärke geben. Die Wolke beginnt zu funkeln: Manche Grains klingen heller, andere sind kaum zu hören. Der Klang wirkt nicht mehr glattpoliert.

**So heißt sie:** Amp Random, Level Spread, Gain Jitter, Velocity Random.

## Zufall als eigener Regler

Dir ist sicher aufgefallen, dass fast jeder Parameter eines Granulators einen zufälligen Zwilling hat: Positionsstreuung, Zeitstreuung, Tonhöhenstreuung, Panorama, Lautstärke, Richtung. Das ist das Herz des Granularklangs. Der Hauptregler legt fest, wohin der Klang geht, und die Streuung, wie lebendig er ist.

Eine einfache Regel für den Anfang: Such zuerst den Klang bei Streuungen auf null, dann dreh sie einzeln auf und hör dir jede an. Drehst du alles auf einmal auf, entsteht Brei, und man weiß nicht, welcher Regler ihn angerührt hat.

Bei manchen Granulatoren lässt sich der Zufall „einfrieren“: Gib dem Generator einen Startwert (Seed), und das Zufallsmuster wiederholt sich bei jedem Tastendruck gleich. Nützlich, wenn du eine lebendige, aber vorhersagbare Stimme brauchst.

## Grain-Limit und Prozessor

Jedes Grain kostet den Prozessor Arbeit. Dichte 200 Grains pro Sekunde, Größe 100 ms, ein Akkord aus sechs Tönen: Gleichzeitig klingen etwa 120 Grains. Deshalb haben Granulatoren eine Obergrenze für Grains pro Stimme. Ist sie erreicht, entstehen keine neuen Grains, und die Wolke kann dünner werden oder ungleichmäßig klingen.

**So heißt es:** Max Grains, Grain Limit, Voices, Polyphony, Quality.

Wenn das Projekt ruckelt: Senk die Dichte, verkürze die Grains, reduziere die Polyphonie oder friere die Spur ein beziehungsweise bounce sie zu Audio.

## Stimmen und Spielmodi

Wie jeder Synthesizer hat ein Granulator eine Polyphonie: wie viele Töne gleichzeitig klingen können. Jeder Ton trägt seine eigene Wolke.

- **Poly.** Akkorde, jeder Ton mit eigener Wolke.
- **Mono und Legato.** Ein Ton zur Zeit. Ein neuer Ton kann die Wolke des vorigen aufgreifen, statt von vorn zu beginnen. Gut für Bässe und Solostimmen.
- **MPE.** Wenn Instrument und Controller MPE unterstützen, steuert jeder Finger seine eigene Wolke separat: mit Druck, Neigung, Bewegung nach oben und unten. Du kannst zum Beispiel mit Fingerdruck die Positionsstreuung nur eines Tons im Akkord öffnen.

## Nach dem Granulator

Grains profitieren fast immer von Bearbeitung nach dem Granulator:

- **Hall** verklebt die Grains zu einem gemeinsamen Raum und überdeckt das Klicken.
- **Delay** vervielfacht die Grains und zieht die Wolke zeitlich in die Länge.
- **Ein Filter** nimmt einer dichten Wolke überflüssige Tiefen und einem Knistern überflüssige Höhen.
- **Ein Kompressor** glättet eine Wolke, deren Lautstärke mit der Dichte springt.

## Übung 8.1. Eine Wolke um den Kopf { .exercise }

1. Nimm den Klang aus Übung 6.1, bei dem sich die Wolke gerade gebildet hat. Setz die Kopfhörer auf.
2. Dreh die Panoramastreuung von 0 auf 100 %. Achte auf den Moment, in dem die Wolke räumlich wird.
3. Schalte den Master auf mono. Vergleiche. Such die Breite, bei der mono noch gut klingt.
4. Füg eine zufällige Lautstärke von 30–50 % hinzu. Die Wolke beginnt zu funkeln.
5. Setz hinter den Granulator einen Hall mit langer Fahne und ein Delay. Hör, wie der Klang zu einem Ort geworden ist.
