/**
 * Backtracking
 * Esta técnica de diseño de algoritmos consiste en resolver un problema por prueba y error
 */

// '*' pared
// ' ' pasillo
// '&' salida

const salida = (laberinto: string[][], i, j): boolean => {
  if (laberinto[i][j] == '&') return true;
  if (laberinto[i][j] == '*' || laberinto[i][j] == '0') return false;
  laberinto[i][j] = '0';
  if (salida(laberinto, i + 1, j)) return true;
  if (salida(laberinto, i - 1, j)) return true;
  if (salida(laberinto, i, j + 1)) return true;
  if (salida(laberinto, i, j - 1,)) return true;
  return false;
}

const laberintoRaw = [
  "* * * * * * * * *",
  "*   *       *   *",
  "*   * * *       *",
  "*       *   *   *",
  "* * *   *   *   *",
  "*   *           *",
  "&   *       *   *",
  "* * * & * * * * *"
];

const laberinto: string[][] = [];
for (const fila of laberintoRaw) {
  const filaLaberinto = [];
  for (let i = 0; i < fila.length; i += 2) {
    filaLaberinto.push(fila.charAt(i));
  }
  laberinto.push(filaLaberinto);
}

const resultado = salida(laberinto, 1, 1);

console.log(resultado);
for(const linea of laberinto)
  console.log(linea.toString().replace(",", " ").replace(",", " ").replace(",", " ").replace(",", " ").replace(",", " ").replace(",", " ").replace(",", " ").replace(",", " "));
