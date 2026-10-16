<p class="eyebrow">Kapitel 21</p>

# Kostenlose Instrumente und weiterführende Lektüre

## Kostenlose Granulatoren

Preise und Bedingungen kostenloser Plugins ändern sich oft, schau also vor dem Herunterladen auf die Seite des Entwicklers.

**Ribs, Hvoya Audio.** Ein Granulareffekt und Synthesizer in einem, von Eugene Yakshin. Auf der Seite des Entwicklers wird er nach dem Prinzip „zahl, so viel du willst“ angeboten, null ist auch erlaubt. Modi: ein über die Tastatur gespielter Synthesizer, ein „Scratch“ mit präziser Steuerung des Lesekopfs, ein rhythmischer Modus mit Polyrhythmen und dazu ein Effektmodus. Eine wichtige Besonderheit: Eine eigene WAV-Datei lässt sich in Ribs nicht laden, er füllt seine Puffer mit dem Klang der Spur, auf der er sitzt. In Ableton Live ist ein Routing nötig, das der Autor in einem Video zeigt ([hvoyaaudio.itch.io](https://hvoyaaudio.itch.io/ribs)).

**Argotlunar, Michael Ourednik.** Ein Live-Granulator auf Basis einer Delay-Linie: Jedes Grain bekommt eine zufällige Lautstärke, ein Panorama, eine Dauer, eine Verzögerung, eine Tonhöhe, ein Glissando, ein Filter und eine Hüllkurve. Open Source unter der Lizenz GPLv2, Versionen für Windows, macOS und Linux ([GitHub](https://github.com/mourednik/argotlunar)). Das Plugin ist alt, die letzte Version 2.0.6 wurde mit der JUCE-Bibliothek von 2013 gebaut und startet auf neuen Systemen womöglich nicht.

**Emergence, Daniel Gergely.** Ein Live-Granulator: bis zu 600 Grains in vier unabhängigen Strömen, Puffer-Einfrieren, Transposition ±24 Halbtöne. Die frühe Version 0.3 wurde kostenlos verteilt, Version 1.0 ist auf der Seite des Autors aber schon kostenpflichtig, ab 20 Dollar ([itch.io](https://daniel-gergely.itch.io/emergence1)). Es ist ein Effekt: Eine eigene Datei lädt man nicht, er granuliert den Klang, der durch ihn fließt.

**Granulator II, Robert Henke.** Der Vorgänger von Granulator III, kostenlos, unter einer nichtkommerziellen Creative-Commons-Lizenz ([Synthtopia, Zitat von Henke](https://synthtopia.com/?p=48204)). Er braucht Max for Live. Henke schreibt, dass Granulator II weiter erhältlich ist, aber höchstwahrscheinlich nicht mehr aktualisiert wird.

**EmissionControl2, Curtis Roads, Jack Kilgore, Rodney DuPlessis.** Ein eigenständiges Programm (kein Plugin) für macOS, Windows und Linux, Open Source unter der Lizenz GPL-3. Es arbeitet mit Klangdateien und nimmt keinen Live-Eingang an. Bis zu 2048 Grains gleichzeitig, Grain-Länge von 20 Mikrosekunden bis 10 Sekunden, jedes Grain mit eigenem Filter, Panorama und Fenster, sechs LFOs bis 6000 Hz, Regler für Intermittenz und Anzahl der Ströme, Presets mit gleitendem Übergang dazwischen. Gemacht vom Autor von „Microsound“ für Lehre, Forschung und Bühne ([GitHub](https://github.com/EmissionControl2/EmissionControl2)).

**Pure Data und SuperCollider.** Kostenlose Umgebungen, in denen man einen Granulator aus Blöcken baut oder in Code schreibt. Geeignet für Aufgabe 11 aus [Kapitel 19](../chast-5-dalshe-sam/19-zadaniya.md) und für alle, die wissen wollen, wie es im Inneren funktioniert. Für Pure Data und Max gibt es den kostenlosen Granulator +bubbler von Tom Erbe, dem Autor von Algorithmen für die Module von Make Noise ([SoundHack](https://www.soundhack.com/freeware/)).

## Kostenpflichtig, aber spannend: Grain in Reason

Grain Sample Manipulator gehört zu Reason, zum Plugin Reason Rack (VST3, AU und AAX, er läuft also in jeder DAW) und zum Abo Reason+. Einen eigenen Klang lädst du per Ziehen hinein oder nimmst ihn mit der Taste Start sampling direkt im Instrument auf. Danach kommt das Übliche: bis zu 12 Stimmen, vier Hüllkurven, drei LFOs, acht Modulationsbusse und sechs Effekte, deren Reihenfolge sich per Ziehen ändern lässt.

Die Besonderheit von Grain: Er hat vier Algorithmen, und jeder liest dieselbe Datei auf seine Weise.

| Algorithmus | Was er macht |
| --- | --- |
| Spectral Grains | zerlegt die Aufnahme in Teiltöne und bearbeitet sie einzeln |
| Grain Oscillator | zwei sehr kurze Grains, die Grain-Rate folgt dem Ton (Kapitel 6) |
| Long Grains | lange Grains mit Reglern für Länge, Geschwindigkeit, Crossfade und Tonhöhenstreuung |
| Tape | wie ein Tonbandgerät: Geschwindigkeit und Tonhöhe sind gekoppelt, bei Geschwindigkeit 0 bleibt das Band stehen |

**Spectral Grains.** Der Algorithmus analysiert die Frequenzen der Aufnahme und findet darin Teiltöne. Der Regler Snap zieht unharmonische Teiltöne zu den nächstgelegenen harmonischen: Bei null ändert sich der Klang kaum, bei 100 % bleiben nur harmonische übrig. Der Regler Filter macht dasselbe durch Herausschneiden: Unharmonische Teiltöne werden gedämpft, harmonische bleiben. Das Klingen eines Löffels gegen eine Tasse ist ausgesprochen unharmonisch, deshalb ist dieser Algorithmus daran am besten zu hören. Mit dem Regler Curve kannst du eine eigene Formantkurve zeichnen: Oberhalb der rosa Zone werden die Teiltöne verstärkt, unterhalb abgeschwächt, und Amount bestimmt die Stärke.

**Die Motion-Modi.** Sie bestimmen, wie sich der Lesekopf durch die Datei bewegt: Freeze (steht am Anfang), One Shot (ein Durchlauf), FW Loop und FW-BW Loop (Loop vorwärts oder als Pendel), End Freeze (ein Durchlauf und Halt am Ende) und Envelope 1. Bei Letzterem wird der Weg durch die Datei von einer Hüllkurve gezeichnet: Der untere Teil der Kurve bedeutet den Anfang des gewählten Abschnitts, der obere das Ende. Wählst du eine gerade aufsteigende Rampe, schaltest den Loop und den Sync auf die Zählzeit ein, läuft das Sample genau im Takt des Projekts.

**Die Tonhöhe der Aufnahme als Modulation.** Beim Laden analysiert Grain die Tonhöhe über die ganze Aufnahme und speichert sie als Kurve. Diese Kurve lässt sich als Modulationsquelle nutzen: Die Parameter folgen dann der Tonhöhe an der Stelle der Datei, an der der Positionsmarker steht.

!!! success "Rezept 21.1. Der Löffel, der zum Ton wurde"

    1. Lade den Löffel. Motion im Modus Freeze, den Marker Sample Start auf das Klingen.
    2. Algorithmus Spectral Grains, Snap und Filter auf null, Formant Kbd auf 100 %. Spiel eine Tonleiter: Der Löffel klingt genauso metallisch, folgt aber schon den Tasten.
    3. Dreh Snap langsam auf. Die unharmonischen Teiltöne rücken an die harmonischen heran, das Klingen verliert sein Metall und wird tonal. Danach lässt sich die Tonhöhe mit den gewohnten Reglern OCT, SEMI und TUNE einstellen.
    4. Probier Filter statt Snap und vergleiche. Das Filter verschiebt die Teiltöne nicht, sondern entfernt überflüssige, deshalb klingt es trockener.
    5. Zeichne eine Kurve in Curve und dreh Amount auf. So wählst du, welche Teiltöne die wichtigsten bleiben.

## Ein eigenständiger Granulator: Quanta 2

!!! note "Zur Version"

    Die Beschreibung entspricht Quanta 2, Handbuchversion 2.0.

Quanta 2 von Audio Damage ist ein Synthesizer, bei dem der Granulator an der Stelle des Oszillators sitzt. Aufgebaut ist er wie ein klassischer subtraktiver: Granulator, zwei analoge Oszillatoren und Rauschen gehen in zwei Filter (seriell oder parallel), danach durch Chorus, Delay und Hall. Bis zu 15 Stimmen. Formate: unter macOS AU, VST3 und AAX, unter Windows VST3 und AAX, unter Ubuntu VST3. Es gibt eine Demoversion: Sie funktioniert wie die Vollversion, speichert aber keine Presets und keinen Projektzustand und verstummt 20 Minuten, nachdem sie in eine Session eingefügt wurde.

Eine eigene Datei lädst du per Ziehen auf das Fenster. Quanta nimmt WAV, AIFF, MP3, Ogg und FLAC mit beliebiger Abtastrate und Bittiefe an, verwendet die ersten beiden Kanäle, normalisiert die Aufnahme beim Laden und speichert sie direkt im Preset. Deshalb lässt sich ein Preset ohne Originaldatei auf einen anderen Computer übertragen, ist dafür aber groß. Den Grundton bestimmt Quanta selbst, indem es die Tonhöhe an vier Stellen der Aufnahme misst. Bei einem einfachen, stabilen Klang stimmt das meist, bei einem komplexen, etwa einem Drum-Loop, setzt es C4. Einen Fehler korrigierst du mit der Maus im Feld ROOT NOTE.

| Parameter aus Teil 2 | Wo in Quanta 2 |
| --- | --- |
| Position (Kapitel 4) | der Regler POSITION von 0 bis 1 oder ein Klick auf die Wellenform |
| Größe (Kapitel 5) | LENGTH, von 1 ms bis 1 s |
| Hüllkurve (Kapitel 5) | ENVELOPE, zehn Formen |
| Dichte (Kapitel 6) | GRAINS, von 1 bis 100 Grains pro Sekunde |
| Tonhöhe (Kapitel 7) | TUNE (±2400 Cent), FINE (±100 Cent), QUANT |
| Richtung (Kapitel 7) | das Menü DIRECTION |
| Streuungen (Kapitel 4–8) | RAND-Regler neben vielen Reglern des Granulators |
| Breite (Kapitel 8) | WIDTH |
| Lautstärke (Kapitel 8) | LEVEL |

ENVELOPE blättert durch zehn Formen: Rectangle, Triangle, Trapezoid, Sine Squared, Half Sine und Rounded Rectangle sowie vier asymmetrische. Curved Down und Ramp Down starten hart und fallen ab, exponentiell oder linear: So klingen Tropfen und Zupfer. Curved Up und Ramp Up steigen zum Ende des Grains an: So entsteht bei langen Grains der Eindruck einer rückwärts laufenden Aufnahme. Die zulässige Grain-Länge von bis zu einer Sekunde ist Absicht, damit Quanta delayartige Glitches erzeugen kann.

Auf der Wellenform zeigt ein orangefarbenes Oval, wo der Granulator gerade liest: Es bewegt sich mit der Positionsmodulation, und seine Breite zeigt den Bereich der zufälligen Streuung.

**Modulation.** Ein Rechtsklick auf einen beliebigen Regler öffnet das Routing-Panel. Drück das Plus, wähl eine Quelle und bewege den Tiefenschieber: Links von der Mitte wird das Signal invertiert. Auf ein Ziel lassen sich bis zu fünf Quellen legen. Die Quellen: vier FEG-Hüllkurven, zwei LFOs, Sample-and-Hold, KEY, VELOCITY, AFTERTOUCH, PITCHBEND, MODWHEEL, CC 74, T-RAND (eine Zufallszahl pro Ton, für jede Stimme eigen) und vier Makros, die sich an MIDI-Controller binden lassen. Die FEG-Hüllkurven werden über Punkte gezeichnet: beliebig viele Punkte, der Loop läuft vorwärts oder als Pendel, und der Regler SCALE von 1/8 bis 8 beschleunigt oder verlangsamt die ganze Kurve. Die Tonhöhe folgt den Tasten über eine Route von KEY auf TUNE mit dem Wert 100, die in einer neuen Instanz schon eingerichtet ist.

**Wenn kein Ton kommt.** Der Parameter GLOBAL LEVEL arbeitet als Modulationsziel wie der Endverstärker: Mindestens eine Hüllkurve muss daran angeschlossen sein, standardmäßig ist das FEG 1. Stille kann auch von den zwei Filtern kommen, wenn sie so eingestellt sind, dass im seriellen Modus nichts übrig bleibt: Schalte sie auf parallel.

!!! success "Rezept 21.2. Der Löffel in der Tonart"

    1. Lade den Löffel. Hat Quanta den Grundton falsch bestimmt, korrigiere ROOT NOTE.
    2. POSITION auf das Klingen, LENGTH etwa 120 ms, GRAINS etwa 30, ENVELOPE auf Sine Squared: Diese Form klickt nicht.
    3. Schalte QUANT ein und lass nur die Töne deiner Tonleiter aktiv.
    4. Dreh RAND bei TUNE auf: Die Grains verteilen sich in der Tonhöhe, bleiben aber in deiner Tonleiter.
    5. Spiel einen Akkord.

## Was du lesen kannst

- **Curtis Roads, „Microsound“** (MIT Press, 2001). Das wichtigste Lehrbuch zu Granularsynthese und Mikroklang: Theorie, Geschichte, Methoden, Pulsar-Synthese.
- **Curtis Roads, „Introduction to Granular Synthesis“** (Computer Music Journal, 1988). Eine kurze Einführung ins Thema vom Autor von „Microsound“.
- **Chris Carlson, Ge Wang, „Borderlands: An Audiovisual Interface for Granular Synthesis“** (Konferenz NIME, 2012). Wie ein Granulator aufgebaut ist, in dem man die Grains auf dem Bildschirm sieht.
- **Iannis Xenakis, „Formalized Music“** (englische Ausgabe von 1971). Die Theorie, aus der die granulare Komposition hervorging.
- **Dennis Gabor, „Acoustical Quanta and the Theory of Hearing“** (Nature, 1947). Der Aufsatz, in dem Klang erstmals als Strom von Quanten beschrieben wird.
- **Barry Truax, Granular Synthesis** ([sfu.ca](https://www.sfu.ca/~truax/gran.html)). Ein kurzer Text vom Autor des ersten Echtzeit-Granulators.
- **Barry Truax, „Real-Time Granular Synthesis with a Digital Signal Processor“** (Computer Music Journal, 1988; [doi.org](https://doi.org/10.2307/3679938)) und **„Composing with Real-Time Granular Sound“** (Perspectives of New Music, 1990). Die Primärquellen zur ersten Granularsynthese in Echtzeit.
- **Joshua Batty, Kipps Horn, Stefan Greuter, „Audiovisual Granular Synthesis: Micro Relationships Between Sound and Image“** (Konferenz IE '13, ACM, 2013; [doi.org](https://doi.org/10.1145/2513002.2513568)). Granularsynthese von Klang und Video zugleich, das Instrument Kortex.
- **Curtis Roads, Jack Kilgore, Rodney DuPlessis, „Architecture for Real-Time Granular Synthesis With Per-Grain Processing: EmissionControl2“** (Computer Music Journal, 2021; [doi.org](https://doi.org/10.1162/comj_a_00613)). Wie ein moderner Granulator innen aufgebaut ist, und eine kurze Geschichte der Methode von Gabor bis heute.
- **Curtis Roads, „Path to Half Life“** ([curtisroads.net](https://www.curtisroads.net/s/04-Path-to-Half-Life.pdf)). Wie ein Komponist von den ersten Studien zur Musik aus Grains kam.
- **Robert Henke, die Seite zu Granulator III** ([roberthenke.com](https://www.roberthenke.com/technology/granulator3.html)). Eine vollständige Beschreibung des Instruments vom Autor.
- **Die Handbücher von Serum 2 und Pigments 7.** Vollständige Beschreibungen aller Parameter, aufrufbar aus den Menüs der Instrumente selbst.
- **Das Handbuch von Reason Studios, Abschnitt Grain Sample Manipulator** ([reasonstudios.com](https://reasonstudios.com/devices/grain)). Alle Parameter der vier Algorithmen und der Motion-Modi.
- **Das Handbuch von Quanta 2, Audio Damage** ([audiodamage.com](https://www.audiodamage.com/products/ad055-quanta-2)). Alle Regler des Granulators, Modulation, Stimmungseinstellungen und MPE.

## Statt eines Nachworts

Du hast das Buch mit drei Sekunden Löffelklingen begonnen und beendest es mit einer Karte, drei Instrumenten und zwanzig Rezepten. Aber die wertvollste Entdeckung liegt jenseits der Regler. Jeder Klang um dich herum ist jetzt Material: eine knarrende Tür, Regen auf der Fensterbank, die Stimme eines Freundes. Nimm heute etwas auf. Morgen wird daraus ein Instrument, das sonst niemand hat.
