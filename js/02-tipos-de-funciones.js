//Funciones declaradas o declaraciones de función.
//sumar(30, 30) //hoisting






function sumar(a,b){
    console.log(a+b)
}



/* let nombre = "catalina"
console.log(nombre) */


//Function Expression o Expresión de Función
//restar(55, 25)



let restar = function(a, b){
    console.log(a-b)
}

//arrow function

let restar2 = (a,b)=>{
    console.log(a-b)
}


restar2(5,3)

let restar3 = (a,b)=> console.log(a-b)

restar3(9,5)


let saludar = nombre=> console.log(`hola ${nombre}`)

saludar("Ignacio")