/* ⏰ Contador de accesos por hora
Contexto:

Un sistema registra cuántas veces se consulta la hora en una aplicación. Cada vez que el usuario pide la hora,
el contador debe aumentar y mostrarse junto con la hora actual.

Consigna:

Crear una función que incremente un contador y muestre la hora actual en consola.

Tiempo: 20 minutos

Paso a paso:

Definir una variable global consultas inicializada en 0.

Crear una función mostrarHora().

Dentro de la función:

Incrementar el contador.

Obtener la hora actual con new Date().toLocaleTimeString().

Mostrar en consola el número de consulta y la hora.

Llamar a la función varias veces para probar. */

let horaActual = new Date().toLocaleTimeString()

console.log(horaActual)