<p class="eyebrow">Capítulo 20</p>

# Glosario

Los nombres en inglés se dan tal como aparecen con más frecuencia en las interfaces y los manuales. En un instrumento concreto el nombre del mando puede variar: mira las tablas «Dónde están los parámetros de la [parte 2](../chast-2-parametry/index.md)» de los capítulos 10–12.

| Término | En inglés | Qué significa | Capítulo |
| --- | --- | --- | --- |
| Altura del grano, transposición | pitch, transpose | la altura del grano; cambia con la velocidad de lectura y mueve también los formantes | 7 |
| Búfer | buffer | una zona de memoria donde el granulador graba el sonido en vivo para leer granos de ella | 4, 11, 16 |
| Captura | capture, grab | grabar sonido en vivo en el granulador como un sample nuevo | 11, 16 |
| Congelación | freeze | la posición está quieta y el sonido en ese punto se prolonga sin fin | 4 |
| Cuantización de altura | pitch quantization, quant | ajustar la altura de cada grano a un conjunto de notas dado | 7 |
| Densidad | density, rate | cuántos granos nacen por segundo | 6 |
| Dispersión | spray, jitter, variation, random | una desviación aleatoria de un parámetro en cada grano | 4, 7, 8 |
| Envolvente del grano, ventana | window, grain envelope, shape | la forma del volumen de cada grano; quita los clics y colorea el sonido | 1, 5 |
| Escaneo | scan | el movimiento automático de la posición por el archivo a una velocidad dada | 4 |
| FOF | Fonctions d'Onde Formantique | la síntesis de formantes de Xavier Rodet en el IRCAM, emparentada con la granular síncrona | 2, 6 |
| Flujo asíncrono | asynchronous | los granos nacen a intervalos aleatorios; no hay tono, hay una nube | 2, 6 |
| Flujo casi síncrono | quasi-synchronous | intervalos regulares con una pequeña dispersión aleatoria | 2 |
| Flujo síncrono | synchronous | los granos llegan a intervalos iguales; por encima de 20 por segundo nace un tono | 2, 6 |
| Formante | formant | una subida en el espectro que da color al sonido, por ejemplo una vocal | 6, 7 |
| Grano | grain | un trozo corto de sonido, normalmente de 1–100 ms, con un comienzo y un final suaves | 1, 2 |
| Inclinación de la ventana | skew | desplazar el pico de la envolvente hacia el principio o el final del grano | 5 |
| Integridad del grano | grain integrity | un grano ya lanzado suena hasta el final con los parámetros con los que nació | 9 |
| Intermitencia | intermittency | la probabilidad de que el siguiente grano no nazca; aclara el flujo sin cambiar la densidad | 6 |
| Inversión de granos | reverse, direction | la proporción de granos que suenan al revés | 7 |
| Límite de granos | max grains, limit | el techo de granos que suenan a la vez; la principal forma de ahorrar procesador | 8, 16 |
| Macro | macro | un solo mando que mueve varios parámetros a la vez | 9, 16 |
| Máscara de tendencia | tendency mask | límites dentro de los que un parámetro se elige al azar; los propios límites se mueven suavemente en el tiempo | 3 |
| Modulación a frecuencia de audio | audio-rate modulation | un LFO más rápido de 20 Hz: el movimiento se convierte en timbre | 9 |
| MPE | MIDI Polyphonic Expression | controlar cada nota por separado: con la presión, el deslizamiento, la inclinación | 8, 16 |
| Nube | cloud | muchos granos solapados que suenan como un solo sonido | 1, 2, 13 |
| Panorama, anchura | spread, width, pan random | el reparto de los granos por el panorama estéreo | 8 |
| Posición | position, start | el lugar del archivo de donde se toma un grano | 4 |
| Principio de incertidumbre | uncertainty principle | cuanto más corto es el sonido, más ancho es su espectro; por eso los granos cortos suenan más ruidosos | 3, 5 |
| Seguimiento de teclado | key tracking, key | la dependencia de un parámetro del número de la nota tocada | 9, 11 |
| Síntesis pulsar | pulsar synthesis | el método de Curtis Roads: la frecuencia de los granos fija la nota, y su contenido, el color | 2, 6 |
| Solapamiento | overlap | cuántos granos suenan a la vez de media: duración × densidad | 2, 13 |
| Tamaño del grano | grain size, length | la duración de un grano | 5 |
| Ventana de lectura | start/end, trim, region | el tramo del archivo por el que se mueve la posición | 4 |
