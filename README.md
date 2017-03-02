# Ejercicio 5.5.10. Calculadora binaria simple
Ejercicio de asignaturas de aplicaciones HTML5. Tema JavaScript. Calculadora binaria simple.

## Enunciado
Escribe una aplicación JavaScript que implemente una calculadora binaria simple. Esta calculadora solo realizará sumas de números binarios de una cifra (esto es, 0 o 1). La interfaz de usuario estará compuesta de los siguientes elementos:
- Un "1", que será un enlace. Cuando se pulse sobre él, aparecerá un "1" en el "display" (ver más abajo).
- Un "0", que será un enlace. Cuando se pulse sobre él, aparecerá un "0" en el "display" (ver más abajo).
- Un "+", que será un enlace. Cuando se pulse sobre él, se almacenará lo que haya en el "display" (un "0" o un "1") como primer sumando, y se borrará a continuación el contenido del "display".
- Un  "=",  que  será  un  enlace.  Cuando  se  pulse  sobre él,  se  utlizará  lo  que haya en el "display" (un "0" o un "1") como segundo sumando, se sumará al primer sumando (que deberá estar almacenado) y se mostrará el resultado en el "display".
- Un "display", que mostrará lo indicado en los apartados anteriores.

Para empezar, puede hacerse la calculadora sin tener en cuenta las condiciones  de  error (por ejemplo, que se pulse "+" sin que haya nada en el "display". Más adelante, se puede mejorar el código para que gestione adecuadamente estas condiciones de error.

Es  importante  darse  cuenta  de  que  cuando  se  almacene  el  primer  sumando, ha de ser en una variable que esté disponible cuando posteriormente se realice la suma. En particular, es conveniente recordar que las variables locales a una función desaparecen cuando termina la ejecución de la función. Al terminar la funcionalidad del ejercicio, se puede utilizar CSS (por ejemplo, propiedades como el color de fondo) para dar una apariencia un poco más adecuada a la calculadora

## Resultado
[http://acamara7es.github.io/X-Nav-JS-Calculadora/index.html](http://acamara7es.github.io/X-Nav-JS-Calculadora/index.html)

## Comentarios y mejoras
 Tras terminar con lo que el enunciado pedía estrictamente, decidí que la calculadora debería tener soporte para más de un dígito en cada operando. Esta modificación puede verse [aquí](http://acamara7es.github.io/X-Nav-JS-Calculadora/index2.html).

 En ambos casos, la calculadora tiene en cuenta si se han introducido los operandos correctamente antes de hacer la operación (incluso si pulsa el símbolo "+" antes de escribir el primer operando también da error).
