<p class="eyebrow">Capítulo 18</p>

# Errores típicos

Casi todos los problemas con un granulador se reducen a una quincena de síntomas. Busca el tuyo en la columna izquierda.

| Síntoma | Causa | Qué hacer | Capítulo |
| --- | --- | --- | --- |
| Clics y crepitar | la ventana es demasiado brusca y los bordes de los granos se cortan; los marcadores del sample no están en cruces por cero | ventana de campana o más suavizado; marcadores ajustados al cero, fundidos en los bordes del sample | 1, 5, 10, 12 |
| Un zumbido mecánico al congelar | todos los granos son idénticos, el flujo se ha vuelto periódico | dispersión de posición de 5–30 ms | 4 |
| La nube cae en agujeros | el solapamiento es menor que uno; los granos se toman del silencio | subir la densidad o la duración del grano; una ventana de lectura sin silencio | 2, 4 |
| Engrudo en los graves | una nube densa acumula retumbo | filtro paso alto; menos densidad; filtro sobre el sample antes del granulador | 14, 16 |
| El volumen salta, la salida satura | el volumen crece con la densidad | bajar el volumen general, un limitador a la salida, dispersiones para descorrelacionar | 6, 16 |
| El sonido está desafinado | la nota fundamental del sample no es C | averigua la nota con un afinador, ajusta la transposición o Root Note | 10, 11, 12 |
| La voz se ha vuelto una ardilla | la transposición del grano mueve los formantes | fija la nota con la frecuencia de los granos; usa una fuente en la tonalidad adecuada | 6, 7, 14 |
| La fuente no se reconoce, y debería | los granos son demasiado cortos, las dispersiones grandes | grano de más de 30–50 ms, dispersiones menores | 5, 13 |
| La fuente se reconoce, y no debería | los granos son largos, no hay dispersiones | grano más corto, más dispersión de posición y de altura | 5, 13 |
| Una nube ancha desaparece en mono | el panorama de los granos está al máximo | reduce la anchura, comprueba el mono en el máster | 8 |
| El procesador cruje | demasiados granos: densidad × unísono × polifonía | límite de granos, menos voces, render a audio | 10, 12, 16 |
| El ritmo se ha descolocado | la duración y la densidad no están ligadas al tempo; la transposición cambia la duración del grano | modos por tempo; duración como fracción del periodo; el cálculo 60 000 / BPM | 10, 11, 12 |
| Todo suena igual y plano | dispersiones a cero, sin modulación | dispersiones de una en una, un LFO lento en la posición | 8, 9 |
| El sonido capturado ha desaparecido | la captura de Granulator III no se guardó | el botón Save tras una buena captura | 11 |

## El orden para buscar el fallo

Cuando no está claro qué pasa, ve de arriba abajo. Primero pon a cero todas las dispersiones y la modulación. Luego comprueba la fuente: escúchala sin el granulador. Después devuelve la duración del grano y la densidad al centro de la nube del mapa (100 ms, 30 granos por segundo). Si en ese punto el sonido es normal, recupera los mandos de uno en uno hasta que aparezca el problema. El mando que lo ha traído de vuelta es el culpable.
