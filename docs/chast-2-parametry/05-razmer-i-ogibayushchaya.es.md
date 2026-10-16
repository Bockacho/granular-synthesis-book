<p class="eyebrow">Capítulo 5</p>

# Tamaño del grano y envolvente

<figure markdown="span">
  ![Granos de distintos tamaños y formas de envolvente](../images/5-1.png)
  <figcaption>Ilustración 5.1. Formas de la ventana del grano.</figcaption>
</figure>

## Tamaño

El tamaño dice cuánto dura cada grano. Es el segundo mando principal después de la posición, y decide si reconoces la fuente.

**Cómo se llama:** Size, Length, Duration, Grain Size, Window Size.

El tamaño se fija de tres maneras, y conviene saber cuál usa tu instrumento:

- **En milisegundos.** La opción más habitual. 50 ms siguen siendo 50 ms en cualquier nota.
- **En fracciones de compás.** El tamaño está ligado al tempo del proyecto: 1/16, 1/32. Útil para troceados rítmicos.
- **Respecto a la altura.** El tamaño se cuenta en periodos de la nota que suena, y en las notas agudas los granos se acortan solos. Así funcionan los motores en los que los granos dan un tono ([capítulo 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md)).

Qué pasa cuando bajas el tamaño de 500 ms a 1 ms:

1. **500–100 ms.** Se oyen trozos de la fuente; la cucharilla se reconoce entera, con su ataque.
2. **100–30 ms.** El ataque se difumina y quedan el tono y el color. La zona de los pads bonitos.
3. **30–10 ms.** La fuente apenas se reconoce, el sonido se vuelve granuloso y áspero.
4. **10–1 ms.** El timbre de la fuente desaparece; quedan clics, zumbidos, siseos. En un flujo síncrono aquí nacen timbres nuevos.

El tamaño y la densidad trabajan en pareja (la fórmula del solapamiento está en el [capítulo 2](../chast-1-zerno/02-anatomiya-zerna.md)). Reduce el tamaño sin tocar la densidad y la nube se aclara y aparecen agujeros. Para que siga lisa, sube la densidad cuando los granos son cortos.

??? info "Bajo el capó"

    Un grano corto suena más ancho que uno largo por el principio de incertidumbre: la duración de una señal y la anchura de su espectro son inversamente proporcionales. Un grano de 2 ms cortado de un tono puro de 440 Hz contiene menos de un periodo de ese tono, y el espectro se esparce por miles de hercios. Un grano de 100 ms contiene 44 periodos, y el espectro sigue siendo un pico estrecho en 440 Hz.

## Envolvente del grano

La envolvente decide cómo cambia el volumen del grano de principio a fin. Ya sabes para qué sirve: quitar los clics. Pero la forma de la envolvente también influye mucho en el sonido.

**Cómo se llama:** Window, Envelope, Shape, Grain Env, Smoothness, Contour.

| Forma | Cómo es | Cómo suena |
| --- | --- | --- |
| Campana (Hann) | subida suave, bajada suave | suave, sin clics; la forma estándar |
| Gaussiana | campana más estrecha con colas largas | aún más suave, pero se oye una parte menor del grano; el sonido es más brumoso |
| Trapecio (Tukey) | subida rápida, meseta plana, bajada rápida | más fuente, más brillante y nítido; en granos cortos puede chasquear |
| Triángulo | subida recta, bajada recta | entre la campana y el trapecio, algo más duro que la campana |
| Percusiva | ataque instantáneo, caída larga | cada grano como un pequeño pellizco: gotas, tintineos de cristal, plucks |
| Percusiva invertida | subida larga, corte instantáneo | los granos se aspiran, el sonido es como una grabación al revés |
| Rectángulo | sin subida ni bajada | clics en cada grano, crepitar digital duro, glitch |

Las ventanas percusivas tienen nombres parecidos en distintos programas. En Pigments son Expodec (de exponential decay, caída exponencial) y su inversa Rexpodec; en Serum 2, ExpDec y Exp Dec Rev; en el granulador Borderlands, EXPDEC y su versión invertida en el tiempo. Si ves un nombre así, tienes delante una gota o su reflejo.

A menudo, en lugar de elegir una forma, tienes uno o dos mandos:

- **Suavizado (Smooth).** Lleva la forma de un rectángulo a una campana. Cero es crepitar, el máximo es suavidad.
- **Inclinación (Skew, Tilt, Attack/Decay).** Desplaza el pico de la envolvente hacia el principio o el final del grano. El pico al principio da percusión, el pico al final da percusión invertida.

<div class="grain-demo" data-demo="size">La demo sonora funciona en el navegador con JavaScript activado.</div>

La ventana no solo influye en el timbre del grano, sino también en el comienzo de cada nota. El primer grano de una nota arranca de cero y crece según la forma de la ventana. Si el grano dura un segundo y la ventana es triangular, el ataque de la nota se estirará medio segundo, haya lo que haya en la fuente. Por eso, en granos largos, una ventana de arranque brusco devuelve el golpe a la nota, mientras que una ventana simétrica la abre suavemente. Las ventanas crecientes en granos largos dan la impresión de una grabación tocada al revés, aunque se lea hacia delante.

??? info "Bajo el capó"

    La ventana se multiplica por el grano, y la multiplicación en el tiempo es una convolución en el espectro: el espectro de la ventana emborrona el espectro de la fuente. Las ventanas de bordes suaves (Hann, gaussiana) tienen un lóbulo principal algo más ancho, pero los lóbulos laterales están decenas de decibelios más abajo, así que añaden poco ruido. La ventana rectangular da lóbulos laterales altos, de ahí el crepitar. El trapecio está en medio: la meseta deja pasar más fuente, pero los bordes empinados suben los lóbulos laterales.

## Ejercicio 5.1. La forma decide { .exercise }

1. La cucharilla, posición en el tintineo, dispersión de 10 ms, densidad media.
2. Tamaño de 80 ms. Pasa por todas las formas de envolvente disponibles y apunta una palabra para cada una.
3. Tamaño de 5 ms. Repite. Fíjate en que con granos cortos la diferencia entre formas se oye más.
4. Busca una forma percusiva y baja la densidad. La cucharilla se ha deshecho en gotas.
