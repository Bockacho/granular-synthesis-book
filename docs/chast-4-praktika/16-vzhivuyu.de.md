<p class="eyebrow">Kapitel 16</p>

# Granular live

Auf der Bühne hört der Granulator auf, eine Bearbeitung zu sein, und wird zum Instrument. Ein Ton hält die Wolke, und die Hände bewegen Zeit, Dichte und Körnigkeit. Damit das funktioniert, braucht es drei Dinge: bequeme Steuerung, Reserven beim Prozessor und ein Sicherheitsnetz gegen Überraschungen.

## Steuerung: weniger Regler, mehr Sinn

Zwanzig Regler kannst du auf der Bühne nicht drehen. Stell dir zwei oder drei Hauptregler zusammen.

- **Das Hauptmakro.** Genau das „Ton → Wolke“ aus [Kapitel 9](../chast-2-parametry/09-modulyaciya.md): Ein Regler bewegt gleichzeitig Grain-Länge, Positionsstreuung und Filter. Leg es auf einen physischen Controller. In Serum weist du ein Makro zu und verknüpfst es über MIDI Learn im Kontextmenü des Reglers. In Pigments lernen die vier Makros M1–M4 ebenfalls vom Controller. In Live lässt sich jeder Regler von Granulator III per Standard-Mapping an einen Controller binden.
- **Die Position griffbereit.** Das X|Y-Pad in Serum ([Kapitel 10](../chast-3-instrumenty/10-serum-2.md)) oder Position auf einem eigenen Drehregler. Die Bewegung durch die Datei ist die ausdrucksstärkste Handlung beim Granularspiel.
- **Halten.** Hold in Granulator III hält einen Akkord nach dem Loslassen der Tasten: Beide Hände sind frei für die Regler.
- **MPE.** Granulator III unterstützt MPE vollständig, Pigments ebenfalls. Mit einem MPE-Controller steuert jeder Finger seine eigene Wolke: Mit Druck öffnest du die Streuung, mit Gleiten bewegst du die Position.

## Live-Eingang

Der stärkste Bühnentrick: einen Klang granulieren, der gerade erst entsteht. Von den drei Instrumenten des Buchs kann das Granulator III (Capture, [Kapitel 11](../chast-3-instrumenty/11-granulator-iii.md)). Eine Stimme, eine Gitarre, ein Hardware-Synth, der Klang des Raums über ein Mikrofon: Alles wird mit einem Tastendruck zur Quelle. Gekoppelt mit einem LFO auf der Taste Capture wird der Granulator zu einer Maschine, die ihr Material alle paar Takte selbst erneuert.

In Hardware liefern Module wie Mutable Instruments Clouds und Make Noise Morphagene live granularen Klang ([Kapitel 3](../chast-1-zerno/03-istoriya.md)). Das Prinzip ist dasselbe: Ein Puffer nimmt den Eingang auf, die Grains lesen den Puffer. Zu den neueren gehören Beads, der Nachfolger von Clouds, und Instruō Arbhar mit einem Mikrofon direkt auf der Frontplatte, für Gitarristen Pedale wie Hologram Microcosm und Red Panda Particle 2. Der Desktop-Synth Tasty Chips GR-1 spielt sowohl als Synthesizer als auch als Drone-Maschine.

Innen ist ein Live-Granulator wie eine Delay-Linie aufgebaut: Der Eingang wird ständig in einen kurzen Ringpuffer geschrieben, und die Grains lesen ihn mit unterschiedlicher Verzögerung. Führst du einen Teil des Ausgangs in den Puffer zurück (Rückkopplung, Feedback), beginnen die Grains, sich selbst zu granulieren, und die Wolke wächst in Schichten wie ein Echo. Truax hat eine solche Rückkopplung schon in sein System aus den 1980er-Jahren eingebaut ([Truax, 1988](https://doi.org/10.2307/3679938)). Bearbeitetes und trockenes Signal hält man besser auf zwei getrennten Reglern als auf einem Mix-Regler: Dann lebt der granulierte Klang als eigenständige Stimme. So war der Stanford-Prototyp GrainProc (2013) aufgebaut: Ein Gitarrist bediente diese Regler auf einem Tablet mit den Zehen ([NIME 2013](https://www.nime.org/proceedings/2013/nime2013_99.pdf)).

## Der Prozessor

Ein Granulator braucht mehr Rechenleistung als ein normaler Synthesizer, das Handbuch von Serum 2 sagt es direkt. Auf der Bühne klingt eine Prozessorüberlastung wie Knistern, und man verwechselt sie mit nichts.

- **Grain-Limit.** Max Grains in Serum, Limit in Pigments, Density im Modus Cloud bei Granulator III. Setz die Obergrenze mit Reserve.
- **Unison und Polyphonie.** Sie vervielfachen die Zahl der Grains. Auf der Bühne reichen oft drei oder vier Stimmen statt acht.
- **Überflüssige Bearbeitung.** Das Filter von Granulator III lässt sich abschalten und spart Prozessorleistung, Henke schreibt das ausdrücklich.
- **Zu Audio einfrieren.** Alles, was du nicht live drehen musst, wandle vorher in Audiodateien um. Die Hintergrundschicht kann als Aufnahme laufen, und live bleibt nur ein Granulator.
- **Der Puffer des Audiointerfaces.** Ein größerer Puffer gibt dem Prozessor mehr Reserve, kostet aber Latenz. Bei Wolken und Drones stört eine Verzögerung von 10–20 ms kaum.

## Sicherheitsnetz

- **Ein Limiter am Ausgang.** Die Dichte hebt die Lautstärke ([Kapitel 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md)), und auf der Bühne passiert das leicht aus Versehen. Ein Limiter fängt die Sprünge ab, bevor das Publikum sie hört.
- **Ein Hochpassfilter.** Eine dichte Wolke sammelt Brummen an. Ein Schnitt unter 30–40 Hz ist kaum zu hören, schont aber die Lautsprecher und die Lautstärkereserve.
- **Ein Rückkehrpunkt.** Stell das Hauptmakro so ein, dass in der Nullstellung ein sicherer, erprobter Klang ertönt. Im Rauschen verloren? Makro auf null.
- **Aufnahme mit Absicherung.** Granulator III normalisiert den aufgenommenen Klang auf 0 dB: Ein leises Rascheln kann plötzlich laut klingen. Halte die Spurlautstärke niedriger, bis du die Aufnahme gehört hast.
- **Mono-Check.** Im Saal klingt es oft eher nach Mono als im Kopfhörer. Prüf die breitesten Wolken vorher in Mono ([Kapitel 8](../chast-2-parametry/08-prostranstvo-i-golosa.md)).

## Zeig dem Publikum die Grains

Die Autoren des Granulators Borderlands haben eine Schwachstelle granularer Auftritte bemerkt: Alles, was der Musiker tut, ist hinter dem Laptop-Bildschirm verborgen, und das Publikum sieht keinen Zusammenhang zwischen Handbewegung und Klang. Ihre Lösung: die Oberfläche selbst zeigen. In Borderlands liegen die Klangdateien als Rechtecke auf dem Bildschirm, Grain-Wolken werden mit der Maus über sie bewegt, und jedes Grain blitzt im Moment seiner Entstehung auf.

Wenn dein Granulator etwas zeichnet, etwa das X|Y-Pad in Serum 2 oder eine Wellenform mit wandernder Position, leg es auf einen Projektor. Das Publikum beginnt zu hören, was es sieht.

## Zustände und Übergänge

Innerhalb einer Szene (zu Szenen mehr im nächsten Abschnitt) denkt man am besten in Zuständen. Ein Zustand ist eine Momentaufnahme aller Regler auf einmal: zum Beispiel „vereinzelte Tropfen“ und „dichte Wand“. Gespielt werden kann der Übergang vom einen zum anderen. So arbeitete schon Truax: Bei ihm konnte eine Tendenzmaske ein gleitender Übergang von einem Preset zum anderen sein ([Kapitel 3](../chast-1-zerno/03-istoriya.md)). Und 2013 wurde dasselbe Prinzip zur Grundlage des audiovisuellen Granulators Kortex: Dort lässt sich ein ganzer Zustand speichern und gleitend in einen anderen überführen.

Den Charakter eines Übergangs bestimmt seine Form. Ein gleichmäßiger, linearer Übergang klingt mechanisch. Ein Übergang mit Beschleunigung oder Abbremsen klingt natürlicher, und einer mit Rückprall erzeugt ein Gefühl von Physik, als sei der Klang elastisch zurückgefedert.

In Serum 2 und Pigments baut man das mit einem Makro, in Live mit einem Makro eines Instrument Racks, in dem Granulator III liegt: Eigene Makros hat er nicht. Stell es so ein, dass bei null der erste Zustand klingt und bei Maximum der zweite, und dreh. Die Form des Übergangs bestimmt deine Hand oder eine Automationskurve: am Anfang langsam und am Ende schnell oder umgekehrt.

## Wie man einen Auftritt aufbaut

Ein Granular-Set denkt man am besten in Szenen. Eine Szene: eine Quelle, eine Einstellung, ein Hauptregler. Übergänge zwischen Szenen liefern die Tricks aus [Kapitel 15](../chast-4-praktika/15-recepty-po-zadache.md): das Standbild, der Abstieg nach dem Höhepunkt, der Riser. Innerhalb einer Szene lebt der Klang durch Modulation, und du fügst nur die großen Bewegungen hinzu.

## Übung 16.1. Zehn Minuten mit einem Regler { .exercise }

1. Wähl eine Quelle und bau eine Wolke.
2. Leg das Hauptmakro auf einen physischen Regler: Grain-Länge, Positionsstreuung und Filter.
3. Schalte die Aufnahme ein und improvisiere zehn Minuten lang, wobei du nur diesen Regler und die Position anfasst.
4. Hör dir die Aufnahme am nächsten Tag an. Markiere die spannenden Momente und notier, wo die Regler standen. Das sind die Bausteine für ein echtes Set.
