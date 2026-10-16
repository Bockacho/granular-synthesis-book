<p class="eyebrow">Capítulo 2</p>

# Anatomía del grano y de la nube

<figure markdown="span">
  ![Anatomía de un grano: comienzo y final suaves](../images/2-1.png)
  <figcaption>Ilustración 2.1. Anatomía de un grano.</figcaption>
</figure>

Cada grano tiene su propio conjunto de propiedades, como una nota en una partitura:

- **posición**: de qué parte del archivo se ha tomado;
- **tamaño**: cuánto dura;
- **envolvente**: cómo crece y se apaga;
- **altura**: a qué velocidad se lee su contenido;
- **volumen**;
- **panorama**: dónde suena, a la izquierda o a la derecha.

La nube añade dos propiedades más. La densidad dice cuántos granos nacen por segundo. La sincronía dice con qué regularidad se suceden en el tiempo.

En un sintetizador, cada nota que pulsas lanza su propio flujo de granos. Toca un acorde de tres notas y tendrás tres nubes, cada una a su altura.

## Qué oye el oído según la duración

| Duración del grano | Qué se oye | Para qué sirve |
| --- | --- | --- |
| hasta 2 ms | un clic, la fuente no se reconoce | percusión, crepitar, glitch |
| 2–20 ms | un clic con color, un zumbido; en un flujo denso, un timbre nuevo | bajos, voces sintéticas, metal |
| 20–100 ms | se reconocen el tono y el color de la fuente, pero no sus palabras ni su ritmo | pads, nubes, estiramiento |
| más de 100 ms | se oyen fragmentos enteros de la fuente | troceado, ritmos, mosaico |

Los límites son difusos y se mueven según el material. Una voz se reconoce con granos más cortos que un ruido, y el tono puro de la cucharilla se reconoce con granos cortísimos.

??? info "Bajo el capó"

    Truax reunió los datos de la psicoacústica en un cuadro sencillo. Un sonido corto aislado adquiere altura hacia los 13 ms, y su timbre se despliega del todo hacia los 40–50 ms. De ahí un límite aproximado en torno a 50 ms: los granos bastante más cortos se funden en una textura continua, los bastante más largos se oyen como eventos separados, y cerca de 50 ms el sonido parece separarse en capas. Un grano más corto que un periodo de la fuente no lleva su altura en absoluto y suena como una banda ancha ([Truax, 1988](https://doi.org/10.2307/3679938)).

## Solapamiento

Los granos pueden sucederse con pausas, uno tras otro o superpuestos. Cuánto se superponen se calcula fácilmente:

$$
O = d \times r
$$

Aquí d es la duración del grano en segundos, r es la densidad en granos por segundo, y O indica cuántos granos suenan a la vez de media.

- 50 ms × 10 granos por segundo = 0,5. Hay pausas entre los granos y se oye un repiqueteo.
- 50 ms × 20 = 1. Los granos van uno tras otro.
- 100 ms × 40 = 4. Cuatro granos suenan a la vez y la nube es lisa.

Menos de uno significa línea de puntos y ritmo. Más de uno significa una nube continua, y cuanto mayor, más espesa es y más se difumina la fuente.

## Sincronizado y disperso

<figure markdown="span">
  ![Un flujo de granos sincronizado y una nube dispersa](../images/2-2.png)
  <figcaption>Ilustración 2.2. Flujo síncrono y asíncrono.</figcaption>
</figure>

**Flujo síncrono.** Los granos llegan a intervalos iguales, como los golpes de un metrónomo. Mientras sean menos de 15–20 por segundo, se oye un repiqueteo. A partir de ahí el oído deja de distinguir los golpes sueltos y oye un tono, y la altura de ese tono es igual al número de granos por segundo. 110 granos por segundo suenan como la nota La2 (A2), y 220, como La3 (A3). Y da igual lo que haya dentro del grano: una cucharilla o una voz. El interior del grano define el color, y la frecuencia de los granos define la nota.

**Flujo asíncrono.** Los intervalos son aleatorios. No hay tono, hay un susurro, lluvia, grava, un enjambre. Así suenan las nubes granulares clásicas.

**Flujo casi síncrono.** Los intervalos son regulares, pero con una pequeña dispersión aleatoria. El tono se mantiene, pero se vuelve áspero y vivo, como un coro o un arco.

<div class="grain-demo" data-demo="sync">La demo sonora funciona en el navegador con JavaScript activado.</div>

??? info "Bajo el capó"

    Un flujo síncrono de granos da una señal periódica de periodo 1/r. Su espectro está formado por armónicos de la frecuencia r, mientras que la envolvente espectral, es decir, los formantes, la definen el contenido del grano y la forma de la ventana. En el mismo principio se basan la síntesis de formantes FOF de Xavier Rodet en el IRCAM y la síntesis pulsar que Curtis Roads describió en el libro «Microsound». En un flujo asíncrono no hay periodo, y el espectro se difumina en una banda continua de ruido con el color de la fuente.

## Ejercicio 2.1. Calcula la nube { .exercise }

Calcula el solapamiento y predice lo que vas a oír. Las respuestas están escondidas abajo; ábrelas cuando hayas hecho el cálculo.

1. Grano de 30 ms, 10 granos por segundo.
2. Grano de 200 ms, 25 granos por segundo.
3. Grano de 5 ms, síncrono, 440 granos por segundo.

??? question "Respuestas"

    Primero: 0,3, un repiqueteo escaso con pausas. Segundo: 5, una nube espesa y lisa. Tercero: 2,2, un tono continuo, la nota La4 (A4) con el color de la fuente.
