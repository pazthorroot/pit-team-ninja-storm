/**
 * Divide & Conquer
 * Este es un método de diseño de algoritmos que se basa en subdividir el problema en sub-problemas, resolverlos recursivamente, y luego combinar las soluciones de los sub-problemas para construir la solución del problema original.
 */

const merge = (arreglo1: number[], arreglo2: number[]): number[] => {
  const resultado = [];
  while (arreglo1.length + arreglo2.length > 0) {
    if (arreglo1.length === 0) {
      resultado.push(arreglo2.shift());
    } else if (arreglo2.length === 0) {
      resultado.push(arreglo1.shift());
    } else if (arreglo1[0] < arreglo2[0]) {
      resultado.push(arreglo1.shift());
    } else {
      resultado.push(arreglo2.shift());
    }
  }
  return resultado;
}

const mergeSort = (arreglo: number[]): number[] => {
  if (arreglo.length <= 1) {
    return arreglo;
  } else if (arreglo.length === 2) {
    if (arreglo[0] > arreglo[1]) {
      const aux = arreglo[0];
      arreglo[0] = arreglo[1];
      arreglo[1] = aux;
    }
    return arreglo;
  }
  const cut = Math.floor(arreglo.length / 2);
  return merge(
    mergeSort(arreglo.filter((_, index) => index < cut)),
    mergeSort(arreglo.filter((_, index) => index >= cut))
  );
}

console.log(mergeSort([7, 3, 2, 16, 24, 4, 11, 9]));
