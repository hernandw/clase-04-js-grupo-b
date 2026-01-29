/* 🛒 Control de stock de productos
Contexto:

En una tienda online, se necesita controlar el stock de un producto. Cada vez que se realiza una venta, el
stock debe disminuir. Si no hay suficiente stock, debe mostrarse un mensaje de error.

Consigna:

Crear funciones que permitan vender productos y mostrar el estado del stock.

Tiempo: 35 minutos

Paso a paso:

Definir una variable global stock inicializada en un número (por ejemplo, 10).

Crear una función venderProducto(cantidad).

Si la cantidad a vender es menor o igual al stock:

Restar la cantidad al stock.

Mostrar en consola "Venta realizada. Stock restante: X".

Si la cantidad es mayor al stock:

Mostrar "Stock insuficiente".

Llamar a la función con distintos valores para probar ambos casos. */