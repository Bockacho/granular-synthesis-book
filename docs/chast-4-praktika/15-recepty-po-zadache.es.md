<p class="eyebrow">Capítulo 15</p>

# Recetas por tarea

El [capítulo 14](14-recepty-po-istochniku.md) partía de la fuente. Este parte del tema: necesitas un pad, un bajo o una transición, y hay que saber qué mando girar. La tabla de abajo funciona como chuleta; la zona se indica según el mapa del [capítulo 13](../chast-4-praktika/13-karta-zvuka.md).

| Tarea | Zona del mapa | Mandos principales | Modulación | Después del granulador |
| --- | --- | --- | --- | --- |
| Pad | nube | grano de 80–200 ms, nube densa, ventana de campana, un poco de dispersión de posición y de altura | un LFO lento en la posición, un ataque de volumen largo | chorus o reverb |
| Drone | nube o muro | congelación, granos largos de 200–500 ms, seguimiento de altura por teclas a cero | un LFO muy lento en la posición y en el filtro | reverb larga, saturación |
| Capa de fondo, ambient | muro | granos largos, densidad alta, mucha dispersión de posición | un LFO aleatorio en la posición | filtro paso alto, reverb |
| Ritmo, glitch | troceado, gotas | densidad y duración por tempo, granos invertidos, un LFO aleatorio escalonado en la posición | automatización de la inversión de los granos | compresor, sidechain |
| Percusión | clics, gotas | posición en el ataque, grano de 5–30 ms, ventana percusiva, densidad por tempo | una envolvente en la duración y la forma del grano | filtro, transient shaper |
| Bajo | nube, graves | transposición de 2–3 octavas hacia abajo, grano largo, mono, glide | una envolvente en el filtro | filtro paso bajo, saturación |
| Vocal chops | troceado | habla o canto, posición ligada a las teclas, mono con glide | una envolvente en la forma y la duración del grano | reverb, delay |
| Riser | de las gotas al muro | la densidad crece, el grano se acorta, la altura sube | una macro o automatización en 4–8 compases | el filtro se abre, la reverb crece |
| Caída tras el clímax | del muro a las gotas | todo al revés: la densidad baja, el grano crece, la altura baja | la misma macro en sentido contrario | la reverb se apaga |
| Fotograma congelado | nube | en el momento justo, el escaneo a cero: el sonido se detiene en el punto actual | automatización del escaneo | nada: el efecto está en la propia parada |
| Adorno granular | troceado, nube | un granulador como efecto directamente en la pista (batería, voz, guitarra), posición de lectura y duración del grano por tempo | automatización de la densidad, la forma de la ventana, la dirección y la mezcla | reverb al gusto: el sonido se superpone al original, como un delay vivo |

## Cinco preguntas antes del primer mando

Cuando la tarea no está en la tabla, ayudan las preguntas. Respóndelas por orden y la mayoría de los mandos se colocarán solos.

1. **¿El sonido debe mantener una altura?** Sí: vigila el seguimiento de teclado y la afinación de la fuente. No: pon a cero el seguimiento de altura.
2. **¿El sonido es rítmico?** Sí: densidad y duración por tempo, la zona del troceado o de las gotas. No: una nube.
3. **¿La fuente debe reconocerse?** Sí: granos de más de 30–50 ms y dispersiones pequeñas. No: granos cortos, dispersiones grandes.
4. **¿El sonido se mueve solo o se toca?** Solo: LFO y envolventes ([capítulo 9](../chast-2-parametry/09-modulyaciya.md)). Se toca: una macro, la rueda de modulación, MPE.
5. **¿Dónde está en la mezcla?** Abajo: corta los agudos y estrecha el estéreo. Arriba: corta los graves, ensancha el estéreo. En el centro de la atención: mantén las dispersiones más bajas para que el sonido esté compacto.

## El fotograma congelado en detalle

Este truco no existe en los samplers normales, y hace memorable un tema con facilidad. El sonido avanza como siempre, el escaneo a la velocidad original, y en un momento dado el escaneo cae a cero. El sonido no se corta: se queda congelado en el punto donde estaba y sigue sonando, como un fotograma en pausa. Un compás después el escaneo vuelve, y el sonido sigue avanzando.

En Serum es una automatización de SCAN; en Granulator III, una automatización de Scan; en Pigments, el mando Scan llevado a las 12. Para que el fotograma congelado no zumbe de forma mecánica, mantén una pequeña dispersión de posición.

## Ejercicio 15.1. Un tema de una sola cucharilla { .exercise }

1. Toma cinco filas de la tabla: pad, bajo, percusión, riser, fotograma congelado.
2. Móntalas a partir de la cucharilla en cinco pistas.
3. Toca dieciséis compases: el pad y el bajo sostienen la armonía, la percusión el ritmo, y el riser lleva al fotograma congelado en el último compás.
4. Escucha y pregúntate: ¿reconocerías la cucharilla en este tema si no lo supieras?
