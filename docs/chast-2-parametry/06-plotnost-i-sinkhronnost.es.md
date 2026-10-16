<p class="eyebrow">Capítulo 6</p>

# Densidad y sincronía

<figure markdown="span">
  ![De granos escasos a una nube densa](../images/6-1.png)
  <figcaption>Ilustración 6.1. Densidad: de las gotas a la nube.</figcaption>
</figure>

## Densidad

La densidad dice cuántos granos nacen por segundo en cada nota. Es el mando que convierte un repiqueteo en una nube.

**Cómo se llama:** Density, Rate, Grains, Frequency, Grain Rate, Spawn Rate, Interval. Si el mando se llama Interval o Period, funciona al revés: fija la pausa entre granos en milisegundos, y cuanto mayor es el número, más escasos son los granos.

Tres maneras de fijar la densidad:

- **Granos por segundo, en hercios.** 10 Hz son 10 granos por segundo.
- **En fracciones de compás.** 1/16 es un grano en cada semicorchea. Los granos caen en la rejilla y el granulador se convierte en una caja de ritmos.
- **Según la altura de la nota.** La frecuencia de los granos sigue al teclado, y los propios granos dan un tono (más abajo).

Qué se oye al subir la densidad, con un tamaño de grano de 50 ms:

| Densidad | Solapamiento | Qué se oye |
| --- | --- | --- |
| 2–8 granos/s | 0,1–0,4 | gotas sueltas, puntillismo, una lluvia escasa |
| 10–20 | 0,5–1 | repiqueteo, trémolo, granos casi uno tras otro |
| 30–100 | 1,5–5 | una nube lisa, chorus |
| 100 o más | más de 5 | un muro denso, la fuente se difumina, suena como ruido coloreado |

El compositor John McKay describió la misma escalera con palabras de oyente: al crecer la densidad, una sucesión de sonidos sueltos se convierte en un flujo, el flujo en un enjambre, el enjambre en una banda continua y la banda en una masa compacta (según [Truax, 1988](https://doi.org/10.2307/3679938)).

<div class="grain-demo" data-demo="density">La demo sonora funciona en el navegador con JavaScript activado.</div>

## El volumen crece con la densidad

Cuantos más granos suenan a la vez, más fuerte suena la nube. Duplica la densidad y el nivel sube unos 3 dB si los granos son distintos. Si los granos son idénticos y están en fase, la subida es de 6 dB. Por eso, al subir la densidad, vigila la salida y baja el volumen. Algunos granuladores lo compensan solos.

??? info "Bajo el capó"

    Las señales no correlacionadas se suman en potencia: N granos dan una amplitud proporcional a la raíz cuadrada de N, es decir, +3 dB por cada duplicación. Las correlacionadas se suman en amplitud: N granos dan una amplitud N veces mayor, +6 dB por duplicación. La dispersión de posición y de altura descorrelaciona los granos y protege de los saltos bruscos de volumen.

## Sincronía

El [capítulo 2](../chast-1-zerno/02-anatomiya-zerna.md) presentó tres modos de flujo: síncrono, asíncrono y casi síncrono. En las interfaces se suele pasar de uno a otro con un solo mando.

**Cómo se llama:** Sync, Async, Random Rate, Rate Jitter, Spray (en el tiempo), Irregularity, Chaos.

- **Dispersión temporal 0.** Los granos van como un metrónomo. Por encima de 20 granos por segundo nace un tono.
- **Dispersión temporal media.** El tono es áspero y vivo, como un coro o un instrumento de arco.
- **Dispersión temporal máxima.** No hay tono: hay una nube, un susurro, un enjambre.

Junto a la sincronía hay a veces otro mando: la intermitencia (Intermittency). Fija la probabilidad de que el siguiente grano simplemente no nazca. El flujo sigue su rejilla, regular o aleatoria, pero aparecen huecos, y la nube se aclara sin cambiar la densidad en el mando. Así funciona este mando en el EmissionControl2 gratuito ([capítulo 21](../chast-5-dalshe-sam/21-chto-dalshe.md)).

## Los granos como generador de notas

El truco más inesperado de la síntesis granular. Liga la densidad al teclado: pulsa La4 y los granos llegan 440 veces por segundo, de forma síncrona. Ahora el granulador toca notas, aunque la posición esté quieta y no hayas tocado la altura del grano.

El interior del grano decide entonces el timbre. Un grano del tintineo de la cucharilla da una nota metálica, un grano de la vocal «a» da una nota con color de «a». Así se construye un coro sintético a partir de una voz grabada, y un bajo a partir de un golpe en la mesa.

En este modo el sonido tiene dos alturas a la vez. Una la fija la frecuencia de los granos: es la nota. La otra la fija la altura dentro del grano ([capítulo 7](../chast-2-parametry/07-vysota-i-napravlenie.md)): es el color, el formante. Mueve la altura del grano y la nota se queda, mientras el timbre «se abre» y «se cierra» como una boca al cantar.

Este modo existe también en instrumentos listos para usar. En Grain de Reason Studios se llama Grain Oscillator: el sonido se construye con dos granos muy cortos, la frecuencia de los granos sigue a la nota y la altura original de la grabación solo se encarga del timbre. Dos mandos muestran las dos caras del principio. Grain Spacing fija la distancia entre los dos granos dentro de la grabación: cuanto mayor, más uniforme es el sonido de una nota a otra, casi como una tabla de ondas. Formant mueve el color sin tocar la nota, y con un Grain Spacing grande suena parecido a la sincronización clásica de osciladores.

??? info "Bajo el capó"

    Este principio está en la base de la síntesis FOF y de la síntesis pulsar. La frecuencia r con la que se suceden los granos fija la fundamental. La duración del grano y su contenido fijan la envolvente espectral: donde el espectro sube, hay un formante. Si el tamaño del grano es mayor que el periodo 1/r, los granos se solapan y los formantes se estrechan; si es menor, hay silencio entre los granos, y el espectro se ensancha y se vuelve más «pulsar».

??? info "Bajo el capó"

    Truax describió este efecto ya en 1988. Si granos de la misma duración se suceden uno tras otro, el granulador hace en realidad una modulación de amplitud con una frecuencia de 1 / (duración del grano + pausa): un grano de 15 ms y una pausa de 5 ms dan 50 Hz. La envolvente fija la forma de la onda moduladora: cuanto más afilados son los bordes de la ventana, más bandas laterales y más brillante el sonido. El efecto es más fuerte cuando la frecuencia dentro del grano es múltiplo de la frecuencia de modulación. Basta con dispersar un poco las duraciones de los granos para que la modulación regular se deshaga en una textura estocástica áspera ([Truax, 1988](https://doi.org/10.2307/3679938)).

## Ejercicio 6.1. Lluvia y nota { .exercise }

1. La cucharilla, posición en el tintineo, tamaño de 30 ms, dispersión de posición de 10 ms.
2. Densidad de 3 granos por segundo, asíncrona. Gotas escasas.
3. Sube suavemente la densidad hasta 200. Fíjate en dónde las gotas se funden en una nube.
4. Pon la dispersión temporal a cero. Sube la densidad por encima de 100. Escucha cómo la nube empieza a zumbar con un tono.
5. Si en tu instrumento la densidad puede ligarse al teclado, toca una escala. Estás tocando una melodía con la cucharilla, y la posición no se ha movido en ningún momento.
