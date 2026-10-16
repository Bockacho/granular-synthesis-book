<p class="eyebrow">Capítulo 16</p>

# Lo granular en directo

En el escenario, el granulador deja de ser un procesamiento y se convierte en un instrumento. Una nota sostiene la nube, y las manos mueven el tiempo, la densidad y la granulosidad. Para que funcione hacen falta tres cosas: un control cómodo, margen de procesador y una red de seguridad contra las sorpresas.

## Control: menos mandos, más sentido

En el escenario no puedes girar veinte mandos. Reúne dos o tres principales.

- **La macro principal.** La misma «tono → nube» del [capítulo 9](../chast-2-parametry/09-modulyaciya.md): un solo mando mueve a la vez la duración del grano, la dispersión de posición y el filtro. Ponla en un controlador físico. En Serum asigna una macro y vincúlala con MIDI Learn desde el menú contextual del mando. En Pigments, las cuatro macros M1–M4 también aprenden de un controlador. En Live, cualquier mando de Granulator III se puede vincular a un controlador con el mapeo estándar.
- **La posición a mano.** El pad X|Y de Serum ([capítulo 10](../chast-3-instrumenty/10-serum-2.md)) o Position en un mando aparte. Moverse por el archivo es la acción más expresiva al tocar en granular.
- **Hold.** Hold en Granulator III mantiene un acorde después de soltar las teclas: las dos manos quedan libres para los mandos.
- **MPE.** Granulator III admite MPE por completo, y Pigments también. Con un controlador MPE, cada dedo controla su propia nube: con la presión abres la dispersión, con el deslizamiento mueves la posición.

## Entrada en vivo

El truco de escenario más potente: granular un sonido que está naciendo ahora mismo. De los tres instrumentos del libro, lo hace Granulator III (Capture, [capítulo 11](../chast-3-instrumenty/11-granulator-iii.md)). Una voz, una guitarra, un sintetizador de hardware, el sonido de la sala a través de un micrófono: todo se convierte en fuente con una sola pulsación. Combinado con un LFO sobre el botón Capture, el granulador se convierte en una máquina que renueva su material sola cada pocos compases.

En hardware, lo granular en vivo lo dan módulos como Mutable Instruments Clouds y Make Noise Morphagene ([capítulo 3](../chast-1-zerno/03-istoriya.md)). El principio es el mismo: un búfer graba la entrada y los granos leen el búfer. Entre los más nuevos están Beads, sucesor de Clouds, e Instruō Arbhar, con un micrófono en el propio panel, y para guitarristas, pedales como el Hologram Microcosm y el Red Panda Particle 2. El Tasty Chips GR-1 de sobremesa funciona como sintetizador y como máquina de drones.

Por dentro, un granulador en vivo funciona como una línea de retardo: la entrada se escribe continuamente en un búfer circular corto, y los granos lo leen con distintos retrasos. Si devuelves parte de la salida al búfer (realimentación, feedback), los granos empiezan a granularse a sí mismos, y la nube crece por capas, como un eco. Truax ya incorporó esa realimentación en su sistema de los años ochenta ([Truax, 1988](https://doi.org/10.2307/3679938)). Es más cómodo tener la señal procesada y la seca en dos mandos separados que en un solo mando de mezcla: así el sonido granulado vive como una voz propia. Así funcionaba el prototipo de Stanford GrainProc (2013): un guitarrista controlaba esos mandos en una tableta con los dedos de los pies ([NIME 2013](https://www.nime.org/proceedings/2013/nime2013_99.pdf)).

## El procesador

Un granulador pesa más que un sintetizador normal, y el manual de Serum 2 lo dice directamente. En el escenario, una sobrecarga del procesador suena a crepitar, y no se confunde con nada.

- **Límite de granos.** Max Grains en Serum, Limit en Pigments, Density en modo Cloud en Granulator III. Pon el techo con margen.
- **Unísono y polifonía.** Multiplican el número de granos. En el escenario suelen bastar tres o cuatro voces en lugar de ocho.
- **Procesamiento de sobra.** El filtro de Granulator III se puede desactivar y ahorra procesador; Henke lo dice directamente.
- **Congelar a audio.** Todo lo que no necesites girar en vivo, pásalo a archivos de audio antes. La capa de fondo puede sonar como grabación, y dejar en vivo un solo granulador.
- **El búfer de la tarjeta de sonido.** Un búfer mayor da más margen al procesador a cambio de latencia. Para nubes y drones, un retardo de 10–20 ms apenas molesta.

## Red de seguridad

- **Un limitador a la salida.** La densidad sube el volumen ([capítulo 6](../chast-2-parametry/06-plotnost-i-sinkhronnost.md)), y en el escenario es fácil hacerlo sin querer. El limitador atrapa los saltos antes de que los oiga el público.
- **Un filtro paso alto.** Una nube densa acumula retumbo. Un corte por debajo de 30–40 Hz casi no se oye, pero protege los altavoces y el margen de volumen.
- **Un punto de retorno.** Ajusta la macro principal para que en su posición cero suene un sonido seguro y probado. ¿Te has perdido en el ruido? Macro a cero.
- **Captura con red.** Granulator III normaliza el sonido capturado a 0 dB: un susurro débil puede sonar fuerte de repente. Mantén bajo el volumen de la pista hasta que oigas la captura.
- **Comprobación en mono.** Un recinto suele sonar más cerca del mono que los auriculares. Comprueba antes en mono las nubes más anchas ([capítulo 8](../chast-2-parametry/08-prostranstvo-i-golosa.md)).

## Enseña los granos al público

Los autores del granulador Borderlands se fijaron en un punto débil de los conciertos granulares: todo lo que hace el músico está oculto tras la pantalla del portátil, y el público no ve la relación entre el movimiento de la mano y el sonido. Su solución: mostrar la propia interfaz. En Borderlands, los archivos de sonido aparecen en pantalla como rectángulos, las nubes de granos se mueven sobre ellos con el ratón, y cada grano destella en el momento en que nace.

Si tu granulador dibuja algo, por ejemplo el pad X|Y de Serum 2 o una onda con la posición en movimiento, sácalo por el proyector. El público empezará a oír lo que ve.

## Estados y transiciones

Dentro de una escena (de las escenas hablamos en el apartado siguiente) conviene pensar en estados. Un estado es una instantánea de todos los mandos a la vez: por ejemplo, «gotas escasas» y «muro denso». Se puede tocar una transición de uno a otro. Así trabajaba ya Truax: para él, una máscara de tendencia podía ser una transición suave de un preset a otro ([capítulo 3](../chast-1-zerno/03-istoriya.md)). Y en 2013 el mismo principio fue la base del granulador audiovisual Kortex: allí se puede guardar un estado entero y fluir suavemente hacia otro.

El carácter de la transición lo decide su forma. Una transición regular, lineal, suena mecánica. Una con aceleración o frenada suena más natural, y una con rebote crea una sensación física, como si el sonido rebotara elásticamente.

En Serum 2 y Pigments esto se monta con una macro, y en Live con una macro de un Instrument Rack que contenga Granulator III: él no tiene macros propias. Ajústala para que en cero suene el primer estado y al máximo el segundo, y gírala. La forma de la transición la fija tu mano o una curva de automatización: lenta al principio y rápida al final, o al revés.

## Cómo construir una actuación

Conviene pensar un set granular en escenas. Una escena: una fuente, un ajuste, un mando principal. Las transiciones entre escenas las dan los trucos del [capítulo 15](../chast-4-praktika/15-recepty-po-zadache.md): el fotograma congelado, la caída tras el clímax, el riser. Dentro de una escena el sonido vive gracias a la modulación, y tú solo añades los movimientos grandes.

## Ejercicio 16.1. Diez minutos con un solo mando { .exercise }

1. Elige una fuente y monta una nube.
2. Asigna la macro principal a un mando físico: duración del grano, dispersión de posición y filtro.
3. Activa la grabación e improvisa diez minutos tocando solo ese mando y la posición.
4. Escucha la grabación al día siguiente. Marca los momentos interesantes y apunta dónde estaban los mandos. Son el material de partida para un set de verdad.
