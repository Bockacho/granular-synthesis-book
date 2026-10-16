<p class="eyebrow">Kapitel 12</p>

# Arturia Pigments

In Pigments ist der Granulator in die Sample-Engine eingebaut. Der Synthesizer hat zwei Haupt-Engine-Slots, und in jedem kann einer von fünf Typen sitzen: Analog, Wavetable, Sample, Harmonic und Modal. Setz Sample in beide Slots, und du hast zwei unabhängige Granulatoren in einem Patch. Den Granular-Modus gibt es schon seit der zweiten Version von Pigments, zusammen mit der MPE-Unterstützung.

!!! note "Zur Version"

    Die Beschreibung entspricht Pigments 7.0.0. Bereiche mit dem Vermerk „laut Handbuch von Pigments 2“ stammen aus der Dokumentation der zweiten Version und können sich in neueren Versionen geändert haben.

<figure markdown="span">
  ![Pigments: die Sample-Engine im Modus Main, unter der Wellenform der eingeschaltete Bereich Granular mit den Reglern Density, Shape und Size, darunter eine Reihe von Zufallsreglern Start, Pitch, Density, Direction, Size, Width und Volume](../images/12-1.jpg)
  <figcaption>Screenshot 12.1. Die Sample-Engine im Modus Main, Granular-Bereich eingeschaltet. Oberfläche von Pigments, © Arturia.</figcaption>
</figure>

## Einen Klang laden

Die Sample-Engine hat sechs Sample-Slots, A–F, deren Vorschaubilder unter der Wellenform zu sehen sind. Ein Klick auf das Vorschaubild eines leeren Slots öffnet den Sample-Browser.

Dein eigener Klang kommt über einen Ordner in Pigments. Drück im Sample-Browser unten rechts **Add Folder** und gib den Ordner mit dem Löffel an. Der Ordner erscheint in der linken Spalte des Browsers neben den Werksbänken. Formate: WAV oder AIFF, 16 oder 24 Bit, von 44,1 bis 192 kHz. Die Sample-Länge ist nur durch den Arbeitsspeicher begrenzt.

Im Browser kannst du Samples vor dem Laden anhören: Das Kopfhörersymbol oben in der rechten Spalte schaltet das Vorhören ein, der Regler daneben stellt die Lautstärke ein. Ein einfacher Klick wählt ein Sample und lässt den Browser offen, ein Doppelklick lädt es und schließt ihn.

## Drei Displayansichten

Über der Wellenform gibt es drei Tasten:

- **Main.** Unter der Wellenform ist der Granular-Bereich zu sehen. Gezeigt wird nur der Abschnitt zwischen den Trim-Markern.
- **Edit.** Stimmung, Richtung, Loop und Lautstärke des Slots. Hier werden auch die Trim-Marker gesetzt.
- **Map.** Wie die Samples der sechs Slots auf Tasten und Anschlagstärke verteilt werden.

## Wo die Parameter aus Teil 2 sind

| Parameter aus Teil 2 | Wo in Pigments |
| --- | --- |
| Lesefenster (Kapitel 4) | die Trim-Marker Trim Start und Trim Stop im Modus Edit |
| Position (Kapitel 4) | der Regler **Start** im Bereich Sample/Grain, die blaue Linie auf der Wellenform |
| Scan (Kapitel 4) | der Regler **Scan** |
| Positionsstreuung (Kapitel 4) | der Zufallsregler **Start** |
| Größe (Kapitel 5) | der Regler **Size** und seine Modi |
| Hüllkurve (Kapitel 5) | der Regler **Shape** und das Formenmenü |
| Dichte (Kapitel 6) | der Regler **Density**, Modus Hertz oder tempogebunden |
| Dichtestreuung, Synchronität (Kapitel 6) | der Zufallsregler **Density** |
| Tonhöhe (Kapitel 7) | der Bereich Tune der Engine und Transpose des Slots |
| Tonhöhenstreuung, Richtung (Kapitel 7) | die Zufallsregler **Pitch** und **Direction** |
| Panorama, Lautstärke (Kapitel 8) | die Zufallsregler **Stereo** und **Volume** |
| Grain-Limit (Kapitel 8) | das Feld **Limit** in der Kopfzeile des Bereichs |

## Den Granular-Modus einschalten

Im Modus Main sitzt unter der Wellenform der Bereich **Granular** mit einem Einschalter in der Kopfzeile. Solange er aus ist, arbeitet die Engine wie ein normaler Sampler. Rechts in der Kopfzeile steht das Feld **Limit**: die Höchstzahl gleichzeitig überlappender Grains. Das Handbuch von Pigments 7 nennt es einen der wichtigsten Wege, den Prozessor bei hoher Dichte im Zaum zu halten. Laut Handbuch von Pigments 2 reicht das Limit von 3 bis 256.

Die obere Reglerreihe legt das Wesentliche der Grains fest, die untere streut sie zufällig.

## Start: Position

Die Position lebt in Pigments gleich neben dem Granular-Bereich, im Bereich **Sample/Grain**. Der Regler **Start** legt den Punkt fest, ab dem das Sample spielt oder die Grains entstehen, innerhalb der Trim-Marker. Auf der Wellenform ist das eine senkrechte blaue Linie. Dort sitzt auch der Regler **Volume**: die Lautstärke des Samples oder Grains.

Der benachbarte Bereich **Output** ist für die Engine als Ganzes zuständig: Gesamtlautstärke und **Filter Mix**, die Aufteilung des Signals auf Filter 1 und 2.

## Scan

Scan bewegt den „Lesekopf“ durch den Grain-Strom. Das Handbuch nennt Orientierungspunkte:

- **12 Uhr:** kein Scan, Einfrieren.
- **Plus:** Der Startpunkt wandert in der Zeit vorwärts.
- **Minus:** rückwärts.
- **±100 %:** Die Scan-Geschwindigkeit entspricht der Wiedergabegeschwindigkeit der Grains. Andere Prozentwerte beschleunigen oder verlangsamen den Scan relativ zu dieser Geschwindigkeit.

Die Dehnungsformel aus [Kapitel 4](../chast-2-parametry/04-istochnik-i-poziciya.md) funktioniert, wenn du 100 % als Originalgeschwindigkeit nimmst. Das Handbuch rät, nicht zu raten, sondern zuzuhören.

## Density

Density legt die Rate fest, mit der Grains entstehen. Ein Klick auf das blaue Oval unter dem Regler öffnet das Menü **Density Type**: **Hertz** (frei, in Hertz) und tempogebundene Varianten: **Sync**, **Straight only**, **Triplets only**, **Dotted only**. Im Modus Hertz ist die Zahl am Regler direkt Grains pro Sekunde: 1 Hz bedeutet ein Grain pro Sekunde.

Ein Tipp aus dem Handbuch: Lerne bei niedriger Dichte, dort hört man besser, was passiert.

## Shape: Grain-Hüllkurve

Ein Klick auf das Formsymbol über dem dritten Regler öffnet das Menü **Grain Envelope Shape**: Triangle, Trapezoid, Tukey, Gaussian, Sinc, Expodec, Rexpodec, Smooth Exp. Das Menü wählt die Form, und der Regler **Shape** biegt sie weiter. Laut Handbuch von Pigments 2 führt der Regler die Form von „weich“ zu „klickend“ und lässt sich modulieren.

| Form | Wie sie aufgebaut ist | Kapitel 5 |
| --- | --- | --- |
| Triangle | gerader Anstieg, gerader Abfall | Dreieck |
| Trapezoid | Anstieg, Plateau, Abfall | Trapez |
| Tukey | flache Mitte, abgerundete Ränder | Trapez mit weichen Rändern |
| Gaussian | Glocke | Gauß |
| Sinc | spitze Mitte, schwingende Ausläufer | eine besondere Färbung |
| Expodec | scharfer Anschlag, exponentielles Abklingen | perkussiv |
| Rexpodec | exponentieller Anstieg, scharfes Ende | umgekehrt perkussiv |
| Smooth Exp. | geglättete Exponentialkurve | weich perkussiv |

Der Unterschied zwischen den Formen ist bei kurzen Grains am deutlichsten: Vergleich sie bei einer Länge von 10–30 ms nach Gehör.

## Size: Grain-Länge

Das Menü unter dem Regler Size wählt, worin er misst:

- **Percentage.** Prozent der maximalen Grain-Größe.
- **Time Division.** Ein Bruchteil der Periode der aktuellen Dichte. Das ist die Überlappung aus [Kapitel 2](../chast-1-zerno/02-anatomiya-zerna.md): Die Grain-Länge ist an den Abstand zwischen den Grains gekoppelt, und der Charakter der Wolke bleibt bei jeder Dichte erhalten.
- **Straight Only**, **Triplets Only**, **Dotted Only.** Tempogebunden: gerade Notenwerte, Triolen, Punktierungen.
- **Time.** Absolute Zeit in Millisekunden. Laut Handbuch von Pigments 2 von 1 ms bis 1 Sekunde.

Das Handbuch erinnert eigens daran: Grains überlappen sich, und das ist ein wichtiger Teil des Granularcharakters. Wie viele sich höchstens überlappen, entscheidet Limit.

## Zufallsregler

Die untere Reglerreihe fügt Zufall hinzu. Die meisten haben ein Richtungsmenü: eine Taste oder ein Symbol neben dem Regler.

| Regler | Was er streut | Menüoptionen | Kapitel |
| --- | --- | --- | --- |
| Start | die Position: Grains entstehen vor, nach oder um den Startpunkt | Before, After, Both | 4 |
| Pitch | die Grain-Tonhöhe; laut Handbuch von Pigments 2 bis zu 3 Oktaven | Up, Down, Both | 7 |
| Density | die Dichte: fügt Grains hinzu oder nimmt welche weg | More Dense, Less Dense | 6 |
| Direction | den Anteil rückwärts laufender Grains | keine | 7 |
| Size | die Grain-Länge | Shorter, Longer, Both | 5 |
| Stereo | das Panorama | Pan, Width | 8 |
| Volume | die Grain-Lautstärke | keine | 8 |

Zwei Feinheiten:

- **Direction**, laut Handbuch von Pigments 2: Ganz rechts spielen die Grains vorwärts, ganz links rückwärts, in der Mitte halb und halb.
- **Stereo im Modus Width** verteilt bereits zufällig veränderte Grains im Stereobild. Gibt es keine anderen Streuungen, bleiben alle Grains in der Mitte, selbst mit Width auf Maximum. Das Handbuch von Pigments 2 präzisiert: Width fügt für die Streuungen von Size, Pitch und Start einen Unterschied zwischen linkem und rechtem Kanal hinzu. Width funktioniert also nur zusammen mit anderen Zufallsreglern.

## Sechs Samples und Grains

Hier ist eine Möglichkeit, die die beiden anderen Instrumente des Buchs nicht haben. Der Modus **Map** verteilt die Slots A–F, und zwei seiner Varianten arbeiten Grain für Grain:

- **Round Robin.** Die Slots spielen reihum. Mit eingeschaltetem Granular-Bereich kommt jedes neue Grain aus dem nächsten Sample.
- **Random.** Das Sample wird zufällig gewählt. Mit Granular-Bereich kommt jedes Grain aus einem zufälligen Slot.

Lade sechs verschiedene Aufnahmen in die sechs Slots, und die Wolke flicht sie Grain für Grain ineinander. Die übrigen Map-Modi: **Single** (ein Sample über die ganze Tastatur), **Key Map** (Slots über die Tastatur verteilt), **Key/Velo Map** (nach Tasten und zwei Anschlagsschichten), **Sample Pick** (das Sample wählt ein Regler, der sich modulieren lässt).

## Modus Edit: Stimmung und Marker

Wähl mit der Taste A–F einen Slot und stell ein:

- **Tune.** **Transpose** ±36 Halbtöne, **Fine** ±1 Halbton in Cent-Schritten, **Root Note** (Grundton des Samples).
- **Playback.** **Play Mode**: vorwärts (Normal) oder rückwärts (Reverse). **Loop** schaltet den Loop ein, **Loop Mode** wählt vorwärts (Forward) oder Pendel (F&B), **Loop Fade** blendet den Loop (nur bei Forward), die Taste **r** hält den Loop beim Loslassen des Tons.
- **Mix.** **Gain** und **Pan** des Slots.
- **Slot.** **Copy** kopiert das Sample in einen anderen Slot, um es mit anderen Einstellungen zu halten. **Reset** setzt den Slot zurück, **Clear** leert ihn.

Die Trim-Marker (Trim Start und Trim Stop) sind senkrechte Linien mit dreieckigen Griffen oben, die Loop-Marker haben Griffe unten. Das ist das Lesefenster aus [Kapitel 4](../chast-2-parametry/04-istochnik-i-poziciya.md): Sperr den Löffel im Klingen ein. Die Taste **Snap** über dem Display lässt die Marker an Nulldurchgängen der Welle einrasten und bewahrt vor Klicks. Bei Stereosamples ist die Toleranz größer, weil sie womöglich keine exakten Nullstellen haben.

Root Note stellt sich selbst ein, wenn der Grundton in den Metadaten der WAV-Datei steht. Trim- und Loop-Marker werden ebenfalls aus den Metadaten übernommen, falls vorhanden.

## Tune der Engine und das Sample-Filter

Der Bereich Tune der Engine legt die Grundstimmung der Stimmen fest. Bei der Sample-Engine hat er einen Regler **Filter**: ein Filter direkt auf dem Sample, noch vor jeder anderen Bearbeitung. Links von 12 Uhr senkt er die Grenzfrequenz eines Tiefpasses, rechts davon hebt er die Grenzfrequenz eines Hochpasses, auf 12 Uhr gibt es kein Filter. Praktisch, um Brummen oder Zischen des Löffels schon vor dem Granulator zu entfernen.

## Unison und Shaper

Unter dem Bereich Tune sitzt der Bereich Unison/Shaper. Ein Klick auf seinen Namen öffnet das Modusmenü.

- **Unison, Chord, Super.** Arbeiten wie in den anderen Engines. Im Modus Chord werden die Unison-Stimmen in Halbtönen auf einen von 12 klassischen Akkorden quantisiert: Eine Taste ergibt eine Akkordwolke. Für die Analog-Engine nennt das Handbuch bis zu 8 Unison-Stimmen.
- **Resonator.** Sechs parallele Bandpassfilter, das erste nach Ton und Tune-Bereich gestimmt, die übrigen auf dessen Obertöne. Im Granular-Modus folgt der Resonator der Tonhöhe der Grains, auch bei zufälliger Tonhöhe. Regler: **Coarse** (Stimmung), **Wet/Dry**, **Resonance** (Resonanz und Länge des Klingens), **Inharm**: Bei null sitzen die Resonatoren auf den Obertönen, über null rücken sie auseinander, unter null zusammen. Eine inharmonische Stimmung ergibt Glocken und Metall.
- **BitCrush.** **Decimate** (Reduktion der Abtastrate), **Bit Depth** (Bittiefe), **Key Track** (Decimate folgt der Taste).
- **Modulation.** **Freq Mod** (lineare Through-Zero-FM) und **Ring Mod**. Die Modulationsquelle: der Modulator-Oszillator der Engine oder eine andere Haupt-Engine.

## Modulation

Modulation wird per Ziehen zugewiesen. Fahr in der Modulationsübersicht mit dem Cursor über den Namen einer Quelle, und er wechselt zu **Assign**. Zieh ihn auf den gewünschten Regler: Alle gültigen Ziele sind grau umrandet. Die Tiefe änderst du danach am Ring um den Regler.

Quellen nach Reitern:

- **Keyboard:** Anschlagstärke, Aftertouch, Keyboard-Tracking, Räder.
- **Envelopes:** drei Hüllkurven, die erste immer auf der Lautstärke. Alle Hüllkurven von Pigments können laut Handbuch im Audiobereich arbeiten.
- **LFO:** drei.
- **Functions:** drei Mehrpunktfunktionen, komplexe Kurven beliebiger Form.
- **Random:** drei Generatoren mit den Modi Random, Voice Modulator, Turing, Sample & Hold, Binary.
- **Combinate:** mischen andere Quellen.
- **Macros:** vier Makros M1–M4.

Der wichtigste granulare Kniff der Modulation: Bei LFOs und Functions hat das Neustartmenü (Retrig Source) die Einträge **Engine 1 Grain** und **Engine 2 Grain**. Sie erscheinen, wenn im Slot eine Sample-Engine mit eingeschaltetem Granular-Bereich sitzt. Ein LFO, der von jedem Grain neu gestartet wird, gibt jedem Grain seine eigene Modulationskurve. Leg eine solche Function auf das Filter, und jedes Grain bekommt sein eigenes Filterabklingen.

## Bonus: der granulare Exciter von Modal

In der Modal-Engine, einem physikalischen Modell resonierender Gegenstände, gibt es einen Exciter Friction mit dem Modus **Granular**. Er übernimmt einen Teil der Einstellungen des Sample-Granulators mit festen Werten und schlägt den Resonator mit Grains an. Du wählst den Typ des Quell-Samples, die Lautstärke (**Volume**), die Tonhöhenverschiebung (**Tune**) und die Grain-Rate (**Rate**, in Hertz oder tempogebunden). Das Handbuch rät, Rate mit einem LFO, einer Function oder Random zu modulieren. Ein ganzer Synthesizer beruht auf diesem Prinzip: Kaivo von Madrona Labs, in dem der Granulator als „Berührung“ des Spielers wirkt und physikalische Modelle von Resonatoren und einem gemeinsamen Korpus anregt ([madronalabs.com](https://madronalabs.com/products/kaivo)).

## Löffel-Rezepte

Überall gilt: die Sample-Engine in Slot 1, der Löffel per Add Folder geladen, Modus Main, Granular-Bereich eingeschaltet, Trim-Marker auf dem Klingen.

!!! success "Rezept 12.1. Pad"

    1. Start auf die Mitte des Klingens. Scan etwas rechts von 12 Uhr.
    2. Density im Modus Hertz, etwa 30.
    3. Size im Modus Time, etwa 120 ms. Form Gaussian.
    4. Zufallsregler: Start (Both) ein wenig, Pitch (Both) nur ein Hauch, Stereo (Pan) auf die Hälfte, Volume ein wenig.
    5. Envelope 1: langer Attack, langer Release.

!!! success "Rezept 12.2. Tropfen"

    1. Density im Modus Hertz, 3–6.
    2. Size im Modus Time, 20–40 ms. Form Expodec.
    3. Zufallsregler: Start (Both) stark, Density (Less Dense) deutlich, Volume deutlich.

!!! success "Rezept 12.3. Glocken"

    1. Das Pad aus Rezept 12.1.
    2. Wähl unter Unison/Shaper Resonator, Wet/Dry in der Mitte.
    3. Dreh Resonance auf für ein langes Klingen.
    4. Zieh Inharm nach oben: Der Löffel klingt nach Glocken. Den Zufallsregler Pitch übernimmt der Resonator.

!!! success "Rezept 12.4. Sechs Löffel"

    1. Nimm fünf weitere Klänge auf: den Löffel gegen ein Glas, einen Kochtopf, den Tisch, eine Flasche, die Fensterbank.
    2. Lade alle sechs in die Slots A–F.
    3. Wähl im Modus Map Random.
    4. Schalte den Granular-Bereich ein: Jedes Grain kommt aus einer zufälligen Aufnahme, und die Wolke wird zur Küche.

!!! success "Rezept 12.5. Ein Grain mit eigenem Filter"

    1. Density tempogebunden, Straight only, 1/16. Size im Modus Time Division.
    2. Function 1: ein kurzes Abklingen vom Maximum auf null. Retrig Source: Engine 1 Grain.
    3. Weise Function 1 der Frequenz von Filter 1 zu.
    4. Jedes Grain bekommt seinen eigenen Filterschwung, und das gleichmäßige Raster aus Sechzehnteln beginnt zu quaken.

## Übung 12.1. Eine Einstellung, sechs Slots { .exercise }

1. Bau Rezept 12.1 mit dem Löffel.
2. Vervielfältige den Löffel mit der Taste Copy in die Slots B und C und ändere in jedem Transpose: null, plus eine Quinte, plus eine Oktave.
3. Modus Map: Round Robin. Die Grains nehmen reihum die drei Transpositionen desselben Klangs.
4. Vergleiche mit dem Modus Random. Nimm beide Varianten auf und hör sie nacheinander an.

## Quellen zu diesem Kapitel

- Handbuch von Pigments 7, Arturia (Produktversion 7.0.0, Revision vom 15. Dezember 2025): Kapitel 9 zur Sample-Engine (S. 105–121), Abschnitt 11.4.3 zum granularen Exciter (S. 142–143), Kapitel 19–20 zur Modulation, Abschnitt 7.2 zu den Unison-Modi, Abschnitt 1.1.2 zum Aufbau des Synthesizers.
- Handbuch von Pigments 2, Arturia: Abschnitt 5.4.7 Granular Section (S. 77–78): die Bereiche von Limit, Size und Pitch, das Verhalten von Direction und Width.
