<p class="eyebrow">Capítulo 12</p>

# Arturia Pigments

En Pigments el granulador está integrado en el motor de samples (Sample engine). El sintetizador tiene dos ranuras principales de motor, y en cada una puede ir uno de cinco tipos: Analog, Wavetable, Sample, Harmonic y Modal. Pon Sample en las dos ranuras y tendrás dos granuladores independientes en un mismo patch. El modo granular apareció ya en la segunda versión de Pigments, junto con el soporte de MPE.

!!! note "Sobre la versión"

    La descripción corresponde a Pigments 7.0.0. Los rangos marcados «según el manual de Pigments 2» proceden de la documentación de la segunda versión y pueden haber cambiado en versiones posteriores.

<figure markdown="span">
  ![Pigments: el motor Sample en modo Main; bajo la onda, la sección Granular activada con los mandos Density, Shape y Size, y debajo una fila de aleatorizadores Start, Pitch, Density, Direction, Size, Width y Volume](../images/12-1.jpg)
  <figcaption>Captura 12.1. El motor Sample en modo Main, con la sección granular activada. Interfaz de Pigments, © Arturia.</figcaption>
</figure>

## Cargar un sonido

El motor Sample tiene seis ranuras de samples, A–F, cuyas miniaturas se ven bajo el dibujo de la onda. Un clic en la miniatura de una ranura vacía abre el navegador de samples.

Tu propio sonido entra en Pigments a través de una carpeta. En el navegador de samples pulsa **Add Folder**, abajo a la derecha, e indica la carpeta con la cucharilla. La carpeta aparecerá en la columna izquierda del navegador junto a los bancos de fábrica. Formatos: WAV o AIFF, 16 o 24 bits, de 44,1 a 192 kHz. La duración del sample solo está limitada por la memoria RAM.

En el navegador puedes escuchar los samples antes de cargarlos: el icono de auriculares arriba de la columna derecha activa la escucha, y el mando de al lado fija su volumen. Un clic selecciona el sample y deja el navegador abierto; un doble clic lo carga y lo cierra.

## Tres vistas de la pantalla

Encima de la onda hay tres botones:

- **Main.** Bajo la onda se ve la sección granular. Solo se muestra el tramo entre los marcadores de recorte.
- **Edit.** La afinación, la dirección, el bucle y el volumen de la ranura. Aquí también se colocan los marcadores de recorte.
- **Map.** Cómo se reparten los samples de las seis ranuras por las teclas y la velocidad de pulsación.

## Dónde están los parámetros de la parte 2

| Parámetro de la parte 2 | Dónde en Pigments |
| --- | --- |
| Ventana de lectura (capítulo 4) | los marcadores de recorte Trim Start y Trim Stop en modo Edit |
| Posición (capítulo 4) | el mando **Start** de la sección Sample/Grain, la línea azul sobre la onda |
| Escaneo (capítulo 4) | el mando **Scan** |
| Dispersión de posición (capítulo 4) | el aleatorizador **Start** |
| Tamaño (capítulo 5) | el mando **Size** y sus modos |
| Envolvente (capítulo 5) | el mando **Shape** y el menú de formas |
| Densidad (capítulo 6) | el mando **Density**, modo Hertz o por tempo |
| Dispersión de densidad, sincronía (capítulo 6) | el aleatorizador **Density** |
| Altura (capítulo 7) | la sección Tune del motor y el Transpose de la ranura |
| Dispersión de altura, dirección (capítulo 7) | los aleatorizadores **Pitch** y **Direction** |
| Panorama, volumen (capítulo 8) | los aleatorizadores **Stereo** y **Volume** |
| Límite de granos (capítulo 8) | el campo **Limit** en la cabecera de la sección |

## Activar el modo granular

En modo Main, bajo la onda está la sección **Granular** con un botón de activación en su cabecera. Mientras está desactivada, el motor funciona como un sampler normal. A la derecha de la cabecera está el campo **Limit**: el máximo de granos solapados a la vez. El manual de Pigments 7 lo considera una de las principales formas de contener el procesador con densidades altas. Según el manual de Pigments 2, el límite va de 3 a 256.

La fila superior de mandos fija lo principal de los granos; la inferior los dispersa al azar.

## Start: la posición

En Pigments, la posición vive junto a la sección granular, en la sección **Sample/Grain**. El mando **Start** fija el punto desde el que suena el sample o nacen los granos, dentro de los límites de los marcadores de recorte. Sobre la onda es una línea vertical azul. Ahí mismo está el mando **Volume**: el volumen del sample o del grano.

La sección vecina, **Output**, se encarga del motor en conjunto: el volumen general y **Filter Mix**, el reparto de la señal entre los filtros 1 y 2.

## Scan

Scan mueve el «cabezal» por el flujo de granos. El manual da puntos de referencia:

- **Las 12:** no hay escaneo, congelación.
- **Más:** el punto de inicio avanza en el tiempo.
- **Menos:** hacia atrás.
- **±100 %:** la velocidad de escaneo es igual a la velocidad de reproducción de los granos. Los demás porcentajes aceleran o frenan el escaneo respecto a esa velocidad.

La fórmula de estiramiento del [capítulo 4](../chast-2-parametry/04-istochnik-i-poziciya.md) funciona si tomas el 100 % como la velocidad original. El manual aconseja no adivinar, sino escuchar.

## Density

Density fija la frecuencia con que nacen los granos. Un clic en el óvalo azul bajo el mando abre el menú **Density Type**: **Hertz** (libre, en hercios) y opciones por tempo: **Sync**, **Straight only**, **Triplets only**, **Dotted only**. En modo Hertz, el número del mando son directamente granos por segundo: 1 Hz significa un grano por segundo.

Un consejo del manual: aprende con poca densidad, donde se oye mejor lo que pasa.

## Shape: la envolvente del grano

Un clic en el icono de forma sobre el tercer mando abre el menú **Grain Envelope Shape**: Triangle, Trapezoid, Tukey, Gaussian, Sinc, Expodec, Rexpodec, Smooth Exp. El menú elige la forma, y el mando **Shape** la deforma aún más. Según el manual de Pigments 2, el mando lleva la forma de «suave» a «con clics», y se puede modular.

| Forma | Cómo es | Capítulo 5 |
| --- | --- | --- |
| Triangle | subida recta, bajada recta | triángulo |
| Trapezoid | subida, meseta, bajada | trapecio |
| Tukey | centro plano, bordes redondeados | trapecio de bordes suaves |
| Gaussian | campana | gaussiana |
| Sinc | centro afilado, colas oscilantes | un color especial |
| Expodec | ataque brusco, caída exponencial | percusiva |
| Rexpodec | subida exponencial, final brusco | percusiva invertida |
| Smooth Exp. | exponencial suavizada | percusiva suave |

La diferencia entre formas se oye sobre todo con granos cortos: compáralas de oído con una duración de 10–30 ms.

## Size: duración del grano

El menú bajo el mando Size elige en qué se mide:

- **Percentage.** Un porcentaje del tamaño máximo del grano.
- **Time Division.** Una fracción del periodo de la densidad actual. Es el solapamiento del [capítulo 2](../chast-1-zerno/02-anatomiya-zerna.md): la duración del grano está ligada a la distancia entre granos, y el carácter de la nube se mantiene con cualquier densidad.
- **Straight Only**, **Triplets Only**, **Dotted Only.** Por tempo: divisiones normales, tresillos, puntillos.
- **Time.** Tiempo absoluto en milisegundos. Según el manual de Pigments 2, de 1 ms a 1 segundo.

El manual recuerda aparte: los granos se solapan, y eso es una parte importante del carácter granular. Cuántos se solapan como máximo lo decide Limit.

## Aleatorizadores

La fila inferior de mandos añade azar. La mayoría tiene un menú de dirección: un botón o un icono junto al mando.

| Mando | Qué dispersa | Opciones del menú | Capítulo |
| --- | --- | --- | --- |
| Start | la posición: los granos nacen antes, después o alrededor del punto de inicio | Before, After, Both | 4 |
| Pitch | la altura de los granos; según el manual de Pigments 2, hasta 3 octavas | Up, Down, Both | 7 |
| Density | la densidad: añade o quita granos | More Dense, Less Dense | 6 |
| Direction | la proporción de granos invertidos | ninguna | 7 |
| Size | la duración de los granos | Shorter, Longer, Both | 5 |
| Stereo | el panorama | Pan, Width | 8 |
| Volume | el volumen de los granos | ninguna | 8 |

Dos detalles:

- **Direction**, según el manual de Pigments 2: la posición del todo a la derecha toca los granos hacia delante, la del todo a la izquierda al revés, y el centro da mitad y mitad.
- **Stereo en modo Width** reparte por el estéreo los granos ya aleatorizados. Si no hay otras dispersiones, todos los granos se quedan en el centro aunque Width esté al máximo. El manual de Pigments 2 precisa: Width añade una diferencia entre los canales izquierdo y derecho para las dispersiones de Size, Pitch y Start. Así que Width solo funciona junto con otros aleatorizadores.

## Seis samples y granos

Esta es una posibilidad que los otros dos instrumentos del libro no tienen. El modo **Map** reparte las ranuras A–F, y dos de sus opciones funcionan grano a grano:

- **Round Robin.** Las ranuras suenan por turnos. Con la sección granular activada, cada grano nuevo se toma del siguiente sample.
- **Random.** El sample se elige al azar. Con la sección granular, cada grano se toma de una ranura aleatoria.

Carga seis grabaciones distintas en las seis ranuras y la nube las irá entretejiendo grano a grano. Los demás modos de Map: **Single** (un solo sample en todo el teclado), **Key Map** (ranuras repartidas por el teclado), **Key/Velo Map** (por teclas y dos capas de velocidad), **Sample Pick** (el sample lo elige un mando, que se puede modular).

## Modo Edit: afinación y marcadores

Elige una ranura con el botón A–F y ajusta:

- **Tune.** **Transpose** ±36 semitonos, **Fine** ±1 semitono en pasos de un cent, **Root Note** (la nota fundamental del sample).
- **Playback.** **Play Mode**: hacia delante (Normal) o al revés (Reverse). **Loop** activa el bucle, **Loop Mode** elige hacia delante (Forward) o péndulo (F&B), **Loop Fade** hace un fundido del bucle (solo en Forward), y el botón **r** mantiene el bucle al soltar la nota.
- **Mix.** **Gain** y **Pan** de la ranura.
- **Slot.** **Copy** copia el sample en otra ranura para tenerlo con otros ajustes. **Reset** restablece la ranura, **Clear** la vacía.

Los marcadores de recorte (Trim Start y Trim Stop) son líneas verticales con tiradores triangulares arriba; los del bucle tienen los tiradores abajo. Es la ventana de lectura del [capítulo 4](../chast-2-parametry/04-istochnik-i-poziciya.md): encierra la cucharilla en el tintineo. El botón **Snap** sobre la pantalla imanta los marcadores a los cruces por cero de la onda y evita los clics. Con samples estéreo la tolerancia es mayor, porque puede que no tengan ceros exactos.

Root Note se ajustará solo si la nota fundamental está escrita en los metadatos del archivo WAV. Los marcadores de recorte y de bucle también se toman de los metadatos, si los hay.

## El Tune del motor y el filtro del sample

La sección Tune del motor fija la afinación general de las voces. En el motor Sample tiene un mando **Filter**: un filtro directamente sobre el sample, antes de todo el procesamiento. A la izquierda de las 12 baja el corte de un filtro paso bajo, a la derecha sube el corte de un filtro paso alto, y en las 12 no hay filtro. Útil para quitar el retumbo o el siseo de la cucharilla antes del granulador.

## Unison y Shaper

Bajo la sección Tune está la sección Unison/Shaper. Un clic en su nombre abre el menú de modos.

- **Unison, Chord, Super.** Funcionan igual que en los demás motores. En modo Chord, las voces del unísono se cuantizan por semitonos en uno de 12 acordes clásicos: una tecla da una nube-acorde. Para el motor analógico, el manual indica hasta 8 voces de unísono.
- **Resonator.** Seis filtros pasa banda en paralelo: el primero afinado según la nota y la sección Tune, los demás en armónicos de él. En modo granular el resonador sigue la altura de los granos, incluso con altura aleatoria. Mandos: **Coarse** (afinación), **Wet/Dry**, **Resonance** (resonancia y duración del tintineo), **Inharm**: en cero los resonadores están en los armónicos; por encima de cero se separan; por debajo se juntan. Una afinación inarmónica da campanas y metal.
- **BitCrush.** **Decimate** (reducción de la frecuencia de muestreo), **Bit Depth** (profundidad de bits), **Key Track** (Decimate sigue a la tecla).
- **Modulation.** **Freq Mod** (FM lineal a través de cero) y **Ring Mod**. La fuente de modulación: el oscilador modulador del motor u otro motor principal.

## Modulación

La modulación se asigna arrastrando. En la franja de vista general de la modulación, pasa el cursor sobre el nombre de una fuente y cambiará a **Assign**. Arrástralo al mando que quieras: todos los destinos válidos se marcan en gris. Después cambias la profundidad en el anillo alrededor del mando.

Fuentes por pestañas:

- **Keyboard:** velocidad de pulsación, aftertouch, seguimiento de teclado, ruedas.
- **Envelopes:** tres envolventes, la primera siempre en el volumen. Según el manual, todas las envolventes de Pigments pueden trabajar a frecuencia de audio.
- **LFO:** tres.
- **Functions:** tres funciones multipunto, curvas complejas de cualquier forma.
- **Random:** tres generadores con los modos Random, Voice Modulator, Turing, Sample & Hold, Binary.
- **Combinate:** mezclan otras fuentes.
- **Macros:** cuatro macros, M1–M4.

El gran truco granular de la modulación: en los LFO y las Functions, el menú de reinicio (Retrig Source) tiene las opciones **Engine 1 Grain** y **Engine 2 Grain**. Aparecen cuando en la ranura hay un motor Sample con la sección granular activada. Un LFO reiniciado por cada grano da a cada grano su propia curva de modulación. Pon una Function así sobre el filtro y cada grano tendrá su propia caída de filtro.

## Extra: el excitador granular de Modal

En el motor Modal, un modelo físico de objetos resonantes, hay un excitador Friction con un modo **Granular**. Toma parte de los ajustes del granulador de Sample con valores fijos y golpea el resonador con granos. Eliges el tipo de sample fuente, el volumen (**Volume**), el desplazamiento de altura (**Tune**) y la frecuencia de los granos (**Rate**, en hercios o por tempo). El manual aconseja modular Rate con un LFO, una Function o un Random. Todo un sintetizador se basa en este principio: Kaivo, de Madrona Labs, donde el granulador funciona como el «toque» del intérprete y excita modelos físicos de resonadores y de un cuerpo común ([madronalabs.com](https://madronalabs.com/products/kaivo)).

## Recetas con la cucharilla

En todas: el motor Sample en la ranura 1, la cucharilla cargada con Add Folder, modo Main, la sección granular activada, los marcadores de recorte en el tintineo.

!!! success "Receta 12.1. Pad"

    1. Start en el centro del tintineo. Scan un poco a la derecha de las 12.
    2. Density en modo Hertz, unos 30.
    3. Size en modo Time, unos 120 ms. Forma Gaussian.
    4. Aleatorizadores: Start (Both) un poco, Pitch (Both) solo un toque, Stereo (Pan) a la mitad, Volume un poco.
    5. Envelope 1: ataque largo, release largo.

!!! success "Receta 12.2. Gotas"

    1. Density en modo Hertz, 3–6.
    2. Size en modo Time, 20–40 ms. Forma Expodec.
    3. Aleatorizadores: Start (Both) fuerte, Density (Less Dense) notable, Volume notable.

!!! success "Receta 12.3. Campanas"

    1. El pad de la receta 12.1.
    2. En Unison/Shaper elige Resonator, Wet/Dry en el centro.
    3. Sube Resonance para un tintineo largo.
    4. Lleva Inharm hacia arriba: la cucharilla sonará a campanas. El resonador recogerá el aleatorizador Pitch.

!!! success "Receta 12.4. Seis cucharillas"

    1. Graba cinco sonidos más: la cucharilla contra un vaso, contra una olla, contra la mesa, contra una botella, contra el alféizar.
    2. Carga los seis en las ranuras A–F.
    3. En modo Map elige Random.
    4. Activa la sección granular: cada grano se toma de una grabación aleatoria y la nube se convierte en una cocina.

!!! success "Receta 12.5. Un grano con su propio filtro"

    1. Density por tempo, Straight only, 1/16. Size en modo Time Division.
    2. Function 1: una caída corta del máximo a cero. Retrig Source: Engine 1 Grain.
    3. Asigna la Function 1 a la frecuencia del filtro 1.
    4. Cada grano recibe su propio barrido de filtro, y la rejilla regular de semicorcheas empieza a hacer «cuac».

## Ejercicio 12.1. Un ajuste, seis ranuras { .exercise }

1. Monta la receta 12.1 con la cucharilla.
2. Con el botón Copy duplica la cucharilla en las ranuras B y C, y en cada una cambia Transpose: cero, más una quinta, más una octava.
3. Modo Map: Round Robin. Los granos tomarán por turnos las tres transposiciones del mismo sonido.
4. Compáralo con el modo Random. Graba las dos versiones y escúchalas una tras otra.

## Fuentes del capítulo

- Manual de Pigments 7, Arturia (versión del producto 7.0.0, revisión del 15 de diciembre de 2025): capítulo 9, sobre el motor Sample (págs. 105–121), apartado 11.4.3, sobre el excitador granular (págs. 142–143), capítulos 19–20, sobre la modulación, apartado 7.2, sobre los modos de unísono, apartado 1.1.2, sobre la estructura del sintetizador.
- Manual de Pigments 2, Arturia: apartado 5.4.7 Granular Section (págs. 77–78): los rangos de Limit, Size y Pitch, el comportamiento de Direction y Width.
