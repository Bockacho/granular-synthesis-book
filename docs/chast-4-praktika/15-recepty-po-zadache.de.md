<p class="eyebrow">Kapitel 15</p>

# Rezepte nach Aufgabe

[Kapitel 14](14-recepty-po-istochniku.md) ging von der Quelle aus. Dieses geht vom Track aus: Du brauchst ein Pad, einen Bass oder einen Übergang und musst wissen, wo du drehen sollst. Die Tabelle unten dient als Spickzettel, die Zone ist nach der Karte aus [Kapitel 13](../chast-4-praktika/13-karta-zvuka.md) angegeben.

| Aufgabe | Zone auf der Karte | Hauptregler | Modulation | Nach dem Granulator |
| --- | --- | --- | --- | --- |
| Pad | Wolke | Grain 80–200 ms, dichte Wolke, Glockenfenster, Positions- und Tonhöhenstreuung ein wenig | ein langsamer LFO auf der Position, ein langer Lautstärke-Attack | Chorus oder Hall |
| Drone | Wolke oder Wand | Einfrieren, lange Grains 200–500 ms, Tonhöhen-Tracking über die Tasten auf null | ein sehr langsamer LFO auf Position und Filter | langer Hall, Sättigung |
| Hintergrundschicht, Ambient | Wand | lange Grains, hohe Dichte, starke Positionsstreuung | ein zufälliger LFO auf der Position | Hochpassfilter, Hall |
| Rhythmus, Glitch | Zerschneiden, Tropfen | Dichte und Länge tempogebunden, rückwärts laufende Grains, ein gestufter Zufalls-LFO auf der Position | Automation der Grain-Umkehrung | Kompressor, Sidechain |
| Perkussion | Klicks, Tropfen | Position auf dem Anschlag, Grain 5–30 ms, perkussives Fenster, tempogebundene Dichte | eine Hüllkurve auf Länge und Form des Grains | Filter, Transient Shaper |
| Bass | Wolke, Tiefen | Transposition 2–3 Oktaven nach unten, langes Grain, mono, Glide | eine Hüllkurve auf dem Filter | Tiefpassfilter, Sättigung |
| Vocal Chops | Zerschneiden | Sprache oder Gesang, Position an die Tasten gekoppelt, mono mit Glide | eine Hüllkurve auf Form und Länge des Grains | Hall, Delay |
| Riser | von Tropfen zur Wand | die Dichte wächst, das Grain schrumpft, die Tonhöhe steigt | ein Makro oder Automation über 4–8 Takte | das Filter öffnet sich, der Hall wächst |
| Abstieg nach dem Höhepunkt | von der Wand zu Tropfen | alles umgekehrt: die Dichte sinkt, das Grain wächst, die Tonhöhe fällt | dasselbe Makro in Gegenrichtung | der Hall verklingt |
| Standbild | Wolke | im richtigen Moment Scan auf null, der Klang erstarrt an der aktuellen Stelle | Automation des Scans | nichts: der Effekt liegt im Anhalten selbst |
| Granulare Verzierung | Zerschneiden, Wolke | ein Granulator als Effekt direkt auf der Spur (Schlagzeug, Gesang, Gitarre), Leseposition und Grain-Länge tempogebunden | Automation von Dichte, Fensterform, Richtung und Mix | Hall nach Geschmack: der Klang legt sich wie ein lebendiges Delay über das Original |

## Fünf Fragen vor dem ersten Regler

Steht die Aufgabe nicht in der Tabelle, helfen Fragen. Beantworte sie der Reihe nach, und die meisten Regler fallen von selbst an ihren Platz.

1. **Soll der Klang eine Tonhöhe halten?** Ja: Achte auf das Keyboard-Tracking und die Stimmung der Quelle. Nein: Stell das Tonhöhen-Tracking auf null.
2. **Ist der Klang rhythmisch?** Ja: Dichte und Länge tempogebunden, die Zone Zerschneiden oder Tropfen. Nein: eine Wolke.
3. **Soll die Quelle erkennbar sein?** Ja: Grains länger als 30–50 ms und kleine Streuungen. Nein: kurze Grains, starke Streuungen.
4. **Bewegt sich der Klang von selbst, oder wird er gespielt?** Von selbst: LFOs und Hüllkurven ([Kapitel 9](../chast-2-parametry/09-modulyaciya.md)). Gespielt: ein Makro, das Modulationsrad, MPE.
5. **Wo sitzt er im Mix?** Unten: Schneide die Höhen ab und mach das Stereo schmaler. Oben: Schneide die Tiefen ab, mach das Stereo breiter. Im Zentrum der Aufmerksamkeit: Halte die Streuungen kleiner, damit der Klang kompakt bleibt.

## Das Standbild im Detail

Diesen Trick gibt es bei normalen Samplern nicht, und er macht einen Track leicht unvergesslich. Der Klang läuft wie gewohnt, der Scan in Originalgeschwindigkeit, und in einem Moment fällt der Scan auf null. Der Klang bricht nicht ab: Er erstarrt an der Stelle, an der er war, und klingt weiter wie ein angehaltenes Filmbild. Einen Takt später kehrt der Scan zurück, und der Klang läuft weiter.

In Serum ist das eine Automation von SCAN, in Granulator III eine Automation von Scan, in Pigments der Regler Scan auf 12 Uhr gestellt. Damit das Standbild nicht mechanisch brummt, behalte eine kleine Positionsstreuung bei.

## Übung 15.1. Ein Track aus einem Löffel { .exercise }

1. Nimm fünf Zeilen der Tabelle: Pad, Bass, Perkussion, Riser, Standbild.
2. Bau sie aus dem Löffel auf fünf Spuren.
3. Spiel sechzehn Takte: Pad und Bass halten die Harmonie, die Perkussion den Rhythmus, der Riser führt zum Standbild im letzten Takt.
4. Hör es dir an und frag dich: Würdest du den Löffel in diesem Track erkennen, wenn du es nicht wüsstest?
