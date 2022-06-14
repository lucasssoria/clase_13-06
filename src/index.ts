// Innvertir arreglo
function invertirVector(v: number[]) {
  let cantidad: number = v.length;
  let vectorInvertido: number[] = new Array(cantidad);
  let indice: number = 0;

  for (
    let indiceInvertido: number = cantidad - 1;
    indiceInvertido >= 0;
    indiceInvertido--
  ) {
    vectorInvertido[indice] = v[indiceInvertido];
    indice++;
  }
  console.log("El arreglo invertido es: " + vectorInvertido);
}

let cadena: string = "Hola como estas";
invertirVector([cadena]);
console.log(cadena);

// clase 13/06

console.clear();
function setVectorN(): number[] {
  let longitud = Number(prompt("Ingrese dimension del arreglo"));
  let vector: number[] = new Array(longitud);

  for (let index = 0; index < vector.length; index++) {
    vector[index] = Math.floor(Math.random() * 21) + 20;
  }
  return vector;
}

function mostrarVector(v: number[]) {
  for (let indice: number = 0; indice < v.length; indice++) {
    console.log(v[indice]);
  }
}

function showMinValue(v: number[]): number {
  let minimo: number = v[0];
  for (let indice: number = 0; indice < v.length; indice++) {
    if (v[indice] < minimo) {
      minimo = v[indice];
    }
  }
  return minimo;
}

// let vResult: number[] = setVectorN();
// mostrarVector(vResult);
// console.log("El menor es: " + showMinValue(vResult));

// Ejercicio 3 examen
function multiplicarEntreNumeros(
  min: number,
  max: number,
  cantNum: number
): number {
  let resultado: number = 1; //let resultado: number = 0;
  let numIng: number = 0;
  let i: number = 1;
  while (i <= cantNum) {
    numIng = Number(prompt("Ing Numero: "));
    if (numIng >= min && numIng <= max) {
      resultado *= numIng; //resultado = numIng;
    }
    i++; //agregado
  }
  return resultado; //return cantNum;
}

// console.log(multiplicarEntreNumeros(10, 30, 10));

//fibonacci(0) == 0
//fibonacci(1) == 1
function calcularFibonacciRec(n: number): number {
  let resultado: number = 0;
  if (n > 1) {
    resultado = calcularFibonacciRec(n - 1) + calcularFibonacciRec(n - 2);
  } else {
    resultado = n;
  }
  return resultado;
}

console.log(calcularFibonacciRec(3));

//ejemplo con n == 3
// calcularFibonacciRec(3)
// let resultado: number = 0;
// if (3 > 1) {
//   resultado = calcularFibonacciRec(3 - 1) + calcularFibonacciRec(3 - 2);
// } else {
//   resultado = n;
// }
// return resultado;
