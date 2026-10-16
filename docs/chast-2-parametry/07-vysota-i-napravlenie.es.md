<p class="eyebrow">Capítulo 7</p>

# Altura, dirección y dispersión de altura

<figure markdown="span">
  ![La altura y la dirección de los granos](../images/7-1.png)
  <figcaption>Ilustración 7.1. Dispersión de altura por octavas.</figcaption>
</figure>

## Altura del grano

La altura del grano decide a qué velocidad lee el granulador el sonido dentro de cada grano. Si lee el doble de rápido, el grano suena una octava más agudo. El doble de lento, una octava más grave. Lo importante: esto no afecta en nada a la posición, y el tiempo avanza por el archivo como antes.

**Cómo se llama:** Pitch, Tune, Transpose, Grain Pitch, Coarse/Fine, Semi/Cent.

La altura suele fijarse con dos mandos: uno grueso en semitonos y uno fino en cents (centésimas de semitono). Además está el teclado: en un sintetizador, la nota pulsada transpone los granos respecto a la nota base, como en un sampler.

Un detalle importante. Cuando la altura cambia con la velocidad de lectura, el timbre se mueve junto con la nota. La cucharilla dos octavas más grave suena como la campana de una catedral; dos octavas más aguda, como polvo de cristal. Una voz una octava más aguda se convierte en una ardilla, aunque la duración del sonido no ha cambiado. Esta propiedad es fácil de convertir en un instrumento: la altura del grano funciona como un mando del «tamaño» de la fuente.

??? info "Bajo el capó"

    Cambiar la velocidad de lectura en un factor k multiplica por k todas las frecuencias dentro del grano, formantes incluidos. Algunos motores pueden desplazar la altura conservando los formantes, pero eso ya es procesamiento espectral sobre el granular. Y en el modo síncrono del [capítulo 6](06-plotnost-i-sinkhronnost.md) ocurre al revés: la nota la fija la frecuencia de los granos, y la altura del grano solo mueve los formantes.

## Dispersión de altura

La dispersión de altura da a cada grano una desviación aleatoria respecto a la nota principal. Es uno de los mandos más bonitos de un granulador.

**Cómo se llama:** Pitch Spread, Pitch Random, Pitch Jitter, Detune, Pitch Scatter.

| Dispersión | Qué se oye |
| --- | --- |
| 1–10 cents | un chorus ligero, el sonido es más ancho y cálido |
| 10–50 cents | una desafinación flotante, «borracha», como de cinta vieja |
| unos semitonos | una nube de notas vecinas, un clúster, una bruma |
| octavas | los granos saltan de registro, destellos |

??? info "Bajo el capó"

    Truax da un límite preciso para granos sinusoidales: mientras la banda de frecuencias sea más estrecha que aproximadamente el 10 % de la frecuencia media (una dispersión de unos ±5 %, es decir, ±85 cents), el oído todavía oye altura. Más ancha, el tono se convierte en una banda estrecha de ruido y después en ruido ancho ([Truax, 1988](https://doi.org/10.2307/3679938)). Con granos de una grabación el límite es más difuso, porque el sonido dentro del grano tiene su propio espectro, pero la tendencia es la misma.

En muchos granuladores la dispersión puede ajustarse a intervalos. Entonces cada grano toma su altura solo de un conjunto dado: octavas, quintas, notas de la escala.

- **Solo octavas.** El sonido destella como los reflejos en el agua, pero sigue en una sola nota. Un truco clásico del ambient.
- **Octavas y quintas.** Un acorde de órgano que destella.
- **Notas de la escala.** Cada grano toca una nota aleatoria de la escala, y una sola tecla pulsada da lugar a una nube-acorde.

En Quanta 2 este ajuste se llama QUANT: un botón con un teclado junto al mando TUNE abre una pequeña ventana con teclas. Activa las notas que quieras, y cada grano tocará solo esas. Si activas las doce, los granos irán por cualquier nota de la octava; si solo la fila de abajo, solo por las notas sin sostenidos ni bemoles. La cuantización tiene en cuenta la afinación actual del plugin, así que también funciona con afinaciones no estándar. Así la nube se mantiene en la tonalidad del tema.

<div class="grain-demo" data-demo="pitch">La demo sonora funciona en el navegador con JavaScript activado.</div>

## Dirección

Un grano puede leerse al revés. Un grano corto invertido casi no se distingue de uno normal de oído, pero en granos de más de 50 ms los ataques se dan la vuelta y el sonido empieza a «aspirarse».

**Cómo se llama:** Reverse, Direction, Rev Prob, Backwards.

A menudo hay una probabilidad: 0 % significa que todos los granos van hacia delante, 100 % que todos van al revés, 50 % que van mezclados. La mezcla da un sonido inestable, vacilante, como si el tiempo se tambaleara.

En Quanta 2 la dirección del grano tiene cinco modos. FORWARD y REVERSE tocan los granos hacia delante o hacia atrás. PLAY DIR sigue el movimiento de la posición: cuando la posición va hacia el final del archivo, los granos suenan hacia delante; cuando va hacia el principio, hacia atrás. -PLAY DIR funciona al revés. RANDOM elige la dirección al azar para cada grano. Un grano invertido lee el mismo trozo del archivo que uno normal, solo que al revés, así que el límite del trozo no se desplaza.

??? info "Bajo el capó"

    Por qué un grano corto invertido suena como uno normal lo explicó Truax: la ventana del grano es simétrica, y una textura de granos sintetizados puede tocarse al revés sin ningún cambio de timbre. A esas texturas las llamaba palindrómicas ([Truax, 1988](https://doi.org/10.2307/3679938)). Un grano de una grabación tiene su propio movimiento interno, un ataque y una caída, así que en granos largos la inversión ya se oye.

## Deslizamiento dentro del grano

En algunos motores la altura puede cambiar dentro del propio grano: cada uno empieza en una nota y se desliza hacia otra. Los granos cortos con altura descendente suenan como gotas o como «piu» de láser; los largos, como gemidos. Si tu instrumento no tiene un mando así, no pasa nada: una modulación rápida de la altura da un efecto parecido ([capítulo 9](../chast-2-parametry/09-modulyaciya.md)). Curtis Roads tiene un nombre propio para estos granos: glisones, y la síntesis con ellos se llama síntesis glisón.

## Ejercicio 7.1. Un acorde de una sola cucharilla { .exercise }

1. La cucharilla, posición en el tintineo, tamaño de 100 ms, densidad 40, dispersión de posición de 20 ms.
2. Toca la nota Do. El tintineo se ha afinado en esa nota.
3. Pon la altura en −24 semitonos. La cucharilla se ha convertido en una campana.
4. Devuelve la altura. Dale una dispersión de altura de 15 cents. El sonido se ha ensanchado.
5. Si puedes ajustar la dispersión a intervalos, elige octavas y sube la dispersión a ±1 octava. Destellos.
6. Pon la probabilidad de inversión al 50 %. Escucha qué inestable se ha vuelto.
