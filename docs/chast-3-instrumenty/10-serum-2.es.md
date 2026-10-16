<p class="eyebrow">Capítulo 10</p>

# Xfer Serum 2

En Serum 2 el granulador vive dentro del oscilador. Cualquiera de los tres osciladores principales (OSC A, OSC B, OSC C) puede pasar a uno de cinco modos: Wavetable, Multisample, Sample, Granular, Spectral. Es decir, en un mismo patch puedes tener hasta tres granuladores independientes, y además un sub y un oscilador de ruido.

!!! note "Sobre la versión"

    La descripción corresponde a Serum 2 versión 2.0.18. Ten en cuenta que el manual advierte de que el modo granular carga el procesador más que los modos Wavetable, Sample y Multisample.

<figure markdown="span">
  ![Serum 2: el oscilador OSC B en modo Granular; bajo la onda, los mandos SCAN, DENS, LENGTH y la fila inferior de dispersiones](../images/10-1.png)
  <figcaption>Captura 10.1. OSC B en modo Granular con un sonido cargado. Interfaz de Serum 2, © Xfer Records.</figcaption>
</figure>

## Activar el modo y cargar un sonido

1. Haz clic en la cabecera del oscilador y elige **Granular** en el menú contextual.
2. Si en ese oscilador ya había un sample en modo Sample o Spectral, aparecerá enseguida en la pantalla. Si no, la pantalla estará vacía.
3. Abre el menú desplegable del sample. Contiene samples de fábrica tonales y no tonales, y también las tablas de ondas de Serum, que igualmente se pueden granular. Tu propio archivo se carga con la opción **Load Sample**. Según las reseñas, también puedes simplemente arrastrar el archivo a la pantalla ([PML](https://www.productionmusiclive.com/blogs/news/how-to-use-granular-synthesis-in-serum-2)).
4. Después de cargarlo, el mismo menú mostrará el archivo en el disco o lo volverá a cargar.

Para los drones viene bien desactivar el seguimiento de altura. Clic derecho en la cabecera del oscilador y desmarca **Enable Pitch Tracking**. Entonces el modo Granular toca la nota C3 en cualquier tecla. Ahí mismo aparecerá **Pitch Bend Tracking**: desactívalo también si la rueda de pitch no debe tocar el drone.

## Dónde están los parámetros de la parte 2

| Parámetro de la parte 2 | Dónde en Serum 2 |
| --- | --- |
| Ventana de lectura (capítulo 4) | marcadores de inicio y final, bucle LS y LE |
| Escaneo y congelación (capítulo 4) | el mando **SCAN**, cero lo detiene |
| Posición manual (capítulo 4) | el modo **Manual** del menú de bucle |
| Tamaño (capítulo 5) | el mando **LENGTH** y sus modos |
| Envolvente (capítulo 5) | el botón de ventana: **AMOUNT**, **SKEW**, **SHAPE** |
| Densidad y sincronía (capítulo 6) | el mando **DENS** y sus modos |
| Altura (capítulo 7) | **OCT**, **SEM**, **FIN**, **CRS** |
| Dispersiones (capítulos 4, 5, 7, 8) | fila inferior: **OFFSET**, **DIR**, **PITCH**, **RAND** de duración, panorama y nivel |
| Panorama y volumen (capítulo 8) | **PAN**, **LEVEL** |
| Voces (capítulo 8) | **UNISON** y la sección Voicing |

## Marcadores y operaciones con el sample

Pasa el cursor por encima de la onda y aparecerán los marcadores de inicio y final. Arrástralos para encerrar el granulador en el tintineo de la cucharilla y descartar el golpe. Es la ventana de lectura del [capítulo 4](../chast-2-parametry/04-istochnik-i-poziciya.md).

El clic derecho sobre la onda abre el menú de operaciones. Según el manual, casi todas coinciden con el modo Sample:

- **Snap Off / Snap to Zero / Snap to Beats / Snap to Loop.** A qué se pegan los marcadores: a nada, a los cruces por cero de la onda, a los tiempos del tempo, a los puntos del bucle. Snap to Zero evita los clics en los bordes.
- **Fade Edges.** Fundidos en los bordes del sample, de 1 a 128 ms.
- **Normalize.** Sube el volumen hasta el pico sin distorsión.
- **Reverse.** Invierte todo el sample.
- **Trim.** Recorta el sample por los marcadores.
- **Slice Auto / Slice Manual.** Corta el sample por los ataques y reparte los trozos por las teclas. La línea amarilla sobre la onda fija el umbral: cuanto más baja, más trozos. En modo manual, Alt-clic (Opción-clic en Mac) añade o quita un corte. En el modo de bucle Manual no se puede trocear.
- **Show Marker Animation.** Los marcadores se mueven siguiendo la modulación, y se ve adónde lleva el LFO la ventana.
- **Zoom to Start and End.** Fija la vista en todo el archivo. Mientras esta opción está desactivada, el movimiento vertical del ratón sobre la onda cambia el zoom y el horizontal desplaza la vista.

Las operaciones no son destructivas: el archivo original no cambia, deshacer y rehacer funcionan, y **Reload Sample** en el menú del sample devuelve el archivo tal como era.

## El menú de bucle

El menú de bucle decide cómo recorre el granulador el sample. La mayoría de las opciones son comunes con el modo Sample; dos existen solo en Granular.

| Opción | Qué hace |
| --- | --- |
| One-shot | el archivo se recorre hacia delante una vez mientras mantienes la nota |
| Fwd Loop | del marcador de inicio al final del bucle, y de nuevo desde el inicio del bucle |
| Rev Loop | al llegar al final del bucle, va hacia atrás |
| Fwd/Rwd Loop | bucle de péndulo: ida y vuelta, sin uniones bruscas |
| Tailed | toca la segunda mitad del archivo y repite la cola mientras se apaga el volumen |
| Relative Loop | el bucle se desplaza junto con el marcador de inicio |
| Link Loop Length | al mover el inicio del bucle, su longitud se mantiene |
| Exit Loop on Release | al soltar la tecla sale del bucle y toca el archivo hasta el final |
| **Loop Grains** | solo Granular: los granos respetan los marcadores del bucle |
| **Manual** | solo Granular: la posición se fija a mano (más abajo) |

Los marcadores del bucle son azules y aparecen en el borde superior de la pantalla. Se pueden arrastrar por separado, juntos (por el espacio entre ellos) o fijar con números en los campos **LS** y **LE**. El bucle no sale de los marcadores de inicio y final del sample. En cambio, si con modulación o automatización llevas el final del bucle por delante del inicio, la dirección del bucle se invierte. Un truco listo para granos que van ora hacia delante, ora hacia atrás.

**El fundido cruzado del bucle**, en modo Granular, se aplica a los propios granos y solo funciona con Loop Grains activado. El botón del fundido se arrastra hacia arriba con el ratón, y la curva azul claro muestra su forma.

## Modo Manual: la posición a mano

Elige **Manual** en el menú de bucle. El cursor de reproducción se sustituye por un punto rojo X|Y, y el mando **SCAN** empieza a mover ese punto en horizontal. Al pulsar una nota, el sample ya no se escanea: la posición se queda donde está el punto. Son el movimiento manual y la congelación del [capítulo 4](../chast-2-parametry/04-istochnik-i-poziciya.md) en estado puro.

La posición se puede automatizar o modular: arrastra cualquier fuente de modulación (un LFO, una envolvente, una macro) directamente sobre el punto. Un LFO lento sobre el punto da una deriva por el tintineo de la cucharilla.

## El pad X|Y

En el menú contextual de la pantalla, activa **X|Y Control**. Aparecerá un punto rojo sobre la onda, y en el menú una nueva opción para elegir el parámetro del eje Y. Las opciones: Level, Warp, Warp 2, Density, Grain Length, Window Amt, Window Skew, y también el azar de casi todo: Rand Offset, Rand Dir, Rand Pitch, Rand Length, Rand Pan, Rand Gain, Rand Window, Rand Skew, Rand Warp, Rand Warp 2. Tras elegir el parámetro aparece una opción más: cómo lo modula exactamente el eje Y.

Pon en Y la duración del grano, activa Manual y con un solo movimiento del ratón recorres la cucharilla y cambias su granulosidad. En el escenario es casi un instrumento terminado.

## SCAN: velocidad de escaneo

SCAN fija a qué velocidad avanza el cursor de reproducción por el sample. Cada grano nuevo arranca desde el lugar actual del cursor. Una velocidad alta reparte los inicios de los granos más lejos por el archivo, y se solapan menos: sirve para ritmo y glitch. Una velocidad baja estira el sonido en un drone. Un valor negativo invierte el movimiento, el cero detiene el cursor: eso es la congelación.

La escala va en porcentaje. Para encontrar el tempo original, carga una grabación de voz y ajusta SCAN hasta que las palabras suenen a ritmo normal. A partir de ese punto funciona la fórmula de estiramiento del [capítulo 4](../chast-2-parametry/04-istochnik-i-poziciya.md).

El clic derecho sobre SCAN abre sus ajustes:

- **Range.** El rango del mando: ±200 % (por defecto), ±400 % o ±800 %.
- **Reverse.** Invierte el escaneo. Se puede automatizar y modular.
- **Key Track.** La velocidad de escaneo crece con la altura de la nota. Desactivado: la velocidad es la misma en todas las teclas.
- **Lock Scan Rate (to Tempo).** La velocidad de escaneo cambia junto con el tempo del proyecto.
- **Sample Length to BPM.** La duración del sample se liga al tempo de la DAW, el mando SCAN se convierte en **RATE** y se fija en compases y tiempos. Un recorrido de la cucharilla durará exactamente uno o dos compases.

## DENS: densidad

DENS fija con qué frecuencia nacen los granos. Con el clic derecho se elige uno de tres modos:

- **Free.** La frecuencia de los granos en hercios. Es la densidad del [capítulo 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md) en estado puro.
- **BPM Sync.** Un grano en cada tiempo del tempo. El menú añade Triplet y Dotted para tresillos y puntillos.
- **Grains.** Serum calcula él mismo la frecuencia de los granos a partir de su duración, de modo que suene a la vez un número dado de granos. Es el solapamiento O del [capítulo 2](../chast-1-zerno/02-anatomiya-zerna.md): pones 4 y en cada momento suenan cuatro granos, cambies como cambies la duración.

Dos ajustes más en el mismo menú:

- **Jump Start.** Activado: al empezar la nota nacen muchos granos de golpe, y la densidad completa se oye al instante. Desactivado: al principio hay un solo grano, la nube se va formando poco a poco, y el ataque de la nota es más suave.
- **Max Grains.** El techo de granos que suenan a la vez, contando los del unísono. Cuando se alcanza, el grano nuevo se salta hasta que quede sitio. El mando principal para ahorrar procesador. En total, Serum admite hasta 256 granos ([What's New](https://static.xferrecords.com/Serum%202%20What's%20New.pdf)).

En modo Free la frecuencia de los granos llega al rango audible ([Databroth](https://www.databroth.com/blog/serum-2-review)), así que el flujo síncrono con tono del [capítulo 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md) es alcanzable aquí.

## LENGTH: duración del grano

LENGTH fija la duración del grano. Con el clic derecho se elige el modo:

- **Free.** La duración en segundos o milisegundos.
- **BPM Sync.** La duración en fracciones de compás, con Triplet y Dotted.
- **Percent.** La duración en porcentaje del periodo entre granos. No disponible si DENS está en modo Grains.

Percent es cómodo para el ritmo. La duración en porcentaje del periodo es el solapamiento del [capítulo 2](../chast-1-zerno/02-anatomiya-zerna.md) multiplicado por cien: el 50 % da granos con pausas, el 100 % uno tras otro, el 200 % dos granos a la vez. Cambia la densidad cuanto quieras y el carácter del troceado se mantendrá.

## La ventana del grano

El botón de ventana abre los ajustes de la envolvente del grano. Arrastrar el botón con Alt (Opción en Mac) cambia AMOUNT y SKEW rápidamente sin abrir los ajustes.

- **AMOUNT.** Cuánto influye la forma de la ventana en el grano. Al lado hay un campo de azar por grano.
- **SKEW.** La inclinación de la ventana del [capítulo 5](../chast-2-parametry/05-razmer-i-ogibayushchaya.md). También con azar por grano.
- **SHAPE.** La forma de la ventana, cuyo dibujo se ve a la izquierda.

| Forma | Cómo es | Para qué sirve |
| --- | --- | --- |
| Hann | subida y bajada cosenoidales suaves | la forma estándar para nubes y pads |
| Welch | cúpula parabólica | un grano compacto y denso con el centro fuerte |
| Gaussian | campana | texturas suaves y fluidas |
| Blackman-Harris | laderas empinadas, pico suave, bordes muy atenuados | el sonido más limpio con mucho solapamiento |
| Sinc | centro afilado y colas oscilantes | un color inusual, añade armónicos |
| Tukey | centro plano, bordes redondeados | más fuente, nítido |
| Triangle | subida recta al pico, bajada recta | un grano sencillo, algo más afilado |
| Trapezoid | subida, meseta larga, bajada | un cuerpo de grano uniforme, sonido denso |
| ExpDec | ataque instantáneo, caída exponencial | percusión, gotas, plucks |
| Exp Dec Rev | subida exponencial, pico brusco | aspiración, gotas invertidas |

## El azar de los granos

La fila inferior de mandos se encarga de la dispersión por grano. Es el conjunto de los capítulos 4, 5, 7 y 8:

| Mando | Qué dispersa | Capítulo |
| --- | --- | --- |
| OFFSET | desplazamiento de la posición | 4 |
| DIR | dirección del grano | 7 |
| PITCH | altura | 7 |
| RAND (LENGTH) | duración | 5 |
| RAND (PAN) | panorama | 8 |
| RAND (LEVEL) | volumen | 8 |

El clic derecho sobre **DIR** activa **Reverse Grains**: todos los granos se invierten a la vez. El interruptor se puede automatizar, y entonces la nube va ora hacia delante, ora hacia atrás, a tu orden. Otras dos dispersiones viven en los ajustes de la ventana (AMOUNT y SKEW), y las dos ranuras de Warp también tienen azar por grano (Rand Warp y Rand Warp 2 en la lista del eje Y).

## Altura

La altura de los granos la fijan los mandos comunes a todos los osciladores: **OCT** (octavas), **SEM** (semitonos), **FIN** (cents) y **CRS** (transposición gruesa continua, sin pasos, útil como destino de modulación). El clic derecho sobre OCT o SEM cambia el modo: **Semitones**, **Harmonics** (múltiplos de la fundamental), **Ratio** (relación de frecuencias, como en FM) y **Step** (pasos de afinación microtonal MTS-ESP; solo aparece con una fuente de afinación conectada).

Un consejo de la sección sobre el modo Sample: si el sample no suena en la nota C3, añade la nota al final del nombre del archivo tras un espacio o un guion bajo, por ejemplo «cucharilla F4.wav», y Serum entenderá la fundamental solo. El truco está descrito para el modo Sample, así que después de cargarlo en Granular comprueba si ha recogido la nota.

## Warp

El botón Warp muestra y oculta los ajustes de deformación. Por defecto Warp está desactivado; el modo se elige en el menú o con las flechas < >, y la profundidad con un mando. Los modos son los mismos que en las tablas de ondas: sincronización, curvaturas de la forma, filtros, unos quince tipos de distorsión, y además FM, PD, AM y modulación en anillo desde otro oscilador o filtro. Hay dos ranuras (en la lista del eje Y se llaman Warp y Warp 2).

Es decir, la nube de la cucharilla se puede modular en frecuencia con una sinusoide del OSC B. El segundo oscilador tiene que estar activado, pero su volumen puede estar a cero. Así salen nubes metálicas y de campana que un granulador corriente no da.

## Unison

UNISON apila varios osciladores granulares en una misma nota, cada uno ligeramente desafinado. Según la reseña de Databroth, hasta 16 voces ([Databroth](https://www.databroth.com/blog/serum-2-review)). Los ajustes del unísono:

- **MODE.** Cómo se desafinan las voces: Linear (de forma regular), Super (densamente, para «supersierras»), Exp (las voces lejanas se separan más), Inv (las voces graves se desafinan más), Random (al azar).
- **STACK.** El reparto de las voces por octavas. Opciones: Off, 12 (1-3x), 12+7 (1-3x), Center-12, Center-24.
- **DETUNE**, **RANGE**: la cantidad y el alcance de la desafinación.
- **BLEND.** El equilibrio entre las voces laterales y la central, 75 % por defecto.
- **WIDTH.** La anchura del unísono en estéreo.
- **START.** Un desplazamiento aleatorio de la posición inicial para cada voz. Las voces toman granos de lugares distintos y el sonido cobra vida.
- **SPAN.** Un desplazamiento fijo de la posición inicial entre voces.
- **SPAWN PATTERN.** Cuándo hacen nacer sus granos las voces del unísono. **Together** (por defecto): todas a la vez. **Even**: de forma regular en el hueco hasta el siguiente grano. **Exp**: con intervalos crecientes. **Random**: al azar.

Merece la pena recordar SPAWN PATTERN. Con Together, cuatro voces dan cuatro granos en el mismo milisegundo. Con Even, esas mismas cuatro voces llenan las pausas entre granos, y la nube se vuelve cuatro veces más espesa sin tocar DENS.

Cuidado con el procesador: unísono, densidad y polifonía se multiplican.

## Modulación

Lo más fácil es asignar arrastrando. Arrastra la pestaña ENV o LFO, o el selector de una macro, sobre el mando que quieras: junto al cursor aparece un signo más sobre un destino válido. Alrededor del mando aparece un halo azul de profundidad, y un pequeño halo arriba a la izquierda cambia la profundidad con una flecha. La profundidad también puede ser negativa. La segunda forma: clic derecho en el mando y elegir la fuente en el menú.

Lo que tienes a mano:

- **4 envolventes**, con sincronización al tempo.
- **Hasta 10 LFO** (del séptimo al décimo aparecen cuando se asigna el sexto), con editor de forma, modos caóticos Lorenz y Rossler y frecuencia de hasta 1000 Hz. Mil hercios permiten la modulación a frecuencia de audio del recuadro del [capítulo 9](../chast-2-parametry/09-modulyaciya.md): un LFO sobre la altura del grano empieza a dar timbre.
- **8 macros.** Una macro puede controlar varios mandos a la vez y puede ser a su vez destino de modulación. Son las combinaciones del [capítulo 9](../chast-2-parametry/09-modulyaciya.md).
- **Velocidad de pulsación y número de nota** como fuentes aparte.
- **Cualquier oscilador o filtro** como fuente: arrastra su cabecera sobre un mando.

Todas las conexiones se ven y se editan en la matriz de modulación (la página **Matrix**). Pasa el cursor por encima de una fuente y una ayuda emergente mostrará adónde está asignada.

## Cómo guardar el resultado

Pasa el cursor a la izquierda del logotipo de Serum y aparecerá un icono de onda. Arrástralo a una pista de audio de la DAW, y Serum renderizará en WAV la última nota o acorde tocados. La copia va a la carpeta Renders, y Alt-clic (Opción-clic) sobre el icono la abre. Así una nube pesada se convierte en un archivo de audio ligero.

## Recetas con la cucharilla

Empieza siempre desde un patch limpio: menú principal, **Init Preset**. Después, OSC A en Granular, la cucharilla cargada, los marcadores de inicio y final en el tintineo.

!!! success "Receta 10.1. Pad helado"

    1. LENGTH en modo Free, unos 120 ms. DENS en modo Grains, valor 4.
    2. SHAPE Hann. SCAN pequeño y positivo.
    3. OFFSET un poco, PITCH a 10–15 cents, RAND (PAN) a la mitad.
    4. UNISON 3, SPAWN PATTERN Even, START un poco.
    5. Envolvente de volumen: ataque de 1–2 segundos, release de 3–4 segundos.

!!! success "Receta 10.2. Gotas"

    1. LENGTH en modo Free, 20–40 ms. DENS en modo Free, 3–6 Hz.
    2. SHAPE ExpDec.
    3. OFFSET casi por todo el tintineo, RAND (LEVEL) notable.
    4. Un LFO en modo Lorenz sobre FIN, poca profundidad.

!!! success "Receta 10.3. Troceado rítmico"

    1. Clic derecho en SCAN, **Sample Length to BPM**, RATE a un compás.
    2. DENS en modo BPM Sync, 1/16.
    3. LENGTH en modo Percent, 50 %.
    4. DIR un poco. Automatiza **Reverse Grains** en el último tiempo del compás.

!!! success "Receta 10.4. Nube metálica"

    1. El pad de la receta 10.1.
    2. Activa OSC B, onda senoidal, volumen a cero.
    3. En OSC A, en Warp, elige FM (B) y sube la profundidad poco a poco.
    4. OSC B una quinta más arriba, y luego llévalo a intervalos no enteros con el mando FIN. La cucharilla se convierte en una campana de otro mundo.

!!! success "Receta 10.5. Destello de órgano"

    1. El pad de la receta 10.1.
    2. UNISON 4, STACK 12+7, si tu versión tiene esa opción.
    3. Macro 1 sobre LENGTH en positivo y sobre OFFSET en negativo. Giras la macro y la nube se agrupa en un órgano.

## Ejercicio 10.1. La cucharilla en el pad X|Y { .exercise }

1. Toma la receta 10.1, activa el modo de bucle **Manual** y la vista **X|Y Control**.
2. Asigna el eje Y a Grain Length.
3. Graba automatización en la DAW: un minuto de movimiento lento del punto.
4. Arrastra el render a la DAW y escúchalo aparte. Es tu primer tema tocado solo con el ratón.

## Fuentes del capítulo

- [Serum 2 User Guide, Xfer Records](https://xferrecords.com/manual/serum-2), versión del manual 1.0.3: páginas 77–103 (bucle, modo granular), 187–208 (modulación, macros), 350 (atajos de teclado).
- [What's New in Serum 2, Xfer Records](https://static.xferrecords.com/Serum%202%20What's%20New.pdf): 256 granos, 10 LFO hasta 1000 Hz, 8 macros, 4 envolventes.
- [Production Music Live](https://www.productionmusiclive.com/blogs/news/how-to-use-granular-synthesis-in-serum-2): carga arrastrando.
- [Databroth, reseña de Serum 2](https://www.databroth.com/blog/serum-2-review): frecuencia de los granos en el rango audible, 16 voces de unísono.
