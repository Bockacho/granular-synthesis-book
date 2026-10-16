<p class="eyebrow">Kapitel 10</p>

# Xfer Serum 2

In Serum 2 sitzt der Granulator im Oszillator. Jeder der drei Hauptoszillatoren (OSC A, OSC B, OSC C) lässt sich auf einen von fünf Modi umschalten: Wavetable, Multisample, Sample, Granular, Spectral. Ein Patch kann also bis zu drei unabhängige Granulatoren enthalten, dazu noch einen Sub- und einen Rauschoszillator.

!!! note "Zur Version"

    Die Beschreibung entspricht Serum 2 in der Version 2.0.18. Beachte: Das Handbuch warnt, dass der Granular-Modus den Prozessor stärker belastet als die Modi Wavetable, Sample und Multisample.

<figure markdown="span">
  ![Serum 2: der Oszillator OSC B im Granular-Modus, unter der Wellenform die Regler SCAN, DENS, LENGTH und die untere Reihe der Streuungen](../images/10-1.png)
  <figcaption>Screenshot 10.1. OSC B im Granular-Modus mit geladenem Klang. Oberfläche von Serum 2, © Xfer Records.</figcaption>
</figure>

## Einschalten und einen Klang laden

1. Klick auf die Kopfzeile des Oszillators und wähle im Kontextmenü **Granular**.
2. Lag in diesem Oszillator schon ein Sample im Modus Sample oder Spectral, erscheint es sofort im Display. Sonst ist das Display leer.
3. Öffne das Ausklappmenü des Samples. Darin findest du tonale und atonale Werks-Samples und außerdem die Wavetables von Serum: Auch die lassen sich granulieren. Eine eigene Datei lädst du mit dem Eintrag **Load Sample**. Laut Testberichten kannst du die Datei auch einfach auf das Display ziehen ([PML](https://www.productionmusiclive.com/blogs/news/how-to-use-granular-synthesis-in-serum-2)).
4. Nach dem Laden zeigt dasselbe Menü die Datei auf der Festplatte an oder lädt sie neu.

Für Drones lohnt es sich, das Pitch-Tracking abzuschalten. Rechtsklick auf die Kopfzeile des Oszillators, **Enable Pitch Tracking** abwählen. Dann spielt der Granular-Modus auf jeder Taste den Ton C3. Dort erscheint auch **Pitch Bend Tracking**: Schalte das ebenfalls ab, wenn das Pitch-Rad den Drone nicht berühren soll.

## Wo die Parameter aus Teil 2 sind

| Parameter aus Teil 2 | Wo in Serum 2 |
| --- | --- |
| Lesefenster (Kapitel 4) | Start- und Endmarker, Loop LS und LE |
| Scan und Einfrieren (Kapitel 4) | der Regler **SCAN**, null hält an |
| Manuelle Position (Kapitel 4) | der Modus **Manual** im Loop-Menü |
| Größe (Kapitel 5) | der Regler **LENGTH** und seine Modi |
| Hüllkurve (Kapitel 5) | die Fenstertaste: **AMOUNT**, **SKEW**, **SHAPE** |
| Dichte und Synchronität (Kapitel 6) | der Regler **DENS** und seine Modi |
| Tonhöhe (Kapitel 7) | **OCT**, **SEM**, **FIN**, **CRS** |
| Streuungen (Kapitel 4, 5, 7, 8) | untere Reihe: **OFFSET**, **DIR**, **PITCH**, **RAND** für Länge, Panorama, Pegel |
| Panorama und Lautstärke (Kapitel 8) | **PAN**, **LEVEL** |
| Stimmen (Kapitel 8) | **UNISON** und der Bereich Voicing |

## Marker und Sample-Operationen

Fahr mit dem Cursor über die Wellenform, und die Start- und Endmarker erscheinen. Zieh sie, um den Granulator im Klingen des Löffels einzusperren und den Anschlag wegzulassen. Das ist das Lesefenster aus [Kapitel 4](../chast-2-parametry/04-istochnik-i-poziciya.md).

Ein Rechtsklick auf die Wellenform öffnet das Operationsmenü. Laut Handbuch stimmen fast alle Einträge mit dem Sample-Modus überein:

- **Snap Off / Snap to Zero / Snap to Beats / Snap to Loop.** Woran die Marker einrasten: nirgends, an Nulldurchgängen der Welle, an Zählzeiten des Tempos, an Loop-Punkten. Snap to Zero bewahrt vor Klicks an den Rändern.
- **Fade Edges.** Fades an den Rändern des Samples, von 1 bis 128 ms.
- **Normalize.** Hebt die Lautstärke bis zum Spitzenpegel an, ohne Verzerrung.
- **Reverse.** Dreht das ganze Sample um.
- **Trim.** Schneidet das Sample an den Markern zu.
- **Slice Auto / Slice Manual.** Schneidet das Sample an den Anschlägen und verteilt die Stücke auf die Tasten. Die gelbe Linie auf der Wellenform legt die Schwelle fest: Je tiefer die Linie, desto mehr Stücke. Im manuellen Modus fügt ein Alt-Klick (auf dem Mac Option-Klick) einen Schnitt hinzu oder entfernt ihn. Im Loop-Modus Manual ist das Slicen nicht verfügbar.
- **Show Marker Animation.** Die Marker folgen der Modulation, und man sieht, wohin der LFO das Fenster treibt.
- **Zoom to Start and End.** Fixiert die Ansicht auf die ganze Datei. Solange der Eintrag aus ist, ändert eine vertikale Mausbewegung über der Wellenform den Zoom, eine horizontale scrollt.

Die Operationen sind nicht destruktiv: Die Originaldatei ändert sich nicht, Rückgängig und Wiederholen funktionieren, und **Reload Sample** im Sample-Menü stellt die Datei wieder her.

## Das Loop-Menü

Das Loop-Menü entscheidet, wie sich der Granulator durch das Sample bewegt. Die meisten Einträge teilt es mit dem Sample-Modus, zwei gibt es nur im Granular-Modus.

| Eintrag | Was er macht |
| --- | --- |
| One-shot | die Datei wird einmal vorwärts durchlaufen, solange du den Ton hältst |
| Fwd Loop | vom Startmarker bis zum Loop-Ende, dann wieder ab dem Loop-Anfang |
| Rev Loop | am Loop-Ende angekommen, läuft es rückwärts |
| Fwd/Rwd Loop | Pendel-Loop: hin und zurück, ohne harte Übergänge |
| Tailed | spielt die zweite Hälfte der Datei und loopt die Fahne, während die Lautstärke abklingt |
| Relative Loop | der Loop wandert mit dem Startmarker mit |
| Link Loop Length | beim Verschieben des Loop-Anfangs bleibt seine Länge erhalten |
| Exit Loop on Release | beim Loslassen der Taste verlässt es den Loop und spielt die Datei zu Ende |
| **Loop Grains** | nur Granular: die Grains respektieren die Loop-Marker |
| **Manual** | nur Granular: die Position wird von Hand gesetzt (siehe unten) |

Die Loop-Marker sind blau und erscheinen am oberen Rand des Displays. Sie lassen sich einzeln ziehen, gemeinsam (am Bereich dazwischen) oder als Zahlen in den Feldern **LS** und **LE** eingeben. Über die Start- und Endmarker des Samples geht der Loop nicht hinaus. Führst du aber per Modulation oder Automation das Loop-Ende vor den Anfang, kehrt sich die Loop-Richtung um. Ein fertiger Trick für Grains, die mal vorwärts, mal rückwärts laufen.

**Der Loop-Crossfade** wirkt im Granular-Modus auf die Grains selbst und funktioniert nur mit eingeschaltetem Loop Grains. Die Crossfade-Taste wird mit der Maus nach oben gezogen, die hellblaue Kurve zeigt seine Form.

## Modus Manual: Position von Hand

Wähle im Loop-Menü **Manual**. Der Wiedergabecursor wird durch einen roten X|Y-Punkt ersetzt, und der Regler **SCAN** bewegt diesen Punkt waagerecht. Beim Drücken einer Taste wird das Sample nicht mehr gescannt: Die Position bleibt dort, wo der Punkt ist. Das ist die Handbewegung und das Einfrieren aus [Kapitel 4](../chast-2-parametry/04-istochnik-i-poziciya.md) in Reinform.

Die Position lässt sich automatisieren oder modulieren: Zieh eine beliebige Modulationsquelle (einen LFO, eine Hüllkurve, ein Makro) direkt auf den Punkt. Ein langsamer LFO auf dem Punkt ergibt eine Drift durch das Klingen des Löffels.

## Das X|Y-Pad

Schalte im Kontextmenü des Displays die Anzeige **X|Y Control** ein. Auf der Wellenform erscheint ein roter Punkt und im Menü ein neuer Eintrag zur Wahl des Parameters für die Y-Achse. Zur Auswahl stehen: Level, Warp, Warp 2, Density, Grain Length, Window Amt, Window Skew sowie der Zufall fast aller Parameter: Rand Offset, Rand Dir, Rand Pitch, Rand Length, Rand Pan, Rand Gain, Rand Window, Rand Skew, Rand Warp, Rand Warp 2. Nach der Wahl des Parameters erscheint noch ein Eintrag: wie genau die Y-Achse ihn moduliert.

Leg die Grain-Länge auf Y, schalte Manual ein, und mit einer einzigen Mausbewegung wanderst du durch den Löffel und veränderst seine Körnigkeit. Auf der Bühne ist das fast ein fertiges Instrument.

## SCAN: Scan-Geschwindigkeit

SCAN legt fest, wie schnell der Wiedergabecursor durch das Sample fährt. Jedes neue Grain startet an der aktuellen Stelle des Cursors. Eine hohe Geschwindigkeit verteilt die Grain-Starts weiter über die Datei, und sie überlappen sich weniger: gut für Rhythmus und Glitch. Eine niedrige Geschwindigkeit dehnt den Klang zu einem Drone. Ein negativer Wert dreht die Bewegung um, null hält den Cursor an: Das ist Einfrieren.

Die Skala ist in Prozent. Um das Originaltempo zu finden, lade eine Sprachaufnahme und stell SCAN so ein, dass die Wörter im normalen Tempo klingen. Ab diesem Punkt gilt die Dehnungsformel aus [Kapitel 4](../chast-2-parametry/04-istochnik-i-poziciya.md).

Ein Rechtsklick auf SCAN öffnet die Einstellungen:

- **Range.** Der Bereich des Reglers: ±200 % (Standard), ±400 % oder ±800 %.
- **Reverse.** Kehrt den Scan um. Lässt sich automatisieren und modulieren.
- **Key Track.** Die Scan-Geschwindigkeit steigt mit der Tonhöhe. Aus: dieselbe Geschwindigkeit auf allen Tasten.
- **Lock Scan Rate (to Tempo).** Die Scan-Geschwindigkeit ändert sich mit dem Projekttempo.
- **Sample Length to BPM.** Die Sample-Länge wird an das Tempo der DAW gekoppelt, der Regler SCAN wird zu **RATE** und in Takten und Zählzeiten eingestellt. Ein Durchlauf durch den Löffel dauert genau einen oder zwei Takte.

## DENS: Dichte

DENS legt fest, wie oft Grains entstehen. Ein Rechtsklick wählt einen von drei Modi:

- **Free.** Die Grain-Rate in Hertz. Das ist die Dichte aus [Kapitel 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md) in Reinform.
- **BPM Sync.** Ein Grain auf jede Zählzeit. Im Menü kommen Triplet und Dotted für Triolen und Punktierungen hinzu.
- **Grains.** Serum berechnet die Grain-Rate selbst aus ihrer Länge, sodass eine vorgegebene Zahl von Grains gleichzeitig klingt. Das ist die Überlappung O aus [Kapitel 2](../chast-1-zerno/02-anatomiya-zerna.md): Stell 4 ein, und in jedem Moment klingen vier Grains, egal wie du die Länge drehst.

Zwei weitere Einstellungen im selben Menü:

- **Jump Start.** Ein: Zu Beginn des Tons entstehen sofort viele Grains, die volle Dichte ist sofort zu hören. Aus: Am Anfang steht ein einziges Grain, die Wolke baut sich allmählich auf, und der Anschlag des Tons ist weicher.
- **Max Grains.** Die Obergrenze gleichzeitig klingender Grains, Unison-Grains eingeschlossen. Ist sie erreicht, wird ein neues Grain übersprungen, bis wieder Platz ist. Der Hauptregler zum Sparen von Prozessorleistung. Insgesamt schafft Serum bis zu 256 Grains ([What's New](https://static.xferrecords.com/Serum%202%20What's%20New.pdf)).

Im Modus Free reicht die Grain-Rate bis in den hörbaren Bereich ([Databroth](https://www.databroth.com/blog/serum-2-review)), der synchrone Strom mit Ton aus [Kapitel 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md) ist hier also erreichbar.

## LENGTH: Grain-Länge

LENGTH legt die Dauer eines Grains fest. Ein Rechtsklick wählt den Modus:

- **Free.** Die Länge in Sekunden oder Millisekunden.
- **BPM Sync.** Die Länge in Notenwerten, mit Triplet und Dotted.
- **Percent.** Die Länge in Prozent der Periode zwischen den Grains. Nicht verfügbar, wenn DENS im Modus Grains steht.

Percent ist praktisch für Rhythmus. Die Länge in Prozent der Periode ist die Überlappung aus [Kapitel 2](../chast-1-zerno/02-anatomiya-zerna.md) mal hundert: 50 % ergeben Grains mit Pausen, 100 % lückenlose, 200 % je zwei Grains gleichzeitig. Ändere die Dichte nach Belieben, der Charakter des Zerschneidens bleibt.

## Das Grain-Fenster

Die Fenstertaste öffnet die Einstellungen der Grain-Hüllkurve. Ziehen der Taste mit Alt (auf dem Mac Option) ändert AMOUNT und SKEW schnell, ohne die Einstellungen zu öffnen.

- **AMOUNT.** Wie stark die Fensterform auf das Grain wirkt. Daneben ein Feld für Zufall pro Grain.
- **SKEW.** Die Schräglage des Fensters aus [Kapitel 5](../chast-2-parametry/05-razmer-i-ogibayushchaya.md). Ebenfalls mit Zufall pro Grain.
- **SHAPE.** Die Fensterform, ihr Bild ist links zu sehen.

| Form | Wie sie aufgebaut ist | Wofür sie taugt |
| --- | --- | --- |
| Hann | sanfter Kosinus-Anstieg und -Abfall | die Standardform für Wolken und Pads |
| Welch | parabolische Kuppel | ein kompaktes, dichtes Grain mit starker Mitte |
| Gaussian | Glocke | weiche, fließende Texturen |
| Blackman-Harris | steile Flanken, glatte Spitze, stark gedämpfte Ränder | der sauberste Klang bei starker Überlappung |
| Sinc | spitze Mitte und schwingende Ausläufer | eine ungewöhnliche Färbung, fügt Obertöne hinzu |
| Tukey | flache Mitte, abgerundete Ränder | mehr Quelle, deutlich |
| Triangle | gerader Anstieg zur Spitze, gerader Abfall | ein einfaches, etwas schärferes Grain |
| Trapezoid | Anstieg, langes Plateau, Abfall | ein gleichmäßiger Grain-Körper, dichter Klang |
| ExpDec | sofortiger Anschlag, exponentielles Abklingen | Perkussion, Tropfen, Plucks |
| Exp Dec Rev | exponentieller Anstieg, scharfe Spitze | Einsaugen, rückwärts laufende Tropfen |

## Zufall der Grains

Die untere Reglerreihe ist für die Streuung pro Grain zuständig. Es ist das Set aus den Kapiteln 4, 5, 7 und 8:

| Regler | Was er streut | Kapitel |
| --- | --- | --- |
| OFFSET | Positionsversatz | 4 |
| DIR | Grain-Richtung | 7 |
| PITCH | Tonhöhe | 7 |
| RAND (LENGTH) | Länge | 5 |
| RAND (PAN) | Panorama | 8 |
| RAND (LEVEL) | Lautstärke | 8 |

Ein Rechtsklick auf **DIR** schaltet **Reverse Grains** ein: Alle Grains drehen sich auf einmal um. Der Schalter lässt sich automatisieren, dann läuft die Wolke auf Befehl mal vorwärts, mal rückwärts. Zwei weitere Streuungen stecken in den Fenstereinstellungen (AMOUNT und SKEW), und beide Warp-Slots haben ebenfalls Zufall pro Grain (Rand Warp und Rand Warp 2 in der Liste der Y-Achse).

## Tonhöhe

Die Tonhöhe der Grains stellen die für alle Oszillatoren gemeinsamen Regler ein: **OCT** (Oktaven), **SEM** (Halbtöne), **FIN** (Cent) und **CRS** (grobe, stufenlose Transposition, praktisch als Modulationsziel). Ein Rechtsklick auf OCT oder SEM ändert den Modus: **Semitones**, **Harmonics** (Vielfache des Grundtons), **Ratio** (Frequenzverhältnis, wie bei FM) und **Step** (Schritte der mikrotonalen Stimmung MTS-ESP, erscheint nur bei verbundener Stimmungsquelle).

Ein Tipp aus dem Abschnitt zum Sample-Modus: Klingt ein Sample nicht auf dem Ton C3, häng den Ton mit Leerzeichen oder Unterstrich ans Ende des Dateinamens, etwa „loeffel F4.wav“, und Serum erkennt den Grundton selbst. Der Trick ist für den Sample-Modus beschrieben, prüf also nach dem Laden in Granular, ob der Grundton übernommen wurde.

## Warp

Die Taste Warp blendet die Verzerrungseinstellungen ein und aus. Standardmäßig ist Warp aus, der Modus wird im Menü oder mit den Pfeilen < > gewählt, die Tiefe mit einem Regler. Die Modi sind dieselben wie bei Wavetables: Sync, Formbiegungen, Filter, rund fünfzehn Verzerrungsarten, außerdem FM, PD, AM und Ringmodulation durch einen anderen Oszillator oder ein Filter. Es gibt zwei Slots (in der Liste der Y-Achse heißen sie Warp und Warp 2).

Eine Wolke aus dem Löffel lässt sich also mit einem Sinus aus OSC B frequenzmodulieren. Der zweite Oszillator muss dafür eingeschaltet sein, seine Lautstärke kann aber auf null stehen. So entstehen glockenartige und metallische Wolken, die ein gewöhnlicher Granulator nicht liefert.

## Unison

UNISON stapelt mehrere Granularoszillatoren auf einen Ton, jeden leicht verstimmt. Laut dem Test von Databroth bis zu 16 Stimmen ([Databroth](https://www.databroth.com/blog/serum-2-review)). Die Unison-Einstellungen:

- **MODE.** Wie die Stimmen verstimmt werden: Linear (gleichmäßig), Super (dicht, für „Supersaws“), Exp (entfernte Stimmen spreizen stärker), Inv (tiefe Stimmen stärker verstimmt), Random (zufällig).
- **STACK.** Die Verteilung der Stimmen auf Oktaven. Varianten: Off, 12 (1-3x), 12+7 (1-3x), Center-12, Center-24.
- **DETUNE**, **RANGE**: Betrag und Spannweite der Verstimmung.
- **BLEND.** Das Verhältnis von Seitenstimmen und Mittelstimme, standardmäßig 75 %.
- **WIDTH.** Die Stereobreite des Unisons.
- **START.** Ein zufälliger Versatz der Startposition für jede Stimme. Die Stimmen nehmen Grains von verschiedenen Stellen, und der Klang wird lebendig.
- **SPAN.** Ein fester Versatz der Startposition zwischen den Stimmen.
- **SPAWN PATTERN.** Wann die Unison-Stimmen ihre Grains erzeugen. **Together** (Standard): alle gleichzeitig. **Even**: gleichmäßig verteilt bis zum nächsten Grain. **Exp**: mit wachsenden Abständen. **Random**: zufällig.

SPAWN PATTERN solltest du dir merken. Mit Together erzeugen vier Stimmen vier Grains in derselben Millisekunde. Mit Even füllen dieselben vier Stimmen die Pausen zwischen den Grains, und die Wolke wird viermal dichter, ohne dass sich DENS ändert.

Vorsicht mit dem Prozessor: Unison, Dichte und Polyphonie multiplizieren sich.

## Modulation

Am einfachsten weist man per Ziehen zu. Zieh einen ENV- oder LFO-Reiter oder den Wähler eines Makros auf den gewünschten Regler: Über einem gültigen Ziel erscheint am Cursor ein Plus. Um den Regler legt sich ein blauer Tiefenring, und ein kleiner Ring oben links ändert die Tiefe mit einem Pfeil. Die Tiefe kann auch negativ sein. Der zweite Weg: Rechtsklick auf den Regler und die Quelle im Menü wählen.

Was dir zur Verfügung steht:

- **4 Hüllkurven**, mit Tempo-Sync.
- **Bis zu 10 LFOs** (der siebte bis zehnte erscheinen, wenn der sechste zugewiesen ist), mit Formeditor, den chaotischen Modi Lorenz und Rossler und einer Frequenz bis 1000 Hz. Tausend Hertz bedeuten die Modulation im Audiobereich aus dem Kasten in [Kapitel 9](../chast-2-parametry/09-modulyaciya.md): Ein LFO auf der Grain-Tonhöhe beginnt Klangfarbe zu erzeugen.
- **8 Makros.** Ein Makro kann mehrere Regler zugleich steuern und selbst Modulationsziel sein. Das sind die Kopplungen aus [Kapitel 9](../chast-2-parametry/09-modulyaciya.md).
- **Anschlagstärke und Tonnummer** als eigene Quellen.
- **Jeder Oszillator oder jedes Filter** als Quelle: Zieh seine Kopfzeile auf einen Regler.

Alle Verbindungen sind in der Modulationsmatrix sichtbar und bearbeitbar (Seite **Matrix**). Fahr mit dem Cursor über eine Quelle, und ein Tooltip zeigt, wohin sie geroutet ist.

## So sicherst du das Ergebnis

Fahr mit dem Cursor links neben das Serum-Logo, und ein Wellensymbol erscheint. Zieh es auf eine Audiospur der DAW, und Serum rendert den zuletzt gespielten Ton oder Akkord als WAV. Eine Kopie landet im Ordner Renders, ein Alt-Klick (Option-Klick) auf das Symbol öffnet ihn. So wird aus einer schweren Wolke eine leichte Audiodatei.

## Löffel-Rezepte

Fang immer mit einem leeren Patch an: Hauptmenü, **Init Preset**. Dann OSC A auf Granular, den Löffel geladen, Start- und Endmarker auf das Klingen.

!!! success "Rezept 10.1. Eisiges Pad"

    1. LENGTH im Modus Free, etwa 120 ms. DENS im Modus Grains, Wert 4.
    2. SHAPE Hann. SCAN klein und positiv.
    3. OFFSET ein wenig, PITCH auf 10–15 Cent, RAND (PAN) auf die Hälfte.
    4. UNISON 3, SPAWN PATTERN Even, START ein wenig.
    5. Lautstärke-Hüllkurve: Attack 1–2 Sekunden, Release 3–4 Sekunden.

!!! success "Rezept 10.2. Tropfen"

    1. LENGTH im Modus Free, 20–40 ms. DENS im Modus Free, 3–6 Hz.
    2. SHAPE ExpDec.
    3. OFFSET fast über das ganze Klingen, RAND (LEVEL) deutlich.
    4. Ein LFO im Modus Lorenz auf FIN, geringe Tiefe.

!!! success "Rezept 10.3. Rhythmisches Zerschneiden"

    1. Rechtsklick auf SCAN, **Sample Length to BPM**, RATE auf einen Takt.
    2. DENS im Modus BPM Sync, 1/16.
    3. LENGTH im Modus Percent, 50 %.
    4. DIR ein wenig. Automatisiere **Reverse Grains** auf die letzte Zählzeit des Takts.

!!! success "Rezept 10.4. Metallische Wolke"

    1. Das Pad aus Rezept 10.1.
    2. Schalte OSC B ein, Sinus, Lautstärke auf null.
    3. Wähle bei OSC A unter Warp FM (B) und erhöhe die Tiefe langsam.
    4. OSC B eine Quinte höher, dann mit dem Regler FIN auf nicht ganzzahlige Intervalle ziehen. Der Löffel wird zu einer Glocke aus einer anderen Welt.

!!! success "Rezept 10.5. Orgelschimmer"

    1. Das Pad aus Rezept 10.1.
    2. UNISON 4, STACK 12+7, falls deine Version diese Variante hat.
    3. Makro 1 auf LENGTH mit Plus und auf OFFSET mit Minus. Du drehst das Makro, und die Wolke sammelt sich zu einer Orgel.

## Übung 10.1. Der Löffel auf dem X|Y-Pad { .exercise }

1. Nimm Rezept 10.1, schalte den Loop-Modus **Manual** und die Anzeige **X|Y Control** ein.
2. Weise die Y-Achse Grain Length zu.
3. Nimm in der DAW eine Automation auf: eine Minute langsamer Bewegung des Punkts.
4. Zieh den Render in die DAW und hör ihn dir einzeln an. Das ist der erste Track, der mit einer Maus gespielt wurde.

## Quellen zu diesem Kapitel

- [Serum 2 User Guide, Xfer Records](https://xferrecords.com/manual/serum-2), Handbuchversion 1.0.3: Seiten 77–103 (Loop, Granular-Modus), 187–208 (Modulation, Makros), 350 (Tastenkürzel).
- [What's New in Serum 2, Xfer Records](https://static.xferrecords.com/Serum%202%20What's%20New.pdf): 256 Grains, 10 LFOs bis 1000 Hz, 8 Makros, 4 Hüllkurven.
- [Production Music Live](https://www.productionmusiclive.com/blogs/news/how-to-use-granular-synthesis-in-serum-2): Laden per Ziehen.
- [Databroth, Test von Serum 2](https://www.databroth.com/blog/serum-2-review): Grain-Rate im hörbaren Bereich, 16 Unison-Stimmen.
