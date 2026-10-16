<p class="eyebrow">Kapitel 11</p>

# Ableton Granulator III

Granulator III hat Robert Henke geschrieben, derselbe, der den ersten Granulator erfunden hat, zusammen mit dem Ableton-Team: Marco Tonni (Oberfläche, Umsetzung, Projektleitung), Eric Carl und Kostya Kazhev (Oberflächendesign). Es ist das dritte Instrument der Reihe, und Henke nennt es völlig neu. Als Kernpunkte nennt er: volle MPE-Unterstützung, eine erweiterte Modulationsmatrix, eine vereinfachte Oberfläche, Klangaufnahme direkt ins Instrument ohne zusätzliche Geräte und einen monofonen Modus.

!!! note "Zur Version"

    Granulator III wird zusammen mit Live weiter aktualisiert, daher können die Details in neueren Versionen von der Beschreibung abweichen.

**Was du zum Start brauchst.** Henke schreibt, dass das Instrument Live 12 Suite benötigt und auf ableton.com im eigenen Konto heruntergeladen wird. Die Pack-Seite auf der Ableton-Website nennt weiter gefasste Voraussetzungen: Live 12 Standard mit Max for Live, Version 12.0 oder neuer. Zum Pack gehören 59 Presets, ein Live-Set und eine Auswahl von Samples, die sich gut granulieren lassen. Der alte Granulator II ist weiter erhältlich, wird laut Henke aber höchstwahrscheinlich nicht mehr aktualisiert.

**Installation.** Öffne im Live-Browser den Bereich Packs, such Granulator III unter den verfügbaren Packs (Available Packs) und installiere es. Danach erscheint es oben im Browser im Bereich Packs.

**Push 3 Standalone.** Das Instrument läuft auch dort, aber mit Einschränkungen: Es gibt kein Wellenbild, Samples lassen sich auf dem Push selbst nicht austauschen (nur in Live erstellte Presets spielen), und die Klangaufnahme funktioniert nicht.

<figure markdown="span">
  ![Granulator III im Modus Classic: die Wellenform eines geladenen Samples, darunter die Regler Position, Scan, Grain Size, Shape, Variation und Transpose](../images/11-1.jpeg)
  <figcaption>Screenshot 11.1. Granulator III mit geladenem Klang, Modus Classic. Oberfläche von Granulator III, © Ableton.</figcaption>
</figure>

## Aufbau der Oberfläche

Die Oberfläche besteht aus drei Bereichen.

- **Hauptdisplay.** Zeigt entweder das Sample (mit Markierungen für den Grain-Start, die aktuelle Position und die Grain-Größe, dazu die Aufnahmesteuerung) oder die beiden Hüllkurven, den LFO und das Filter.
- **Modulationsdisplay.** Unter dem Hauptdisplay. Zeigt die Modulationen des gewählten Hauptparameters, ein kleines Dreieck zeigt an, welcher es ist. Die Auswahl an Modulationen unterscheidet sich je nach Parameter: So arbeitet die Engine sparsamer, und jede Verbindung lässt sich genauer anpassen.
- **Parameterdisplay.** Die Hauptregler.

Das Hauptdisplay schaltest du mit den Tasten **Display Selector** links um oder mit dem Modus **Auto**. In Auto zeigt ein Klick auf einen Parameter links von **Variation** das Sample, ein Klick rechts davon die Hüllkurven. Ein Stereosample wird nur mit dem linken Kanal dargestellt. Die Tasten **(+)** und **(−)** unten rechts zoomen die Wellenform um Position herum hinein und heraus, **(ALL)** zeigt wieder die ganze Datei.

## Einen Klang laden

Zieh den Löffel aus dem Live-Browser, aus Session oder aus Arrangement auf das Instrument. Das klappt auch, wenn das Hauptdisplay die Hüllkurven zeigt, es gibt dann nur kein Bild.

Beim Laden und beim Aufnehmen wird der Klang normalisiert: Die lauteste Stelle wird auf 0 dB angehoben. Eine leise Aufnahme des Löffels klingt so ohne weiteres Zutun mit voller Kraft.

## Wo die Parameter aus Teil 2 sind

| Parameter aus Teil 2 | Wo in Granulator III |
| --- | --- |
| Position (Kapitel 4) | **Position**, in Prozent, oder ein Klick auf die Wellenform |
| Scan (Kapitel 4) | **Scan**: eine Positionsrampe ab dem Tastendruck |
| Positionsstreuung (Kapitel 4) | **Variation** → Position |
| Live-Eingang (Kapitel 4) | **Capture** |
| Größe (Kapitel 5) | **Grain Size**, von 2 ms bis 2 s |
| Hüllkurve (Kapitel 5) | **Shape**, in jedem Modus mit eigenem Verhalten |
| Dichte (Kapitel 6) | in Classic über die Grain-Größe, in Cloud über den Regler **Density** |
| Tonhöhe (Kapitel 7) | **Transpose** und **Tune** |
| Richtung (Kapitel 7) | **Reverse** im Modus Loop |
| Tonhöhenstreuung (Kapitel 7) | **Variation** → Transpose, nur Cloud |
| Panorama (Kapitel 8) | **Spread** |
| Lautstärkestreuung (Kapitel 8) | **Variation** → Volume |
| Stimmen (Kapitel 8) | 8 Stimmen, Mono-Modus, **Glide**, **Hold** |

## Drei Grain-Modi

Das ist das Erste, was du wählen musst: Vom Modus hängt ab, wie Grain Size, Shape und Variation arbeiten.

**Classic.** Basiert auf Granulator II, der flexibelste und ausdrucksstärkste Modus. Pro Stereokanal zwei überlappende Grains mit einer sehr flexiblen Hüllkurve. Die Dichte hat hier keinen eigenen Regler: Je kürzer das Grain, desto häufiger folgen sie. Laut Henke bedeutet ein Grain von 2 ms tausend und mehr überlappende Grains pro Sekunde, und der Klang geht in Rauschen oder einen hohen Ton über. Das ist der synchrone Strom aus [Kapitel 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md).

**Loop.** Am nächsten an einem normalen Sampler: Wiedergabe mit Crossfades und zufälliger Positionsmodulation. Kann lange Abschnitte der Quelle unverändert spielen. Geeignet für rhythmisches Material.

**Cloud.** Schichten von bis zu 20 unsynchronisierten Grains. Henke hebt ihn für dichte monofone Texturen hervor. Das ist die asynchrone Wolke aus [Kapitel 2](../chast-1-zerno/02-anatomiya-zerna.md).

## Position

Position entscheidet, welchen Abschnitt des Samples jedes Grain spielt. Die Skala ist in Prozent, deshalb bleibt die Position relativ zur Datei erhalten: Lädst du ein anderes Sample, bleibt die Position zum Beispiel bei einem Drittel. Sie wird mit dem Regler oder per Klick direkt auf die Wellenform gesetzt.

Position wird moduliert vom LFO, von Envelope 2, von der Tonnummer (**Key**), von der Anschlagstärke (**Vel**) und allen drei MPE-Parametern. Dazu kommt der Zufall pro Grain über Variation.

## Scan

In Granulator III funktioniert der Scan anders als in Serum. Er ist eine Rampe, die die Position ab dem Moment des Tastendrucks bewegt.

- **Loop aus.** Die Rampe hält am Endpunkt an.
- **Loop ein.** Am Ende angekommen, beginnt die Rampe von vorn.
- **Distance.** Der Endpunkt wird als Abstand von Position festgelegt.

Wenn Position plus der aktuelle Scan-Wert über 100 % hinausgeht, springt die Position an den Anfang der Datei. Henke empfiehlt das für rhythmische Loops.

Die Scan-Geschwindigkeit kann von Key, Velocity und MPE Slide abhängen und wird von Envelope 2 und dem LFO moduliert. Mit eingeschaltetem **Key** steigt die Scan-Geschwindigkeit mit der Tonhöhe, und auf jedem Ton ist das Scan-Verhältnis gleich. Ausgeschaltet ist die Geschwindigkeit auf allen Tönen dieselbe. Henke rät, einen Akkord zu spielen und Key hin- und herzuschalten: Der Unterschied ist sofort zu hören.

Zusammen mit Transpose und Grain Size ergibt der Scan Zeitdehnung, Tonhöhenverschiebung und komplexe Zeitverzerrungen.

Die Scan-Skala wirkt als Geschwindigkeitsfaktor. Bei 0 steht die Position still, bei 1 läuft der Cursor mit der Geschwindigkeit des Samples selbst, bei 0,25 viermal langsamer, und der Klang wird zur Textur. Die Dehnungsformel aus [Kapitel 4](../chast-2-parametry/04-istochnik-i-poziciya.md) gilt hier also direkt: s ist der Wert von Scan.

## Grain Size

Der Hauptparameter der Engine. Ein Grain reicht von 2 ms bis 2 s. Bei 2 ms klingt es rauschig oder hoch und tonal, bei 2 s werden lange Abschnitte der Quelle gelesen, bevor das nächste Grain beginnt.

Grain Size hängt von Key, Velocity, MPE Slide und Press ab, wird vom LFO und Envelope 2 moduliert, und Variation fügt der Größe jedes Grains Zufall hinzu. Wird die Größe moduliert, greift der neue Wert nicht sofort: Das Instrument versucht, das aktuelle Grain erst zu Ende zu spielen, damit keine Klicks entstehen. Wie genau, hängt vom Modus ab.

Eine Feinheit, vor der beide Video-Tutorials warnen: Grain Size misst einen Abschnitt des Samples, die hörbare Länge des Grains hängt aber von der Lesegeschwindigkeit ab. Höherer Ton, das Sample wird schneller gelesen, und dasselbe Grain klingt kürzer. Im zweiten Tutorial klingt ein Grain von 76,1 ms bei einer Transposition von +12 Halbtönen halb so lang.

Eine Tempo-Synchronisation hat Grain Size nicht. Ein Workaround aus dem zweiten Tutorial: die Länge einer Zählzeit in Millisekunden ausrechnen und von Hand eintragen. Eine Viertel dauert 60.000 / BPM Millisekunden: bei 120 BPM sind das 500 ms, eine Achtel 250 ms. Genau auf die Zählzeit trifft das Grain, wenn die Transposition auf null steht und die Kopplung von Transpose an die Tasten aus ist (dazu unten mehr).

In diesem Bereich stecken auch zwei Modusregler:

- **Reverse** (nur Loop). Die Wahrscheinlichkeit, dass ein Grain rückwärts spielt. 100 % bedeutet, alle Grains laufen rückwärts.
- **Density** (nur Cloud). Wie viele Grains gleichzeitig klingen: bis zu 20 pro Stereokanal und Ton.

## Shape

Shape ist die Grain-Hüllkurve, und in jedem Modus ist sie anders.

- **Classic.** Ein einziger Regler durchläuft die ganze Palette aus [Kapitel 5](../chast-2-parametry/05-razmer-i-ogibayushchaya.md): vom scharfen Anschlag mit exponentiellem Abklingen (perkussiv) über einen sanften Crossfade (Glocke) bis zum exponentiellen Anstieg mit scharfem Abriss (umgekehrt perkussiv).
- **Loop.** Shape legt die Länge des Crossfades am Anfang und am Ende des Grains fest. Null bedeutet einen Loop ohne Crossfade, 100 % bedeutet, dass ständig geblendet wird.
- **Cloud.** Die Form ist nicht einstellbar, das spart Prozessorleistung.

Shape wird von MPE Slide und Press, dem LFO und Envelope 2 moduliert. Ein wichtiges Detail: Die Form wird am Anfang jedes neuen Grains berechnet. Deshalb ergeben lange Grains plus ein schneller, gleichmäßiger LFO auf Shape komplexe rhythmische Texturen: Jedes Grain bekommt seine eigene Form. Die türkisfarbenen laufenden Linien auf der Wellenform zeigen, wie die Form gerade auf die Grains wirkt.

## Variation

Variation ist für den Zufall pro Grain zuständig. Der gemeinsame Regler legt fest, wie viel Zufall es insgesamt gibt, und die einzelnen Parameter entscheiden, worauf er wirkt: **Position**, **Grain Size**, **Transpose** und **Volume**. Henke beschreibt, was dabei herauskommt: Statische Loops werden lebendig, bei kleinen Grains wird der Klang rauschig, rhythmische Loops zerfallen in granularen Wahnsinn.

Wähl den Regler Variation, und auf dem Modulationsdisplay erscheinen orangefarbene Zielregler. Standardmäßig ist nur Position aufgedreht. Transpose ist dort abgekürzt beschriftet: TR.

Feinheiten, die man kennen sollte:

- **Die Positionsstreuung ist absolut:** von null bis zwei Sekunden, unabhängig von der Sample-Länge. Und immer positiv: Die Grains springen nur nach vorn.
- **Die übrigen Streuungen sind beidseitig.**
- **Die Tonhöhenstreuung funktioniert vorerst nur im Modus Cloud**, und negative Werte wirken nicht. Henke schreibt, dass sich das mit Updates ändern kann.

Variation wird von MPE Slide und Press, dem LFO, Envelope 2, Key und Velocity moduliert. Zum Beispiel die Anschlagstärke auf Variation: Leise Töne sind sauber, laute zerfallen.

## Transpose, Tune und Feinheiten der Stimmung

**Transpose** legt die Grundstimmung der Grains fest, **Tune** die Feinstimmung. Normalerweise folgt die Tonhöhe den Tasten mit **Key** auf 100 %, aber der Maßstab lässt sich ändern. Die Tonhöhe wird von Note Pitch Bend, MPE Press, Envelope 2, dem LFO und einem Zufallswert beim Tastendruck moduliert. Die Tonhöhenstreuung pro Grain ist hier der Bequemlichkeit halber doppelt vorhanden.

**Die Stimmung des Samples.** Granulator geht wie jeder Sampler davon aus, dass in der geladenen Datei der Ton C klingt. Drückst du C, spielt das Sample in seiner Originalgeschwindigkeit. Klingt der Löffel auf E, senk Transpose um −4 Halbtöne und stimm mit Tune nach. Am einfachsten findest du den Ton des Löffels mit einem Stimmgerät: Setz den Tuner von Live direkt hinter Granulator III und spiel C.

**Eine Tonhöhe auf allen Tasten.** Für Drones und Zerschneiden stört die Transposition über die Tasten oft. Wähl Transpose und stell auf dem Modulationsdisplay Key auf 0: Alle Töne klingen in derselben Tonhöhe. Dieselbe Kopplung Key auf 100 % hat auch die Filterfrequenz, und auch die solltest du auf null stellen, sonst wandert das Filter mit jedem Ton. Pitch Bend verschiebt die Tonhöhe weiterhin und lässt sich als Automation im Clip zeichnen.

Henke erklärt die Stimmung eigens, und das lohnt sich nachzuerzählen. Ein Sample auf dem Ton C3 spielt in seiner Originalgeschwindigkeit. Klingt darin ein C3, ist alles einfach. Klingt ein C#3, senk es um einen Halbton. Aber in der Granularsynthese wiederholen sich kurze Stücke sehr oft, und die hörbare Tonhöhe wird zu einer seltsamen Mischung aus der Tonhöhe der Quelle und der Grain-Größe. Vorhersagen lässt sie sich nicht auf einfache Weise, man muss es ausprobieren. Die nötigen Regler sitzen in den Bereichen Transpose und Grain Size.

**Henkes Trick: Tonhöhe aus der Grain-Größe.** Stell **Transpose Key** auf 0 und **Grain Size Key** auf 100. Jetzt spielen alle Tasten das Sample in derselben Tonhöhe, aber die Grain-Größe ändert sich mit dem Ton, und es entsteht ein deutliches Tonhöhenempfinden. Damit es stimmt, rät Henke zu einer Größe von genau 3,822 ms. Die Zahl ist kein Zufall: Eine Periode von 3,822 ms entspricht einer Frequenz von etwa 261,6 Hz, dem eingestrichenen C (in Live heißt es C3). Das ist eine direkte Demonstration von [Kapitel 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md): Der Ton entsteht aus der Grain-Rate.

**MPE und Mikrotonalität.** Wenn du mit tonalem Material arbeitest und willst, dass das Instrument den MPE-Pitch-Bend und die Stimmungen von Live 12 korrekt übernimmt, stell **Note Pitch Bend** im Bereich Transpose auf 48 Halbtöne.

## Spread

Spread verstimmt den linken und rechten Kanal der Grains gegeneinander. Schon ein kleiner Wert ergibt einen Stereo-Chorus, aber die Hauptsache ist etwas anderes: Die linken und rechten Grains fallen zeitlich nicht mehr zusammen, und alle Variation-Streuungen bekommen in den Kanälen unterschiedliche Werte. Der Klang wird sehr stereofon. Große Werte ergeben links und rechts deutlich unterschiedliche Tonhöhen. Spread wird von Velocity, MPE Slide und Pressure, Envelope 2 und dem LFO moduliert.

## LFO

Ein Stereo-LFO mit drei Arbeitsweisen:

- **tempogebunden:** von 1/16 bis 2 Takte;
- **frei:** von 0,01 bis 20 Hz;
- **im Audiobereich:** für FM-artige Effekte und komplexe Geräusche. Das ist die Modulation im Audiobereich aus dem Kasten in [Kapitel 9](../chast-2-parametry/09-modulyaciya.md).

Formen: Sine, Triangle, Up, Down, Rect, Sample & Hold (zufällige Stufen) und zwei Arten weichen Zufalls, Rand und Move. Die Form wählst du im Menü oder per Klick auf das Formsymbol. Der LFO startet bei einer festgelegten Phase (**Phase**) oder bei einer zufälligen.

- **Stereo.** Die Phasenverschiebung zwischen den Kanälen: 0° (mono), 90° (die Kanäle bewegen sich gegeneinander, Henke nennt das „völlig außer Phase“), 180° (invertiertes Mono).
- **Die LFO-Frequenz** wird von Note Pitch Bend und Slide, Envelope 2, Key, Velocity und einem Zufallswert beim Tastendruck moduliert.
- **Die LFO-Tiefe** wird von Slide und Pressure, Envelope 2, Key und Velocity moduliert. Die Option **Use Mod Wheel** fügt eine Skalierung durch das Modulationsrad hinzu. Henke nennt MIDI CC 2, obwohl das Modulationsrad nach dem MIDI-Standard CC 1 ist.
- **Quant.** Quantisiert den LFO-Ausgang vor der Tiefenregelung und erzeugt eine gestufte Modulation. Henkes Beispiel: Bei Quant 0,5 ergibt eine Rampe drei Werte (0; 0,5; 1), ein Sinus fünf (von −1 bis 1 in Schritten von 0,5). Der Unterschied liegt daran, dass die Rampen Up und Down unipolar sind (von 0 bis 1), die übrigen Formen bipolar (von −1 bis 1).

Der Regler Stereo ist besonders gut auf Position und Grain Size: Mit Phasenverschiebung bewegt der LFO Position und Grain-Größe im linken und rechten Ohr unterschiedlich, und die Wolke spaltet sich in zwei.

## Filter

Zwei SVF-Filter in Reihe, neun Modi: 24 dB LP, 12 dB LP, 12 dB LP in 12 dB HP, 12 dB LP mit Notch, ein Notch, zwei Notches, 12 dB HP mit Notch, 12 dB HP, 24 dB HP. Ein Klick auf das Symbol schaltet die Typen durch. Das Filter lässt sich abschalten, um Prozessorleistung zu sparen.

- **Width.** In allen Modi außer 12 dB LP, 12 dB Notch und 12 dB HP verschiebt es die Frequenz des zweiten Filters. Meist sind negative Werte nützlich: Im Paar aus LP und Notch zum Beispiel wirkt der Notch nur, wenn er unterhalb der LP-Grenzfrequenz liegt.
- **Resonance.** Wirkt in den Doppelmodi nur auf das Hauptfilter, beim zweiten ist sie fest.
- **Frequenzmodulation:** alle drei MPE-Parameter, die Lautstärke-Hüllkurve und Envelope 2, Key, Velocity und der LFO.

Standardmäßig ist die Filterfrequenz mit Key auf 100 % gekoppelt: Das Filter folgt der Transposition und entfernt oder betont auf jedem Ton dieselben Obertöne der Quelle.

## Lautstärke und Hüllkurven

Die Lautstärke wird von Key, Velocity, MPE Slide und Press und dem LFO moduliert. Die Lautstärkestreuung pro Grain ist hier doppelt vorhanden.

Es gibt zwei Hüllkurven. **Envelope 1** steuert die Lautstärke und kann die Filterfrequenz bewegen. **Envelope 2** ist eine allgemeine Quelle für eine Vielzahl von Parametern. Beide haben sehr lange Attack-, Decay- und Release-Zeiten, für langsam veränderliche Klänge. Jede hat einen eigenen Parameter **Key**: Die Geschwindigkeit der Hüllkurve hängt von der Tonhöhe ab, und hohe Töne können schneller verklingen, wie bei akustischen Instrumenten.

Ein Trick aus dem zweiten Tutorial: Envelope 2 mit einem Decay von etwa einer Sekunde und negativer Tiefe gleichzeitig auf Shape und Grain Size. Beim Anschlag des Tons sind die Grains scharf und klein, dann kehren sie zum Normalzustand zurück. Der Klang bekommt am Anfang einen Klick, wie bei Zupfinstrumenten.

## Stimmen, Glide und Hold

- **Die Polyphonie** ist fest, 8 Stimmen.
- **Mono-Modus.** Darin wirkt **Glide** auf alle Modulationen gleichzeitig, und die Töne gehen fließend ineinander über. Glide funktioniert nur bei überlappenden Tönen, mit einer Zeit von 0 bis 2 Sekunden.
- **Hold.** Hält die zuletzt gespielten Töne, wie bei einem Arpeggiator. Du spielst einen Akkord, lässt die Tasten los und drehst mit beiden Händen an den Reglern. Ein neuer Ton nach dem vollständigen Loslassen aller Tasten löscht die gehaltenen. In Granulator II funktionierte Hold anders.

## Capture: Live-Eingang

Capture macht aus Granulator III einen Granulator für Live-Klang.

1. Schalte die Aufnahme mit der Taste **I/O** ein. Das Sample ändert sich noch nicht, es erscheint nur die Aufnahmeoberfläche.
2. Wähl die Quelle über die zwei Menüs **Source**. Du kannst sogar den Ausgang von Granulator III selbst nehmen und dich selbst resamplen.
3. Das Instrument nimmt ständig die letzten Sekunden Klang auf, wie viele, legt das Menü **Length** fest.
4. Drück **Capture**: Das aktuelle Sample wird durch einen Schnappschuss der letzten Sekunden ersetzt. Die Reglereinstellungen bleiben.
5. **Cancel** holt das zuletzt geladene Sample zurück, auch wenn du Capture viele Male gedrückt hast.
6. **Save** öffnet einen Speicherdialog: Das Instrument schreibt die Datei und lädt sie als normales Sample neu.

Wichtig: Eine nicht gespeicherte Aufnahme geht beim nächsten Öffnen des Projekts verloren, stattdessen wird das zuletzt geladene Sample geladen.

Die Aufnahmequelle kann eine andere Live-Spur oder ein externer Eingang sein: ein Mikrofon, ein Hardware-Synthesizer. Das zweite Menü Source wählt den Abgriffspunkt des Signals, im zweiten Tutorial ist das Signal nach den Effekten gewählt.

**Generatives Resampling** (zweites Tutorial). Granulator III sitzt auf einer eigenen Spur und nimmt eine benachbarte Schlagzeugspur auf. Ein LFO-Gerät im Rechteckmodus ist auf die Taste Capture gelegt und drückt sie alle zwei Takte, sodass der Granulator sein Material selbst erneuert. Bei Scan 1 klingt das Aufgenommene fast unverändert, bei Scan 0,25 wird es zur Textur. Leg einen LFO auf Grain Size und Shape, und du hast ein Instrument für die Live-Performance, das sich selbst füttert.

## Löffel-Rezepte

Ein Tipp aus dem ersten Tutorial: Stell die Regler an einem Sample ein und tausch dann die Samples aus und hör zu. Der Klang hängt stark von der Quelle ab, und dieselbe Einstellung ergibt mit verschiedenen Dateien ganz unterschiedliche Ergebnisse.

!!! success "Rezept 11.1. Pad in Classic"

    1. Modus Classic. Position auf die Mitte des Klingens.
    2. Grain Size etwa 100 ms, Shape in der Mitte (sanfter Crossfade).
    3. Variation ein wenig, auf Position.
    4. Spread nur ein Hauch, für Stereo.
    5. Envelope 1: Attack 2 Sekunden, Release 4 Sekunden. Schalte Hold ein, spiel einen Akkord und lass die Tasten los.

!!! success "Rezept 11.2. Der Löffel-Synthesizer"

    1. Modus Classic, Position im Klingen.
    2. Transpose Key 0, Grain Size Key 100, Grain Size 3,822 ms.
    3. Spiel eine Melodie: Die Tonhöhe bestimmt die Grain-Größe, die Farbe das Klingen des Löffels.
    4. Füg ein wenig Variation auf Grain Size hinzu, und der Ton wird rau.

!!! success "Rezept 11.3. Zerrissener Rhythmus in Loop"

    1. Modus Loop. Grain Size 100–200 ms.
    2. Reverse 30 %.
    3. LFO tempogebunden, Form Sample & Hold, 1/16, auf Position.
    4. Shape niedriger, damit die Crossfades die Anschläge nicht verwischen.

!!! success "Rezept 11.4. Eine Wolke in Cloud"

    1. Modus Cloud. Density etwa 12.
    2. Grain Size 150–300 ms.
    3. Variation deutlich: Position auf 300–500 ms, Transpose auf ein paar Halbtöne.
    4. Spread höher. Darüber ein Hall mit langer Fahne.

!!! success "Rezept 11.5. Zerschneiden über die Tasten"

    1. Lade einen langen Klang: eine Phrase, eine Feldaufnahme, eine Improvisationssession mit einem Synth.
    2. Transpose Key auf 0, Key der Filterfrequenz auf 0.
    3. Wähl Position und dreh auf dem Modulationsdisplay Key auf. Jetzt nimmt jede Taste ihr eigenes Stück des Samples. Ähnlich dem Slicing in Simpler, nur ohne Bindung an die Anschläge. Wie weit sich die Position pro Taste verschiebt, lässt sich an der Skala nicht ablesen: stell es nach Gehör ein.
    4. Schalte Mono und Glide ein. Beim Legato-Spiel gleitet die Position von Stück zu Stück.
    5. Modus Cloud und eine kleinere Grain Size: Der Positionswechsel wird schneller hörbar.

## Übung 11.1. Ein Granulator deiner eigenen Stimme { .exercise }

1. Schalte I/O ein und wähl unter Source einen Eingang mit Mikrofon.
2. Sag mehrmals „Löffel“ ins Mikrofon und dehne dabei den Vokal.
3. Drück Capture. Gefällt es dir nicht, sprich noch einmal und drück Capture erneut.
4. Schalte Scan mit Loop ein, Distance auf die Länge eines Wortes. Hold, ein einziger Ton.
5. Speicher eine gelungene Aufnahme mit der Taste Save, sonst geht sie verloren.

## Quellen zu diesem Kapitel

- [Granulator III, Seite von Robert Henke](https://www.roberthenke.com/technology/granulator3.html): alle Parameter, Modi, Capture, Push-Einschränkungen, das Team.
- [Granulator III, Pack-Seite auf ableton.com](https://www.ableton.com/en/packs/granulator-iii/): Anforderungen an die Live-Version, Inhalt des Packs.
- [Video-Tutorial 1](https://youtu.be/PqSFu6by6Kk): Installation, Stimmen des Samples mit dem Stimmgerät, Verhalten von Shape in Classic, Capture.
- [Video-Tutorial 2](https://youtu.be/ZVLM1XMT6Z0): Scan als Geschwindigkeitsfaktor, Grain Size und Transposition, Berechnung der Grain-Länge fürs Tempo, Position mit Key, der Trick mit Envelope 2, generatives Resampling. Das Video entstand mit Unterstützung von Ableton.
