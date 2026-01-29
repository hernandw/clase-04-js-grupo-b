function sumar(a, b) {
  //console.log(a+b)
  return a + b;
}

console.log(sumar(10, 15));

let saludar = (nombre) => {
  console.log(`hola ${nombre}`);
};

saludar("Juan");

function cambiarValor(array) {
  array.push("juan");
  return array;
}

let valores = [1, 2, 3, 4];

console.log("array original ", valores);
cambiarValor(valores);
console.log(valores);
console.log("array despues de la funcion ", valores);
cambiarValor(valores);
console.log("array despues de ejecutar dos veces la funcion ", valores);
cambiarValor(valores);
console.log("array despues de ejecutar dos veces la funcion ", valores);
