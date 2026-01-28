function saludo(nombre){ //parametro
    console.log("Hola buenas tardes " + nombre)
}

saludo("Juan") //argumento

saludo("Armin")

function sumar(a, b){
    console.log(a + b)
}

sumar(15,12)
sumar(26,84)


//funciones 
console.log("hola desde la consola")
//alert("hola desde la ventana")
//let numero1 = Number(prompt("dame un numero"))
//console.log(numero1)

//numero1.toString()

function nombreCompleto(nombre, apellido){
    console.log(`hola tu nombre es: ${nombre} y tu apellido es: ${apellido}`)//literal string
}



nombreCompleto("jorge", "rodriguez")
nombreCompleto("armin", "contreras")
nombreCompleto("cofré", "claudia")
nombreCompleto("ignacio")
nombreCompleto()