<p class="eyebrow">Kapitel 9</p>

# Modulation: ein Klang, der von selbst lebt

<figure markdown="span">
  ![Modulation steuert eine Wolke aus Grains](../images/9-1.png)
  <figcaption>Illustration 9.1. Ein LFO bewegt den Grain-Strom.</figcaption>
</figure>

Wenn alle Regler stillstehen, klingt die Wolke schön, aber statisch, wie ein Foto. Modulation bewegt die Regler selbst, ohne deine Hände, und aus dem Foto wird ein Film. In der Granularsynthese ist Modulation besonders wichtig: Die Grains sind im Kleinen ohnehin zufällig, und die Modulation gibt ihnen Bewegung im Großen.

## Modulationsquellen

**LFO, Niederfrequenzoszillator.** Bewegt einen Parameter hin und her, immer wieder. Die wichtigsten Einstellungen: Geschwindigkeit (in Hertz oder in Notenwerten), Form (Sinus, Dreieck, Sägezahn, Rechteck, zufällige Stufen), Tiefe.

- Ein langsamer Sinus auf der Position (0,05–0,2 Hz) lässt die Wolke durch die Datei driften, und der Klang ändert sich alle paar Sekunden.
- Zufällige Stufen (Sample & Hold) auf der Position, im Takt der Viertel: Auf jeden Schlag kommen die Grains von einer neuen Stelle. Ein fertiges rhythmisches Zerschneiden.
- Ein schneller LFO auf der Grain-Tonhöhe (5–7 Hz, Tiefe 20–50 Cent) ergibt ein Vibrato.

**Hüllkurve, ADSR.** Ändert einen Parameter einmal pro Ton: vom Drücken bis zum Loslassen.

- Eine Hüllkurve auf der Position: Jeder Ton beginnt mit dem Anschlag des Löffels und gleitet ins Klingen. Der Klang läuft ab wie ein Sample, aber mit granularem Charakter.
- Eine Hüllkurve auf der Größe: Am Anfang des Tons sind die Grains kurz und klicken, zum Ende hin lang und glatt. Ein knuspriger Anschlag, ein weiches Ausklingen.
- Eine Hüllkurve auf der Dichte: Die Wolke flammt mit dem Ton auf und erlischt mit ihm.

**Spiel.** Parameter, die du beim Spielen mit den Händen steuerst:

- **Anschlagstärke (Velocity).** Je härter du anschlägst, desto größer die Positionsstreuung. Leise Töne sind sauber, laute zerfallen.
- **Modulationsrad.** Die häufigste Zuweisung bei einem Granulator: Grain-Größe oder Streuung. Eine Hand spielt, die andere dreht die Wolke.
- **Aftertouch und MPE.** Drück fester auf die Taste, und die Wolke öffnet sich.
- **Notennummer (Keytrack).** Hohe Töne bekommen kurze Grains, tiefe lange. So klingt es über die ganze Tastatur gleichmäßiger.

**Zufall pro Ton.** Ein neuer Zufallswert bei jedem Tastendruck. Zum Beispiel eine zufällige Startposition: Jeder Ton beginnt an einer eigenen Stelle der Datei, und selbst eine wiederholte Stimme klingt nie zweimal gleich.

## Tiefe und Polarität

Jede Verbindung „Quelle → Parameter“ hat eine Tiefe: wie weit die Modulation den Regler bewegt. Und ein Vorzeichen: Plus bewegt ihn in die eine Richtung, Minus in die andere. Die Tiefe ist wichtiger als die Geschwindigkeit. Fang mit wenig Tiefe an und erhöhe sie, bis du Bewegung hörst, dann nimm ein wenig zurück. Der häufigste Anfängerfehler: Modulation voll aufgedreht, und der Klang wird zum Karussell.

## Parameterkopplungen

Die ausdrucksstärksten Klänge entstehen, wenn ein Regler mehrere Parameter gleichzeitig bewegt, manchmal in entgegengesetzte Richtungen. Dafür gibt es Makros.

**So heißt es:** Macro, Quick Control, Performance Control, Morph.

| Kopplung | Was sie bewirkt |
| --- | --- |
| Größe runter + Dichte rauf | die Wolke wird feiner und dichter, ohne in Löcher zu fallen |
| Positionsstreuung rauf + Tonhöhenstreuung rauf | die Quelle löst sich im Nebel auf |
| Position entlang der Datei + Filterhelligkeit | der Klang „erwacht“ zum Ende der Datei hin |
| Dichte runter + Hall rauf | Tropfen fallen in eine leere große Halle |
| Scan runter + Größe rauf | die Zeit erstarrt, der Klang wird zu einem langen Pad |

Bau dir an einem Abend ein solches Makro „Ton → Wolke“ und spiel es wie einen Fader. Auf der Bühne ist es der Hauptregler des ganzen Instruments.

## Modulation oder Automation

Interne Modulation erledigt der Synthesizer selbst, und sie wiederholt sich bei jedem Ton. Automation in der DAW wird entlang der Zeitachse des Tracks gezeichnet: Zum Beispiel wächst die Streuung langsam über die ganze zweite Strophe. Nutze beides: Modulation gibt jedem Ton Leben, Automation gibt dem ganzen Track Form.

??? info "Unter der Haube"

    Eine Modulation der Position mit einem LFO im Audiobereich (über 20 Hz) hört auf, Bewegung zu sein, und wird zur Klangfarbe: Die Position schwingt so schnell, dass die Grains den Klang mit einer Frequenzmodulation im Inneren lesen. Dasselbe gilt für die Grain-Tonhöhe: Ein LFO im Audiobereich auf der Tonhöhe erzeugt Seitenbänder wie in der FM-Synthese. Nicht alle Instrumente lassen den LFO so schnell laufen, aber wo es geht, entstehen aus jeder Quelle metallische und glockenartige Klangfarben.

??? info "Unter der Haube"

    In einem Granulator wirkt Modulation fast immer auf Grains, die noch nicht entstanden sind. Die Reglerwerte werden im Moment der Entstehung eines Grains gelesen, und danach spielt das Grain mit ihnen bis zum Ende. Roads nennt das Grain-Integrität (grain integrity): In EmissionControl2 ändert ein ausgelöstes Grain weder Filter noch Panorama noch seine Stelle in der Datei, und das schützt vor Klicks ([Roads et al., 2021](https://doi.org/10.1162/comj_a_00613)). Das Handbuch von Kaivo sagt dasselbe, und Granulator III berechnet so die Fensterform ([Kapitel 11](../chast-3-instrumenty/11-granulator-iii.md)). Deshalb klingt eine schnelle Modulation bei langen Grains nicht wie eine gleitende Verschiebung, sondern wie ein Schauer von Grains mit unterschiedlichen Werten.

## Übung 9.1. Ein atmendes Pad { .exercise }

1. Der Löffel, Position im Klingen, Größe 120 ms, Dichte 30, Positionsstreuung 30 ms, Tonhöhenstreuung 10 Cent, Panorama 50 %.
2. Leg einen langsamen Sinus-LFO (0,1 Hz) auf die Position, mit einer Tiefe, bei der die Position durch das ganze Klingen wandert.
3. Leg eine Hüllkurve auf die Dichte: Attack 2 Sekunden, Release 4 Sekunden.
4. Weise das Modulationsrad der Grain-Größe zu, negativ: Du drehst das Rad, und die Grains werden feiner.
5. Spiel einen langen Akkord und spiel mit dem Rad. Das ist das erste fertige Granularinstrument aus einem Löffel.
