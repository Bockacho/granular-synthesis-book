<p class="eyebrow">Kapitel 18</p>

# Typische Fehler

Fast alle Probleme mit einem Granulator lassen sich auf etwa fünfzehn Symptome zurückführen. Such deins in der linken Spalte.

| Symptom | Ursache | Was tun | Kapitel |
| --- | --- | --- | --- |
| Klicks und Knistern | das Fenster ist zu hart, die Grain-Ränder reißen ab; die Sample-Marker liegen nicht auf Nulldurchgängen | Glockenfenster oder mehr Glättung; Marker an null einrasten, Fades an den Sample-Rändern | 1, 5, 10, 12 |
| Mechanisches Brummen beim Einfrieren | alle Grains sind gleich, der Strom ist periodisch geworden | Positionsstreuung 5–30 ms | 4 |
| Die Wolke fällt in Löcher | die Überlappung ist kleiner als eins; Grains werden aus der Stille genommen | Dichte oder Grain-Länge erhöhen; ein Lesefenster ohne Stille | 2, 4 |
| Brei in den Tiefen | eine dichte Wolke sammelt Brummen an | Hochpassfilter; niedrigere Dichte; Filter auf dem Sample vor dem Granulator | 14, 16 |
| Die Lautstärke springt, der Ausgang übersteuert | die Lautstärke wächst mit der Dichte | Gesamtlautstärke runter, Limiter am Ausgang, Streuungen zur Dekorrelation | 6, 16 |
| Der Klang ist verstimmt | der Grundton des Samples ist nicht C | Ton mit dem Stimmgerät ermitteln, Transposition oder Root Note anpassen | 10, 11, 12 |
| Die Stimme ist zur Mickymaus geworden | die Grain-Transposition verschiebt die Formanten | den Ton über die Grain-Rate festlegen; eine Quelle in der passenden Tonart nehmen | 6, 7, 14 |
| Die Quelle ist nicht zu erkennen, soll es aber sein | die Grains sind zu kurz, die Streuungen groß | Grain länger als 30–50 ms, kleinere Streuungen | 5, 13 |
| Die Quelle ist zu erkennen, soll es aber nicht | die Grains sind lang, es gibt keine Streuungen | kürzeres Grain, mehr Positions- und Tonhöhenstreuung | 5, 13 |
| Eine breite Wolke verschwindet in Mono | Grain-Panorama auf Maximum | Breite reduzieren, Mono am Master prüfen | 8 |
| Der Prozessor knistert | zu viele Grains: Dichte × Unison × Polyphonie | Grain-Limit, weniger Stimmen, zu Audio rendern | 10, 12, 16 |
| Der Rhythmus ist verrutscht | Länge und Dichte sind nicht ans Tempo gekoppelt; die Transposition ändert die Grain-Länge | tempogebundene Modi; Länge als Bruchteil der Periode; die Rechnung 60.000 / BPM | 10, 11, 12 |
| Alles klingt gleich und flach | Streuungen auf null, keine Modulation | Streuungen einzeln, ein langsamer LFO auf der Position | 8, 9 |
| Der aufgenommene Klang ist weg | die Aufnahme in Granulator III wurde nicht gespeichert | die Taste Save nach einer gelungenen Aufnahme | 11 |

## Die Reihenfolge der Fehlersuche

Wenn unklar ist, woran es liegt, geh von oben nach unten vor. Stell zuerst alle Streuungen und Modulationen auf null. Prüf dann die Quelle: Hör sie dir ohne Granulator an. Bring danach Grain-Länge und Dichte in die Mitte der Wolke auf der Karte zurück (100 ms, 30 Grains pro Sekunde). Klingt es an diesem Punkt normal, stell die Regler einen nach dem anderen wieder auf ihre vorherigen Werte, bis das Problem auftaucht. Der Regler, mit dem es zurückkam, ist der Schuldige.
