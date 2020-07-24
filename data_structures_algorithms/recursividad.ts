/**
 * Recursividad
 * Al programar en forma recursiva, buscamos dentro de un problema otro subproblema que posea su misma estructura.
 */

//Se asume que el factor es un numero entero
const elevar = (numero: number, factor: number): number => {
  // X^0 = 1
  if(factor === 0)
    return 1;
  // 2^n = 2 * 2^n-1
  return numero * elevar(numero, factor - 1);
}

//Todas las piezas en A

// A -> 4-3-2-1  B -> 0  C -> 0    hanoi(n)
// A -> 4  B -> 3-2-1  C -> 0    hanoi(n-1)
// A -> 0  B -> 3-2-1  C -> 4    1
// A -> 0  B -> 0  C -> 4-3-2-1    hanoi(n-1)

//Torres de Hanoi
const hanoi = (cantidad: number, desde: string, pivote: string, hasta: string) => {
  if(cantidad > 0) {
    hanoi(cantidad - 1, desde, hasta, pivote);
    console.log(desde, "->", hasta);
    hanoi(cantidad - 1, pivote, desde, hasta);
  }
}

//const  resultado = elevar(2, 16);
//console.log(resultado);

hanoi(3, 'a', 'b', 'c');
