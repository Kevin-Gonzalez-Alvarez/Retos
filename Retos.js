// Reto 1 
console.log("Fila del Banco")
console.log("");
// Parte 1. Hay tres personas esperando en el banco. Sus nombres, en orden son Sofria, David y Juan. Cree una matriz que tenga estos tres nombres en orden.

let filaBanco = ["Sofia", "David", "Juan"];
console.log("Fila al comenzar:");
console.log(filaBanco);
console.log("");

//Parte 2. Se agregan dos personas más al final de la fila: Sara y Agustin. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola?

filaBanco.push("Sara", "Agustin");//Se agregan al final de la fila.
let personaAtendida = filaBanco.shift();//En esta parte se le llama a "Sofia" y se actualiza la fila
console.log("Fila después de agregar personas y atender a", personaAtendida);
console.log(filaBanco);
console.log("");

//Parte 3. Resulta que David estaba reservando un lugar para su amiga Renata. Ella aparece y va detras de él en la fila. Aparece una persona más (Elena) y va hasta el final de la fila. ¿Cómo es la cola?

filaBanco.splice(1, 0, "Renata");//Se agrega a "Renata" detras de David y enfrente de "Juan"
filaBanco.push("Elena");//Se agrega a "Elena" al final de la fila
console.log("Fila después de agregar Renata y Elena:");
console.log(filaBanco);

console.log("");




//Reto 2
//Imprima repetidamente el valor de la variable xValue, disminuyendolo en 0.5 cada vez, siempre que xValue siga siendo positivo.

console.log("Imprimir Valor disminuyendo 0.5 en cada valor")

let xValue = 5;

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

console.log("");




// Reto 3
// Crea una funcion con un bucle while para imprimir los numeros del 1 al n entre corchete. 
// Por ejemplo, sin n=6, se imprime [1][2][3][4][5][6]

console.log("imprimir numeros entre corchetes");
function imprimirNumeros(n) {
    let i = 1;
    let resultado = '';
  
    while (i <= n) {
      resultado += '[' + i + ']';
      i++;
    }
  
    console.log(resultado);
  }
  

imprimirNumeros(10);


console.log("");


// Reto 4
// Crea una funcion general y una funcion flecha con un bucle while que calcule la suma de los primeros n numeros enteros positivos: 
// suma = 1+2+3...+n

console.log("Funcion para sumar los primeros numeros enteros")
function calcularSuma(n) {
  let suma = 0;
  let i = 1;

  while (i <= n) {
    suma += i;
    i++;
  }

  return suma;
}


console.log("Funcion general: " + calcularSuma(9));

//Funcion flecha
const calcularSumaFlecha = (n) => {
  let suma = 0;
  let i = 1;

  while (i <= n) {
    suma += i;
    i++;
  }

  return suma;
};


console.log("Funcion flecha: " + calcularSumaFlecha(19));

  
  