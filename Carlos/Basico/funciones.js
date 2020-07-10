/*
# Bucles
while

do while

for

break

continue

label

*/
let n = 0
while ( n < 5){
  if(n === 3){
    break
  }
  n++
  console.log(n)
}
n=0

while ( n < 5){
  if(n++ === 3){
    continue
  }
  console.log(n)
}
n=0

while ( n < 5){
  if(++n === 3){
    continue
  }
  console.log(n)
}
n=0
/*
Tradicional
for (let index = 0; index < array.length; index++) {
  const element = array[index];

} */
/*
para los array
for (const iterator of object) {

}
*/

/*
para las key de los objetos
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];

  }
}
*/
/*
Averiguar que es un map, y que es un set y como funcionan
*/

/*
función tradicional
function nombre (id){
  sentencias
}
*/

/* funciones anónimas
var nombreAnonimo = function () {
  sentencias
} */

/* //funciones de flechas
var arrow = () =>{
  sentencias
} */
