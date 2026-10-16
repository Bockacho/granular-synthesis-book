<p class="eyebrow">Capítulo 9</p>

# Modulación: un sonido que vive por sí solo

<figure markdown="span">
  ![La modulación controla una nube de granos](../images/9-1.png)
  <figcaption>Ilustración 9.1. Un LFO mueve el flujo de granos.</figcaption>
</figure>

Si todos los mandos están quietos, la nube suena bonita pero estática, como una fotografía. La modulación mueve los mandos sola, sin tus manos, y la fotografía se convierte en una película. En la síntesis granular la modulación es especialmente importante: los granos ya son aleatorios en los detalles, y la modulación les da movimiento a gran escala.

## Fuentes de modulación

**LFO, oscilador de baja frecuencia.** Mueve un parámetro de un lado a otro, una y otra vez. Ajustes principales: velocidad (en hercios o en fracciones de compás), forma (senoidal, triangular, diente de sierra, cuadrada, escalones aleatorios), profundidad.

- Un LFO senoidal lento en la posición (0,05–0,2 Hz) hace que la nube derive por el archivo, y el sonido cambia cada pocos segundos.
- Escalones aleatorios (Sample & Hold) en la posición, al ritmo de las negras: en cada tiempo los granos se toman de un lugar nuevo. Un troceado rítmico listo.
- Un LFO rápido en la altura del grano (5–7 Hz, profundidad de 20–50 cents) da un vibrato.

**Envolvente, ADSR.** Cambia un parámetro una vez por nota: desde que pulsas hasta que sueltas.

- Una envolvente en la posición: cada nota empieza con el golpe de la cucharilla y se desliza al tintineo. El sonido se reproduce como un sample, pero con carácter granular.
- Una envolvente en el tamaño: al principio de la nota los granos son cortos y hacen clic, hacia el final son largos y lisos. Un ataque crujiente, una cola suave.
- Una envolvente en la densidad: la nube se enciende y se apaga con la nota.

**Interpretación.** Parámetros que controlas con las manos mientras tocas:

- **Velocidad de pulsación (velocity).** Cuanto más fuerte golpeas, mayor es la dispersión de posición. Las notas suaves son limpias, las fuertes se desmoronan.
- **Rueda de modulación.** La asignación más habitual en un granulador: el tamaño del grano o la dispersión. Una mano toca, la otra hace girar la nube.
- **Aftertouch y MPE.** Aprieta más la tecla y la nube se abre.
- **Número de nota (keytrack).** Las notas agudas reciben granos cortos, las graves granos largos. Así el sonido es más uniforme en todo el teclado.

**Azar por nota.** Un valor aleatorio nuevo en cada pulsación. Por ejemplo, una posición inicial aleatoria: cada nota empieza en su propio lugar del archivo, y ni siquiera una parte que se repite suena dos veces igual.

## Profundidad y polaridad

Cada conexión «fuente → parámetro» tiene una profundidad: cuánto mueve el mando la modulación. Y un signo: el más lo mueve en un sentido, el menos en el otro. La profundidad importa más que la velocidad. Empieza con poca profundidad y ve subiendo hasta oír el movimiento; luego retrocede un poco. El error más común del principiante: la modulación a tope, y el sonido se convierte en un tiovivo.

## Combinaciones de parámetros

Los sonidos más expresivos salen cuando un mando mueve varios parámetros a la vez, a veces en sentidos opuestos. Para eso están las macros.

**Cómo se llama:** Macro, Quick Control, Performance Control, Morph.

| Combinación | Qué hace |
| --- | --- |
| tamaño abajo + densidad arriba | la nube se vuelve más fina y espesa sin caer en agujeros |
| dispersión de posición arriba + dispersión de altura arriba | la fuente se disuelve en la bruma |
| posición a lo largo del archivo + brillo del filtro | el sonido «se despierta» hacia el final del archivo |
| densidad abajo + reverb arriba | las gotas caen en una gran sala vacía |
| escaneo abajo + tamaño arriba | el tiempo se detiene, el sonido se convierte en un pad largo |

Merece la pena montarte en una tarde una macro así, «tono → nube», y tocarla como un fader. En el escenario es el mando principal de todo el instrumento.

## Modulación o automatización

La modulación interna la hace el propio sintetizador y se repite en cada nota. La automatización en la DAW se dibuja a lo largo de la línea de tiempo de la pista: por ejemplo, la dispersión crece despacio durante toda la segunda estrofa. Usa las dos: la modulación da vida a cada nota, la automatización da forma a todo el tema.

??? info "Bajo el capó"

    Modular la posición con un LFO a frecuencia de audio (más de 20 Hz) deja de ser movimiento y se convierte en timbre: la posición oscila tan deprisa que los granos leen el sonido con una modulación de frecuencia dentro. Lo mismo ocurre con la altura del grano: un LFO en el rango de audio sobre la altura da bandas laterales, como en la síntesis FM. No todos los instrumentos dejan subir tanto el LFO, pero donde se puede salen timbres metálicos y de campana a partir de cualquier fuente.

??? info "Bajo el capó"

    En un granulador, la modulación casi siempre actúa sobre granos que todavía no han nacido. Los valores de los mandos se leen en el momento en que nace el grano, y a partir de ahí el grano suena hasta el final con ellos. Roads lo llama integridad del grano (grain integrity): en EmissionControl2, un grano ya lanzado no cambia ni su filtro, ni su panorama, ni su lugar en el archivo, y eso evita los clics ([Roads et al., 2021](https://doi.org/10.1162/comj_a_00613)). El manual de Kaivo dice lo mismo, y Granulator III calcula así la forma de la ventana ([capítulo 11](../chast-3-instrumenty/11-granulator-iii.md)). Por eso una modulación rápida sobre granos largos no suena como un desplazamiento suave, sino como una lluvia de granos con valores distintos.

## Ejercicio 9.1. Un pad que respira { .exercise }

1. La cucharilla, posición en el tintineo, tamaño de 120 ms, densidad 30, dispersión de posición de 30 ms, dispersión de altura de 10 cents, panorama al 50 %.
2. Pon un LFO senoidal lento (0,1 Hz) en la posición, con una profundidad tal que la posición recorra todo el tintineo.
3. Pon una envolvente en la densidad: ataque de 2 segundos, release de 4 segundos.
4. Asigna la rueda de modulación al tamaño del grano, en negativo: giras la rueda y los granos se hacen más finos.
5. Toca un acorde largo y juega con la rueda. Es el primer instrumento granular completo hecho con una cucharilla.
