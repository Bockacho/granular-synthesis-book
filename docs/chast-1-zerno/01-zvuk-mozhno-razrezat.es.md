<p class="eyebrow">Capítulo 1</p>

# El sonido se puede cortar

<figure markdown="span">
  ![Un solo sonido: entero, cortado en trozos y esparcido como una nube de granos](../images/1-1.png)
  <figcaption>Ilustración 1.1. El sonido se corta en granos.</figcaption>
</figure>

El sonido que has grabado está en el ordenador como una larga fila de números. Cada número dice dónde estaba en ese instante la membrana del micrófono: un poco adelante o un poco atrás. En un segundo hay 44 100 o 48 000 de esos números, según cómo se grabó el archivo.

Como es una fila de números, se puede cortar en trozos de cualquier longitud. La síntesis granular corta el sonido en trozos muy cortos, normalmente de 1 a 100 milisegundos. Un milisegundo es una milésima de segundo. Un trozo de 50 ms dura una vigésima de segundo: lo oirás, pero difícilmente reconocerás de dónde se ha cortado.

Un trozo así, con un comienzo suave y un final suave, se llama grano, en inglés grain. Un grano casi no significa nada, igual que una gota todavía no es lluvia. Pero lanza cientos de granos por segundo y nace un sonido nuevo: una nube. Cómo resulte la deciden cuatro cosas: de dónde se toman los granos, cuánto duran, con qué frecuencia vuelan y a qué altura suenan.

## El superpoder principal

En un magnetófono o en un sampler normal, la velocidad, la altura y la duración del sonido van soldadas. Acelera una grabación al doble y sonará una octava más aguda y durará la mitad. Ralentízala y bajará y durará más. De ahí salen la voz de ardilla y la voz de monstruo ralentizado.

El granulador rompe ese vínculo. Decide por separado de qué parte del archivo toma los granos y con qué altura los toca. De ahí salen trucos que el sampler no tiene:

- **Congelación.** Te quedas en un punto del archivo y el tintineo de la cucharilla dura todo lo que quieras, incluso diez minutos.
- **Estiramiento.** Recorres tres segundos de sonido en tres minutos y la altura no cambia.
- **Transposición sin cambiar la duración.** El tintineo suena una octava más grave y dura exactamente lo mismo.
- **Mezcla.** Los granos se toman de lugares aleatorios del archivo y el sonido se deshace en un mosaico.

??? info "Bajo el capó"

    A 48 kHz, un grano de 50 ms contiene 2400 muestras. El granulador cambia la altura del grano igual que un sampler: lee las muestras más deprisa o más despacio e interpola entre ellas. La diferencia es que el inicio de cada nuevo grano se fija por separado y el final del anterior no influye en él. Por eso la velocidad de lectura dentro del grano (la altura) y la velocidad con la que la posición avanza por el archivo (el tiempo) se convierten en dos mandos independientes.

## Por qué el grano necesita bordes suaves

Recorta un trozo de sonido con tijeras y la onda se cortará de golpe en los bordes. El oído oye ese corte como un clic. Cien clics por segundo se convierten en un crepitar. Por eso cada grano primero sale suavemente del silencio y al final vuelve suavemente a él. Esta forma del volumen se llama envolvente del grano, o ventana. Veremos las formas de ventana en el [capítulo 5](../chast-2-parametry/05-razmer-i-ogibayushchaya.md).

??? info "Bajo el capó"

    El clic nace de una discontinuidad: la señal salta de un valor distinto de cero a cero en una sola muestra. Un salto brusco tiene energía en todas las frecuencias a la vez, de ahí el clic de banda ancha. La ventana lleva la amplitud a cero en los bordes y el salto no tiene de dónde salir.

## Ejercicio 1.1. Un granulador a mano { .exercise }

Este experimento se hace en cualquier DAW, sin plugins.

1. Pon el sonido de la cucharilla en una pista de audio.
2. Recorta del centro del tintineo un trozo de 50 ms. Amplía la vista para acertar con precisión.
3. Copia el trozo 20 veces seguidas, uno detrás de otro. El tintineo se ha convertido en un zumbido uniforme, pero cruje en las uniones.
4. Ponle a cada trozo un fade-in y un fade-out de 10–15 ms. El crujido ha desaparecido. Acabas de construir una envolvente de grano.
5. Segunda variante: recorta 20 trozos de 50 ms, cada uno 10 ms más tarde que el anterior, y colócalos seguidos con los mismos fades. Ahora el tintineo cambia despacio, como si el tiempo se hubiera frenado, pero la altura es la misma. Eso es el estiramiento.
6. Tercera variante: recorta 20 trozos de lugares aleatorios de todo el archivo. Ahí tienes el mosaico.

Un granulador hace lo mismo, solo que cientos de veces por segundo, y en lugar de tijeras tiene mandos.
