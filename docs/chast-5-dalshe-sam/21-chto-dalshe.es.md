<p class="eyebrow">Capítulo 21</p>

# Instrumentos gratuitos y qué leer después

## Granuladores gratuitos

Los precios y las condiciones de los plugins gratuitos cambian a menudo, así que antes de descargar echa un vistazo a la página del desarrollador.

**Ribs, Hvoya Audio.** Un efecto y un sintetizador granular en uno, de Eugene Yakshin. En la página del desarrollador se distribuye con la fórmula «paga lo que quieras», y cero también vale. Modos: un sintetizador que se toca por notas, un «scratch» con control preciso del cabezal, un modo rítmico con polirritmos, y además un modo de efecto. Una particularidad importante: en Ribs no se puede cargar un archivo WAV propio; llena sus búferes con el sonido de la pista en la que está. En Ableton Live hace falta configurar el enrutamiento, y el autor lo muestra en un vídeo ([hvoyaaudio.itch.io](https://hvoyaaudio.itch.io/ribs)).

**Argotlunar, Michael Ourednik.** Un granulador de sonido en vivo sobre una línea de retardo: cada grano recibe un volumen, un panorama, una duración, un retardo, una altura, un glissando, un filtro y una envolvente aleatorios. Código abierto bajo licencia GPLv2, versiones para Windows, macOS y Linux ([GitHub](https://github.com/mourednik/argotlunar)). El plugin es antiguo: la última versión, la 2.0.6, se compiló con la biblioteca JUCE de 2013, así que puede no arrancar en sistemas recientes.

**Emergence, Daniel Gergely.** Un granulador de sonido en vivo: hasta 600 granos en cuatro flujos independientes, congelación del búfer, transposición de ±24 semitonos. La primera versión, la 0.3, se distribuía gratis, pero la 1.0 ya es de pago en la página del autor, desde 20 dólares ([itch.io](https://daniel-gergely.itch.io/emergence1)). Es un efecto: no se le carga un archivo propio, sino que granula el sonido que pasa por él.

**Granulator II, Robert Henke.** El predecesor de Granulator III, gratuito, bajo una licencia Creative Commons no comercial ([Synthtopia, cita de Henke](https://synthtopia.com/?p=48204)). Necesita Max for Live. Henke escribe que Granulator II sigue disponible, pero que lo más probable es que ya no se actualice.

**EmissionControl2, Curtis Roads, Jack Kilgore, Rodney DuPlessis.** Un programa independiente (no un plugin) para macOS, Windows y Linux, de código abierto bajo licencia GPL-3. Trabaja con archivos de sonido y no admite entrada en vivo. Hasta 2048 granos a la vez, duración del grano desde 20 microsegundos hasta 10 segundos, cada grano con su propio filtro, panorama y ventana, seis LFO de hasta 6000 Hz, mandos de intermitencia y de número de flujos, presets con transición suave entre ellos. Lo hizo el autor de «Microsound» para el estudio, la investigación y el escenario ([GitHub](https://github.com/EmissionControl2/EmissionControl2)).

**Pure Data y SuperCollider.** Entornos gratuitos donde un granulador se monta con bloques o se escribe en código. Sirven para el ejercicio 11 del [capítulo 19](../chast-5-dalshe-sam/19-zadaniya.md) y para cualquiera que tenga curiosidad por cómo funciona por dentro. Para Pure Data y Max existe el granulador gratuito +bubbler de Tom Erbe, autor de algoritmos para los módulos de Make Noise ([SoundHack](https://www.soundhack.com/freeware/)).

## De pago, pero interesante: Grain en Reason

Grain Sample Manipulator está incluido en Reason, en el plugin Reason Rack (VST3, AU y AAX, así que funciona en cualquier DAW) y en la suscripción Reason+. Tu sonido se carga arrastrándolo o se graba directamente en el instrumento con el botón Start sampling. Después viene el conjunto habitual: hasta 12 voces, cuatro envolventes, tres LFO, ocho buses de modulación y seis efectos cuyo orden se cambia arrastrando.

La particularidad de Grain es que tiene cuatro algoritmos, y cada uno lee el mismo archivo a su manera.

| Algoritmo | Qué hace |
| --- | --- |
| Spectral Grains | descompone la grabación en parciales y trabaja con ellos por separado |
| Grain Oscillator | dos granos muy cortos; la frecuencia de los granos sigue a la nota (capítulo 6) |
| Long Grains | granos largos con mandos de duración, velocidad, fundido y dispersión de altura |
| Tape | como un magnetófono: velocidad y altura van unidas; a velocidad 0 la cinta se detiene |

**Spectral Grains.** El algoritmo analiza las frecuencias de la grabación y encuentra en ella los parciales. El mando Snap atrae los parciales inarmónicos hacia los armónicos más cercanos: en cero el sonido apenas cambia; al 100 % solo quedan los armónicos. El mando Filter hace lo mismo recortando: los parciales inarmónicos se atenúan y los armónicos se quedan. El tintineo de una cucharilla contra una taza es justamente inarmónico, así que con él este algoritmo se oye mejor que con nada. El mando Curve permite dibujar tu propia curva de formantes: por encima de la zona rosa los parciales se refuerzan, por debajo se atenúan, y Amount fija la intensidad.

**Los modos Motion.** Deciden cómo recorre el cabezal el archivo: Freeze (quieto al principio), One Shot (una sola pasada), FW Loop y FW-BW Loop (bucle hacia delante o de péndulo), End Freeze (una pasada y parada al final) y Envelope 1. En este último, el recorrido por el archivo lo dibuja una envolvente: la parte baja de la curva es el inicio del tramo elegido y la alta, el final. Si eliges una rampa recta ascendente, activas el bucle y la sincronización por tiempo, el sample avanzará exactamente al compás del proyecto.

**La altura de la grabación como modulación.** Al cargar, Grain analiza la altura del sonido a lo largo de toda la grabación y la guarda como una curva. Esa curva puede usarse como fuente de modulación: los parámetros empezarán a seguir la altura en el lugar del archivo donde está el marcador de posición.

!!! success "Receta 21.1. La cucharilla que se convirtió en nota"

    1. Carga la cucharilla. Motion en modo Freeze, el marcador Sample Start en el tintineo.
    2. Algoritmo Spectral Grains, Snap y Filter a cero, Formant Kbd al 100 %. Toca una escala: la cucharilla suena igual de metálica, pero ya sigue a las teclas.
    3. Sube Snap poco a poco. Los parciales inarmónicos se acercan a los armónicos, el tintineo pierde el metal y se vuelve tonal. A partir de ahí la altura se puede fijar con los mandos habituales OCT, SEMI y TUNE.
    4. Prueba Filter en lugar de Snap y compara. El filtro no mueve los parciales, sino que quita los que sobran, así que el sonido sale más seco.
    5. Dibuja una curva en Curve y sube Amount. Así eliges qué parciales quedan como principales.

## Un granulador independiente: Quanta 2

!!! note "Sobre la versión"

    La descripción corresponde a Quanta 2, manual versión 2.0.

Quanta 2, de Audio Damage, es un sintetizador con el granulador en el lugar del oscilador. Está construido como uno sustractivo clásico: el granulador, dos osciladores analógicos y el ruido van a dos filtros (en serie o en paralelo), y luego a un chorus, un delay y una reverb. Hasta 15 voces. Formatos: en macOS, AU, VST3 y AAX; en Windows, VST3 y AAX; en Ubuntu, VST3. Hay una versión de demostración: funciona como la completa, pero no guarda presets ni el estado del proyecto y deja de sonar 20 minutos después de añadirla a la sesión.

Tu propio archivo se carga arrastrándolo a la ventana. Quanta acepta WAV, AIFF, MP3, Ogg y FLAC de cualquier frecuencia y profundidad de bits, toma los dos primeros canales, normaliza la grabación al cargarla y la guarda dentro del propio preset. Por eso un preset se lleva a otro ordenador sin el archivo original, pero pesa mucho. Quanta detecta sola la nota fundamental midiendo la altura en cuatro puntos de la grabación. Con un sonido sencillo y estable suele acertar; con uno complejo, como un loop de batería, pone C4. Corrige el error con el ratón en el campo ROOT NOTE.

| Parámetro de la parte 2 | Dónde en Quanta 2 |
| --- | --- |
| Posición (capítulo 4) | el mando POSITION de 0 a 1 o un clic sobre la onda |
| Tamaño (capítulo 5) | LENGTH, de 1 ms a 1 s |
| Envolvente (capítulo 5) | ENVELOPE, diez formas |
| Densidad (capítulo 6) | GRAINS, de 1 a 100 granos por segundo |
| Altura (capítulo 7) | TUNE (±2400 cents), FINE (±100 cents), QUANT |
| Dirección (capítulo 7) | el menú DIRECTION |
| Dispersiones (capítulos 4–8) | mandos RAND junto a muchos mandos del granulador |
| Anchura (capítulo 8) | WIDTH |
| Volumen (capítulo 8) | LEVEL |

ENVELOPE recorre diez formas: Rectangle, Triangle, Trapezoid, Sine Squared, Half Sine y Rounded Rectangle, y además cuatro asimétricas. Curved Down y Ramp Down arrancan de golpe y caen, de forma exponencial o en línea recta: así suenan las gotas y los pellizcos. Curved Up y Ramp Up crecen hacia el final del grano: así, con granos largos, aparece la impresión de grabación al revés. La duración de grano de hasta un segundo es deliberada, para que Quanta pueda hacer glitches parecidos a un delay.

Sobre la onda, un óvalo naranja muestra de dónde está leyendo el granulador en este momento: se mueve siguiendo la modulación de la posición, y su anchura muestra el rango de la dispersión aleatoria.

**Modulación.** Un clic derecho en cualquier mando abre el panel de enrutamiento. Pulsa el signo más, elige una fuente y mueve el deslizador de profundidad: a la izquierda del centro la señal se invierte. A un mismo destino se pueden enviar hasta cinco fuentes. Las fuentes: cuatro envolventes FEG, dos LFO, un sample-and-hold, KEY, VELOCITY, AFTERTOUCH, PITCHBEND, MODWHEEL, CC 74, T-RAND (un número aleatorio en cada nota, distinto en cada voz) y cuatro macros que se pueden vincular a controladores MIDI. Las envolventes FEG se dibujan por puntos: tantos puntos como quieras, el bucle va hacia delante o de péndulo, y el mando SCALE, de 1/8 a 8, acelera o frena toda la curva. La altura sigue a las teclas mediante una ruta de KEY a TUNE con valor 100, que en una instancia nueva ya viene configurada.

**Si no hay sonido.** El parámetro GLOBAL LEVEL, como destino de modulación, funciona como amplificador final: al menos una envolvente tiene que estar conectada a él, y por defecto es FEG 1. El silencio también puede venir de dos filtros ajustados de forma que en modo serie no quede nada: pásalos a paralelo.

!!! success "Receta 21.2. La cucharilla en tonalidad"

    1. Carga la cucharilla. Si Quanta ha detectado mal la nota fundamental, corrige ROOT NOTE.
    2. POSITION en el tintineo, LENGTH de unos 120 ms, GRAINS en torno a 30, ENVELOPE en Sine Squared: esta forma no hace clics.
    3. Activa QUANT y deja solo las notas de tu escala.
    4. Sube el RAND de TUNE: los granos se reparten en altura, pero se quedan en tu escala.
    5. Toca un acorde.

## Qué leer

- **Curtis Roads, «Microsound»** (MIT Press, 2001). El gran manual de síntesis granular y microsonido: teoría, historia, métodos, síntesis pulsar.
- **Curtis Roads, «Introduction to Granular Synthesis»** (Computer Music Journal, 1988). Una breve introducción al tema del autor de «Microsound».
- **Chris Carlson, Ge Wang, «Borderlands: An Audiovisual Interface for Granular Synthesis»** (conferencia NIME, 2012). Cómo está hecho un granulador en el que los granos se ven en pantalla.
- **Iannis Xenakis, «Formalized Music»** (edición inglesa de 1971). La teoría de la que creció la composición granular.
- **Dennis Gabor, «Acoustical Quanta and the Theory of Hearing»** (Nature, 1947). El artículo donde el sonido se describe por primera vez como un flujo de cuantos.
- **Barry Truax, Granular Synthesis** ([sfu.ca](https://www.sfu.ca/~truax/gran.html)). Un texto breve del autor del primer granulador en tiempo real.
- **Barry Truax, «Real-Time Granular Synthesis with a Digital Signal Processor»** (Computer Music Journal, 1988; [doi.org](https://doi.org/10.2307/3679938)) y **«Composing with Real-Time Granular Sound»** (Perspectives of New Music, 1990). Las fuentes primarias sobre la primera síntesis granular en tiempo real.
- **Joshua Batty, Kipps Horn, Stefan Greuter, «Audiovisual Granular Synthesis: Micro Relationships Between Sound and Image»** (conferencia IE '13, ACM, 2013; [doi.org](https://doi.org/10.1145/2513002.2513568)). Síntesis granular de sonido y vídeo a la vez, el instrumento Kortex.
- **Curtis Roads, Jack Kilgore, Rodney DuPlessis, «Architecture for Real-Time Granular Synthesis With Per-Grain Processing: EmissionControl2»** (Computer Music Journal, 2021; [doi.org](https://doi.org/10.1162/comj_a_00613)). Cómo está hecho por dentro un granulador moderno, y una breve historia del método desde Gabor hasta hoy.
- **Curtis Roads, «Path to Half Life»** ([curtisroads.net](https://www.curtisroads.net/s/04-Path-to-Half-Life.pdf)). Cómo pasó un compositor de los primeros estudios a la música hecha de granos.
- **Robert Henke, la página de Granulator III** ([roberthenke.com](https://www.roberthenke.com/technology/granulator3.html)). Una descripción completa del instrumento por su autor.
- **Los manuales de Serum 2 y Pigments 7.** Descripciones completas de todos los parámetros; se abren desde los menús de los propios instrumentos.
- **El manual de Reason Studios, sección Grain Sample Manipulator** ([reasonstudios.com](https://reasonstudios.com/devices/grain)). Todos los parámetros de los cuatro algoritmos y de los modos Motion.
- **El manual de Quanta 2, Audio Damage** ([audiodamage.com](https://www.audiodamage.com/products/ad055-quanta-2)). Todos los mandos del granulador, la modulación, los ajustes de afinación y MPE.

## En lugar de un epílogo

Empezaste el libro con tres segundos de tintineo de una cucharilla, y lo terminas con un mapa, tres instrumentos y veinte recetas. Pero el descubrimiento más valioso está más allá de los mandos. Cualquier sonido a tu alrededor es ahora material: el chirrido de una puerta, la lluvia en el alféizar, la voz de un amigo. Graba algo hoy. Mañana será un instrumento que no tiene nadie más.
