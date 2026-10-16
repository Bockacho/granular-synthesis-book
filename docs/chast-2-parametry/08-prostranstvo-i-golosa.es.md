<p class="eyebrow">Capítulo 8</p>

# Espacio, azar y voces

<figure markdown="span">
  ![Una nube de granos alrededor de la cabeza del oyente](../images/8-1.png)
  <figcaption>Ilustración 8.1. Una nube en estéreo.</figcaption>
</figure>

## Panorama de los granos

Cada grano puede colocarse en su propio lugar del panorama estéreo. Mientras todos los granos suenan en el centro, la nube es estrecha, como si saliera de un solo altavoz. Repártelos y la nube se extiende por todo el ancho, y con auriculares los granos empiezan a pasarte zumbando junto a los oídos.

**Cómo se llama:** Pan Spread, Stereo Spread, Width, Pan Random, Spatialize.

- **0 %.** Todos los granos en el centro.
- **20–50 %.** La nube es ancha, pero el centro es denso. Una buena opción para un pad en la mezcla.
- **100 %.** Los granos vuelan de un extremo a otro. Impresiona con auriculares, pero en un altavoz mono parte del sonido puede desaparecer.

Comprueba una nube ancha en mono: en la DAW pon el máster en mono un par de segundos. Si el sonido se hunde o se apaga, reduce la anchura.

La anchura también se puede conseguir de otra forma. Dentro de Quanta 2 trabajan dos granuladores independientes, uno para el canal izquierdo y otro para el derecho, con mandos comunes. Incluso a partir de una grabación mono dan granos distintos, sobre todo con las dispersiones activadas, y el sonido sale ancho. El mando WIDTH mezcla los canales entre sí: en cero el sonido es mono, y a partir de ahí la anchura crece hasta el máximo.

??? info "Bajo el capó"

    El panorama aleatorio por grano descorrelaciona los canales izquierdo y derecho. Una nube ancha de granos descorrelacionados pierde menos al sumarse en mono que un chorus estéreo, porque contiene pocas copias en contrafase de la misma señal. Pero con una fuente estéreo de base ancha y dispersión al máximo, los huecos en mono siguen siendo posibles.

## Volumen aleatorio

A cada grano se le puede dar un volumen aleatorio. La nube empieza a chispear: unos granos suenan más brillantes, otros apenas se oyen. El sonido deja de parecer pulido.

**Cómo se llama:** Amp Random, Level Spread, Gain Jitter, Velocity Random.

## El azar como mando propio

Fíjate en que casi cada parámetro del granulador tiene un gemelo aleatorio: dispersión de posición, dispersión temporal, dispersión de altura, de panorama, de volumen, de dirección. Este es el corazón del sonido granular. El mando principal fija hacia dónde va el sonido, y la dispersión fija lo vivo que está.

Una regla sencilla para empezar: primero encuentra el sonido con las dispersiones a cero, luego súbelas de una en una, escuchando cada una. Si lo subes todo a la vez, sale un engrudo, y no se sabe qué mando lo ha cocinado.

En algunos granuladores el azar se puede «congelar»: fijas la semilla del generador (seed), y el dibujo aleatorio se repite igual cada vez que pulsas una nota. Útil cuando necesitas una parte viva pero predecible.

## Límite de granos y procesador

Cada grano le cuesta trabajo al procesador. Densidad de 200 granos por segundo, tamaño de 100 ms, un acorde de seis notas: suenan a la vez unos 120 granos. Por eso los granuladores tienen un techo de granos por voz. Cuando se alcanza, ya no nacen granos nuevos, y la nube puede empezar a aclararse o a sonar irregular.

**Cómo se llama:** Max Grains, Grain Limit, Voices, Polyphony, Quality.

Si el proyecto va a tirones: baja la densidad, acorta los granos, reduce la polifonía o congela o bouncea la pista a audio.

## Voces y modos de interpretación

Como en cualquier sintetizador, un granulador tiene polifonía: cuántas notas pueden sonar a la vez. Cada nota lleva su propia nube.

- **Poly.** Acordes, cada nota con su nube.
- **Mono y legato.** Una nota cada vez. Una nota nueva puede recoger la nube de la anterior en lugar de empezar desde el principio. Bueno para bajos y líneas solistas.
- **MPE.** Si el instrumento y el controlador admiten MPE, cada dedo controla su propia nube por separado: con la presión, la inclinación, el movimiento arriba y abajo. Puedes, por ejemplo, abrir la dispersión de posición de una sola nota del acorde con la presión del dedo.

## Después del granulador

A los granos casi siempre les sienta bien el procesamiento posterior:

- **La reverb** pega los granos en un espacio único y disimula los clics.
- **El delay** multiplica los granos y alarga la nube en el tiempo.
- **Un filtro** quita graves de sobra a una nube densa y agudos de sobra al crepitar.
- **Un compresor** iguala una nube cuyo volumen salta con la densidad.

## Ejercicio 8.1. Una nube alrededor de la cabeza { .exercise }

1. Toma el sonido del ejercicio 6.1, donde la nube acababa de formarse. Ponte los auriculares.
2. Sube la dispersión de panorama de 0 a 100 %. Fíjate en el momento en que la nube se vuelve envolvente.
3. Pon el máster en mono. Compara. Busca la anchura a la que el mono todavía suena bien.
4. Añade un volumen aleatorio del 30–50 %. La nube empezará a chispear.
5. Después del granulador, pon una reverb de cola larga y un delay. Escucha cómo el sonido se ha convertido en un lugar.
