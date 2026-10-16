<p class="eyebrow">Capítulo 11</p>

# Ableton Granulator III

Granulator III lo escribió Robert Henke, el mismo que creó el primer Granulator, junto con el equipo de Ableton: Marco Tonni (interfaz, implementación, gestión del proyecto), Eric Carl y Kostya Kazhev (diseño de la interfaz). Es el tercer instrumento de la serie, y Henke lo considera completamente nuevo. Henke enumera lo principal: soporte completo de MPE, una matriz de modulación ampliada, una interfaz simplificada, captura de sonido directamente en el instrumento sin dispositivos adicionales y un modo monofónico.

!!! note "Sobre la versión"

    Granulator III se sigue actualizando junto con Live, así que en versiones nuevas los detalles pueden diferir de lo descrito.

**Qué hace falta para usarlo.** Henke escribe que el instrumento necesita Live 12 Suite y que se descarga desde ableton.com, en tu cuenta. La página del pack en la web de Ableton da requisitos más amplios: Live 12 Standard con Max for Live, versión 12.0 o posterior. El pack incluye 59 presets, un set de Live y una selección de samples adecuados para granular. El antiguo Granulator II sigue disponible, pero según Henke lo más probable es que ya no se actualice.

**Instalación.** En el navegador de Live abre la sección Packs, busca Granulator III entre los packs disponibles (Available Packs) e instálalo. Tras la instalación aparecerá en la sección Packs, arriba del navegador.

**Push 3 Standalone.** El instrumento funciona también ahí, pero con limitaciones: no hay dibujo de la onda, los samples no se pueden cambiar desde el propio Push (solo tocar presets hechos en Live) y la captura de sonido no funciona.

<figure markdown="span">
  ![Granulator III en modo Classic: la onda de un sample cargado y, debajo, los mandos Position, Scan, Grain Size, Shape, Variation y Transpose](../images/11-1.jpeg)
  <figcaption>Captura 11.1. Granulator III con un sonido cargado, modo Classic. Interfaz de Granulator III, © Ableton.</figcaption>
</figure>

## Cómo está organizada la interfaz

La interfaz tiene tres zonas.

- **Pantalla principal.** Muestra o bien el sample (con marcas del inicio de los granos, la posición actual y el tamaño del grano, más los controles de captura), o bien las dos envolventes, el LFO y el filtro.
- **Pantalla de modulación.** Debajo de la principal. Muestra las modulaciones del parámetro principal seleccionado, y un pequeño triángulo indica cuál es. El conjunto de modulaciones cambia de un parámetro a otro: así el motor trabaja de forma más económica y cada conexión se puede ajustar con más precisión.
- **Pantalla de parámetros.** Los mandos principales.

La pantalla principal se cambia con los botones **Display Selector** de la izquierda o con el modo **Auto**. En Auto, un clic en cualquier parámetro a la izquierda de **Variation** muestra el sample, y un clic a la derecha muestra las envolventes. Un sample estéreo se dibuja solo con el canal izquierdo. Los botones **(+)** y **(−)** de abajo a la derecha acercan y alejan la onda alrededor de Position, y **(ALL)** vuelve a mostrar todo el archivo.

## Cargar un sonido

Arrastra la cucharilla al instrumento desde el navegador de Live, desde Session o desde Arrangement. Funciona incluso cuando la pantalla principal muestra las envolventes; simplemente no habrá dibujo.

Al cargar y al capturar, el sonido se normaliza: el punto más fuerte se sube a 0 dB. Una grabación floja de la cucharilla sonará a plena potencia sin hacer nada más.

## Dónde están los parámetros de la parte 2

| Parámetro de la parte 2 | Dónde en Granulator III |
| --- | --- |
| Posición (capítulo 4) | **Position**, en porcentaje, o un clic sobre la onda |
| Escaneo (capítulo 4) | **Scan**: una rampa de posición desde la pulsación de la nota |
| Dispersión de posición (capítulo 4) | **Variation** → Position |
| Entrada en vivo (capítulo 4) | **Capture** |
| Tamaño (capítulo 5) | **Grain Size**, de 2 ms a 2 s |
| Envolvente (capítulo 5) | **Shape**, con su propio comportamiento en cada modo |
| Densidad (capítulo 6) | en Classic la fija el tamaño del grano, en Cloud el mando **Density** |
| Altura (capítulo 7) | **Transpose** y **Tune** |
| Dirección (capítulo 7) | **Reverse** en modo Loop |
| Dispersión de altura (capítulo 7) | **Variation** → Transpose, solo Cloud |
| Panorama (capítulo 8) | **Spread** |
| Dispersión de volumen (capítulo 8) | **Variation** → Volume |
| Voces (capítulo 8) | 8 voces, modo mono, **Glide**, **Hold** |

## Tres modos de grano

Es lo primero que hay que elegir: del modo depende cómo funcionan Grain Size, Shape y Variation.

**Classic.** Basado en Granulator II, el más flexible y expresivo. Dos granos solapados por canal estéreo, con una envolvente muy flexible. Aquí la densidad no tiene mando propio: cuanto más corto es el grano, más a menudo se suceden. Según Henke, un grano de 2 ms significa mil o más granos solapados por segundo, y el sonido se va al ruido o a un tono agudo. Es el flujo síncrono del [capítulo 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md).

**Loop.** Lo más parecido a un sampler normal: reproducción con fundidos cruzados y modulación aleatoria de la posición. Puede tocar fragmentos largos de la fuente sin cambios. Adecuado para material rítmico.

**Cloud.** Capas de hasta 20 granos sin sincronizar. Henke lo destaca para texturas monofónicas densas. Es la nube asíncrona del [capítulo 2](../chast-1-zerno/02-anatomiya-zerna.md).

## Position

Position decide qué parte del sample toca cada grano. La escala va en porcentaje, así que la posición se mantiene relativa al archivo: cargas otro sample y la posición sigue, por ejemplo, en un tercio. Se fija con el mando o con un clic directamente sobre la onda.

A Position la modulan el LFO, la Envelope 2, el número de nota (**Key**), la velocidad de pulsación (**Vel**) y los tres parámetros MPE. Además del azar por grano a través de Variation.

## Scan

En Granulator III el escaneo funciona distinto que en Serum. Es una rampa que mueve la posición desde el momento en que se pulsa la nota.

- **Loop desactivado.** La rampa se detiene en el punto final.
- **Loop activado.** Al llegar al final, la rampa vuelve a empezar.
- **Distance.** El punto final se fija como una distancia desde Position.

Si Position más el valor actual del escaneo pasa del 100 %, la posición vuelve al principio del archivo. Henke lo recomienda para loops rítmicos.

La velocidad de escaneo puede depender de Key, Velocity y MPE Slide, y la modulan la Envelope 2 y el LFO. Con **Key** activado, la velocidad de escaneo crece con la altura de la nota, y en cada nota la proporción del escaneo es la misma. Desactivado, la velocidad es la misma en todas las notas. Henke aconseja tocar un acorde y activar y desactivar Key: la diferencia se oye al instante.

Junto con Transpose y Grain Size, el escaneo da estiramiento temporal, cambio de altura y deformaciones complejas del tiempo.

La escala del escaneo funciona como un multiplicador de velocidad. En 0 la posición está quieta, en 1 el cursor avanza a la velocidad del propio sample, en 0,25 cuatro veces más despacio, y el sonido se convierte en una textura. Así que la fórmula de estiramiento del [capítulo 4](../chast-2-parametry/04-istochnik-i-poziciya.md) funciona aquí directamente: s es el valor de Scan.

## Grain Size

El parámetro principal del motor. Un grano va de 2 ms a 2 s. A 2 ms el sonido es ruidoso, o agudo y tonal; a 2 s se leen fragmentos largos de la fuente antes de que empiece el siguiente grano.

Grain Size depende de Key, Velocity, MPE Slide y Press, lo modulan el LFO y la Envelope 2, y Variation añade azar al tamaño de cada grano. Cuando el tamaño se modula, el nuevo valor no entra enseguida: el instrumento intenta terminar primero el grano actual para evitar clics. Cómo exactamente, depende del modo.

Un detalle sobre el que advierten los dos videotutoriales: Grain Size mide un trozo del sample, y la duración audible del grano depende de la velocidad de lectura. Nota más aguda, el sample se lee más deprisa y el mismo grano suena más corto. En el segundo tutorial, un grano de 76,1 ms con una transposición de +12 semitonos suena la mitad de largo.

Grain Size no se sincroniza con el tempo. Una solución del segundo tutorial: calcular la duración del tiempo en milisegundos y escribirla a mano. Una negra dura 60 000 / BPM milisegundos: a 120 BPM son 500 ms, una corchea 250 ms. El grano cae exactamente en el tiempo cuando la transposición está a cero y el vínculo de Transpose con las teclas está desactivado (más abajo).

En esta misma sección viven dos mandos de modo:

- **Reverse** (solo Loop). La probabilidad de que un grano suene al revés. El 100 % significa que todos los granos van invertidos.
- **Density** (solo Cloud). Cuántos granos suenan a la vez: hasta 20 por canal estéreo y por nota.

## Shape

Shape es la envolvente del grano, y en cada modo es distinta.

- **Classic.** Un solo mando recorre toda la gama del [capítulo 5](../chast-2-parametry/05-razmer-i-ogibayushchaya.md): desde un ataque brusco con caída exponencial (percusiva), pasando por un fundido suave (campana), hasta una subida exponencial con corte brusco (percusiva invertida).
- **Loop.** Shape fija la duración del fundido al principio y al final del grano. Cero significa un loop sin fundido; el 100 % significa que el fundido no para.
- **Cloud.** La forma no se ajusta: así se ahorra procesador.

A Shape la modulan MPE Slide y Press, el LFO y la Envelope 2. Un detalle importante: la forma se calcula al principio de cada grano nuevo. Por eso granos largos más un LFO rápido y regular sobre Shape dan texturas rítmicas complejas: cada grano recibe su propia forma. Las líneas turquesa que corren sobre la onda muestran cómo actúa la forma sobre los granos en ese momento.

## Variation

Variation se encarga del azar por grano. El mando general fija cuánto azar hay en total, y los parámetros aparte deciden a qué afecta: **Position**, **Grain Size**, **Transpose** y **Volume**. Henke describe lo que sale: los loops estáticos cobran vida, con granos pequeños el sonido se vuelve ruidoso, los loops rítmicos se deshacen en una locura granular.

Selecciona el mando Variation y en la pantalla de modulación aparecerán mandos naranjas de destino. Por defecto solo está subido Position. Transpose aparece ahí abreviado: TR.

Detalles que conviene saber:

- **La dispersión de posición es absoluta:** de cero a dos segundos, sea cual sea la duración del sample. Y siempre positiva: los granos solo saltan hacia delante.
- **Las demás dispersiones son bilaterales.**
- **La dispersión de altura por ahora solo funciona en modo Cloud**, y los valores negativos no tienen efecto. Henke escribe que esto puede cambiar en futuras actualizaciones.

A Variation la modulan MPE Slide y Press, el LFO, la Envelope 2, Key y Velocity. Por ejemplo, la velocidad de pulsación sobre Variation: las notas suaves son limpias, las fuertes se desmoronan.

## Transpose, Tune y los detalles de la afinación

**Transpose** fija la afinación general de los granos, **Tune** el ajuste fino. Normalmente la altura sigue a las notas con **Key** al 100 %, pero la escala se puede cambiar. A la altura la modulan Note Pitch Bend, MPE Press, la Envelope 2, el LFO y un valor aleatorio en el momento de pulsar la nota. La dispersión de altura por grano está duplicada aquí por comodidad.

**La afinación del sample.** Granulator, como cualquier sampler, supone que en el archivo cargado suena la nota C. Pulsas C y el sample suena a su velocidad original. Si la cucharilla suena en E, baja Transpose −4 semitonos y ajusta con Tune. La forma más fácil de saber la nota de la cucharilla es con un afinador: pon el Tuner de Live justo después de Granulator III y toca C.

**Una sola altura en todas las teclas.** Para drones y troceados, la transposición por teclas suele estorbar. Selecciona Transpose y, en la pantalla de modulación, pon Key a 0: todas las notas sonarán a la misma altura. El mismo vínculo Key al 100 % está en la frecuencia del filtro, y también conviene ponerlo a cero, o el filtro se moverá con cada nota. El pitch bend sigue moviendo la altura, y se puede dibujar como automatización en un clip.

Henke explica la afinación aparte, y vale la pena contarlo. Un sample en la nota C3 suena a su velocidad original. Si en él suena C3, todo es sencillo. Si suena C#3, bájalo un semitono. Pero en la síntesis granular los trozos cortos se repiten muy a menudo, y la altura audible se convierte en una extraña mezcla de la altura de la fuente y el tamaño del grano. No se puede predecir de forma sencilla, hay que probar. Los mandos que necesitas están en las secciones Transpose y Grain Size.

**El truco de Henke: la altura a partir del tamaño del grano.** Pon **Transpose Key** a 0 y **Grain Size Key** a 100. Ahora todas las notas tocan el sample a la misma altura, pero el tamaño del grano cambia con la nota, y nace una sensación clara de altura. Para quedar afinado, Henke aconseja un tamaño de exactamente 3,822 ms. El número no es casual: un periodo de 3,822 ms corresponde a una frecuencia de unos 261,6 Hz, el do central (en Live se llama C3). Es una demostración directa del [capítulo 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md): la nota nace de la frecuencia de los granos.

**MPE y microtonalidad.** Si trabajas con material tonal y quieres que el instrumento reciba correctamente el pitch bend MPE y las afinaciones de Live 12, pon **Note Pitch Bend** en la sección Transpose a 48 semitonos.

## Spread

Spread desafina los canales izquierdo y derecho de los granos. Incluso un valor pequeño da un chorus estéreo, pero lo principal es otra cosa: los granos de la izquierda y de la derecha dejan de coincidir en el momento de inicio, y todas las dispersiones de Variation reciben valores distintos en cada canal. El sonido se vuelve muy estereofónico. Los valores altos dan una altura claramente distinta a izquierda y derecha. A Spread la modulan Velocity, MPE Slide y Pressure, la Envelope 2 y el LFO.

## LFO

Un LFO estéreo con tres formas de trabajar:

- **sincronizado al tempo:** de 1/16 a 2 compases;
- **libre:** de 0,01 a 20 Hz;
- **en el rango de audio:** para efectos tipo FM y ruidos complejos. Es la modulación a frecuencia de audio del recuadro del [capítulo 9](../chast-2-parametry/09-modulyaciya.md).

Formas: Sine, Triangle, Up, Down, Rect, Sample & Hold (escalones aleatorios) y dos tipos de azar suave, Rand y Move. La forma se elige en el menú o haciendo clic en su icono. El LFO arranca desde una fase dada (**Phase**) o desde una aleatoria.

- **Stereo.** El desfase entre canales: 0° (mono), 90° (los canales se mueven desacompasados; Henke lo llama «completamente fuera de fase»), 180° (mono invertido).
- **La frecuencia del LFO** la modulan Note Pitch Bend y Slide, la Envelope 2, Key, Velocity y un valor aleatorio al pulsar la nota.
- **La profundidad del LFO** la modulan Slide y Pressure, la Envelope 2, Key y Velocity. La opción **Use Mod Wheel** añade escalado por la rueda de modulación. Henke indica MIDI CC 2, aunque según el estándar MIDI la rueda de modulación es CC 1.
- **Quant.** Cuantiza la salida del LFO antes del ajuste de profundidad y produce una modulación escalonada. El ejemplo de Henke: con Quant 0,5, una rampa da tres valores (0; 0,5; 1) y un seno cinco (de −1 a 1 en pasos de 0,5). La diferencia se debe a que las rampas Up y Down son unipolares (de 0 a 1), y las demás formas, bipolares (de −1 a 1).

El mando Stereo funciona especialmente bien sobre Position y Grain Size: con desfase, el LFO mueve la posición y el tamaño del grano de forma distinta en el oído izquierdo y en el derecho, y la nube se desdobla en dos.

## Filtro

Dos filtros SVF en serie, nueve modos: 24 dB LP, 12 dB LP, 12 dB LP a 12 dB HP, 12 dB LP con notch, un notch, dos notch, 12 dB HP con notch, 12 dB HP, 24 dB HP. Un clic en el icono pasa por los tipos. El filtro se puede desactivar para ahorrar procesador.

- **Width.** En todos los modos salvo 12 dB LP, 12 dB Notch y 12 dB HP, desplaza la frecuencia del segundo filtro. Suelen ser útiles los valores negativos: por ejemplo, en la pareja LP y notch, el notch solo funciona si está por debajo del corte del LP.
- **Resonance.** En los modos dobles solo actúa sobre el filtro principal; en el segundo es fija.
- **Modulación de frecuencia:** los tres parámetros MPE, la envolvente de volumen y la Envelope 2, Key, Velocity y el LFO.

Por defecto, la frecuencia del filtro está ligada a Key al 100 %: el filtro sigue a la transposición y sigue quitando o realzando los mismos armónicos de la fuente en cualquier nota.

## Volumen y envolventes

Al volumen lo modulan Key, Velocity, MPE Slide y Press y el LFO. La dispersión de volumen por grano está duplicada aquí.

Hay dos envolventes. **Envelope 1** controla el volumen y puede mover la frecuencia del filtro. **Envelope 2** es una fuente general para multitud de parámetros. Las dos tienen ataque, caída y release muy largos, para sonidos que cambian despacio. Cada una tiene su propio parámetro **Key**: la velocidad de la envolvente depende de la altura de la nota, y las notas agudas pueden apagarse antes, como en los instrumentos acústicos.

Un truco del segundo tutorial: la Envelope 2 con una caída de alrededor de un segundo y profundidad negativa a la vez sobre Shape y Grain Size. En el ataque de la nota los granos son afilados y pequeños, y luego vuelven a lo normal. El sonido gana un clic al principio, como los instrumentos de cuerda pulsada.

## Voces, Glide y Hold

- **La polifonía** es fija, 8 voces.
- **Modo mono.** En él **Glide** actúa sobre todas las modulaciones a la vez, y las notas fluyen suavemente unas en otras. Glide solo funciona con notas solapadas, con un tiempo de 0 a 2 segundos.
- **Hold.** Mantiene las últimas notas tocadas, como en un arpegiador. Tocas un acorde, sueltas las teclas y giras los mandos con las dos manos. Una nota nueva tras soltar del todo todas las teclas borra las mantenidas. En Granulator II, Hold funcionaba de otra manera.

## Capture: entrada en vivo

Capture convierte Granulator III en un granulador de sonido en vivo.

1. Activa la captura con el botón **I/O**. El sample todavía no cambia; solo aparece la interfaz de grabación.
2. Elige la fuente con los dos menús **Source**. Puedes tomar incluso la salida del propio Granulator III y remuestrearte a ti mismo.
3. El instrumento graba continuamente los últimos segundos de sonido; cuántos, lo fija el menú **Length**.
4. Pulsa **Capture**: el sample actual se sustituye por una instantánea de los últimos segundos. Los ajustes de los mandos no cambian.
5. **Cancel** devuelve el último sample cargado, aunque hayas pulsado Capture muchas veces.
6. **Save** abre un diálogo de guardado: el instrumento escribirá el archivo y lo volverá a cargar como un sample normal.

Importante: una captura sin guardar se perderá la próxima vez que abras el proyecto, y en su lugar se cargará el último sample cargado.

La fuente de captura puede ser otra pista de Live o una entrada externa: un micrófono, un sintetizador de hardware. El segundo menú Source elige el punto de donde se toma la señal; en el segundo tutorial se elige la señal después de los efectos.

**Remuestreo generativo** (segundo tutorial). Granulator III está en su propia pista y captura una pista vecina con batería. Un dispositivo LFO en modo cuadrado está asignado al botón Capture y lo pulsa cada dos compases, así que el granulador renueva su material solo. Con Scan a 1, lo capturado suena casi tal cual; con Scan a 0,25 se convierte en textura. Añade un LFO sobre Grain Size y Shape y tendrás un instrumento para el directo que se alimenta a sí mismo.

## Recetas con la cucharilla

Un consejo del primer tutorial: ajusta los mandos con un sample y luego cambia de sample y escucha. El sonido lo decide en gran parte la fuente, y un mismo ajuste con archivos distintos da resultados muy diferentes.

!!! success "Receta 11.1. Pad en Classic"

    1. Modo Classic. Position en el centro del tintineo.
    2. Grain Size de unos 100 ms, Shape en el centro (un fundido suave).
    3. Variation un poco, sobre Position.
    4. Spread solo un toque, para el estéreo.
    5. Envelope 1: ataque de 2 segundos, release de 4 segundos. Activa Hold, toca un acorde y suelta las teclas.

!!! success "Receta 11.2. La cucharilla-sintetizador"

    1. Modo Classic, Position en el tintineo.
    2. Transpose Key 0, Grain Size Key 100, Grain Size 3,822 ms.
    3. Toca una melodía: la altura la fija el tamaño del grano, y el color, el tintineo de la cucharilla.
    4. Añade un poco de Variation sobre Grain Size, y el tono se volverá áspero.

!!! success "Receta 11.3. Ritmo roto en Loop"

    1. Modo Loop. Grain Size de 100–200 ms.
    2. Reverse al 30 %.
    3. LFO sincronizado al tempo, forma Sample & Hold, 1/16, sobre Position.
    4. Shape más bajo, para que los fundidos no emborronen los ataques.

!!! success "Receta 11.4. Una nube en Cloud"

    1. Modo Cloud. Density de unos 12.
    2. Grain Size de 150–300 ms.
    3. Variation notable: Position a 300–500 ms, Transpose a un par de semitonos.
    4. Spread más alto. Encima, una reverb de cola larga.

!!! success "Receta 11.5. Troceado por teclas"

    1. Carga un sonido largo: una frase, una grabación de campo, una sesión de improvisación con un sintetizador.
    2. Transpose Key a 0, Key de la frecuencia del filtro a 0.
    3. Selecciona Position y, en la pantalla de modulación, sube Key. Ahora cada tecla toma su propio trozo del sample. Se parece al troceado de Simpler, pero sin atarse a los ataques. Cuánto se desplaza la posición por tecla no se ve en la escala: ajústalo de oído.
    4. Activa mono y Glide. Al tocar legato, la posición flotará de un trozo a otro.
    5. Modo Cloud y un Grain Size más pequeño: el cambio de posición se oirá antes.

## Ejercicio 11.1. Un granulador de tu propia voz { .exercise }

1. Activa I/O y en Source elige una entrada con micrófono.
2. Di «cuchara» al micrófono varias veces, alargando las vocales.
3. Pulsa Capture. Si no te gusta, vuelve a hablar y pulsa Capture otra vez.
4. Activa Scan con Loop, Distance a la duración de una palabra. Hold, una sola nota.
5. Guarda una buena captura con el botón Save, o se perderá.

## Fuentes del capítulo

- [Granulator III, página de Robert Henke](https://www.roberthenke.com/technology/granulator3.html): todos los parámetros, modos, Capture, limitaciones de Push, el equipo.
- [Granulator III, página del pack en ableton.com](https://www.ableton.com/en/packs/granulator-iii/): requisitos de versión de Live, contenido del pack.
- [Videotutorial 1](https://youtu.be/PqSFu6by6Kk): instalación, afinación del sample con el afinador, comportamiento de Shape en Classic, Capture.
- [Videotutorial 2](https://youtu.be/ZVLM1XMT6Z0): Scan como multiplicador de velocidad, Grain Size y transposición, cálculo de la duración del grano según el tempo, Position con Key, el truco de la Envelope 2, remuestreo generativo. El vídeo se hizo con patrocinio de Ableton.
