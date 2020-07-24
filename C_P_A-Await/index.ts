// Callbacks

const hacerAlgo = (fn:Function) => {
  console.log('antes de ejecutar el callback');
  const respuesta = fn();
  return respuesta;
}

const respuestaAlgo = hacerAlgo(() => {
  const suma = 2+3;
  if(suma > 10){
    console.log(suma);
    return suma
  } else {
    console.log('es menor');
    return suma
  }
});

console.log(`respuestaAlgo: ${respuestaAlgo}`);

// Promise

const obtenerAlgo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([3,4]);
  }, 1000);
});

const compararAlgo = (a,b) => {
  return new Promise((resolve, reject) => {
    if(a > b) return resolve("a es mayor");
    if(a < b) return resolve("b es mayor");
    if(a === b) return reject("son iguales");
  });
}

obtenerAlgo
  .then(data => compararAlgo(data[0], data[1]))
  .then(result => console.log(result))
  .catch(error => console.error(error));

// obtenerAlgo
//   .then(data => {
//     console.log(data);
//     compararAlgo(data[0], data[1])
//       .then(result => console.log(result))
//   })
//   .catch(error => console.error(error));



// async await
const algoAsincrono = async () => {
  const data = await obtenerAlgo;
  console.log(data);
  const data2 = await obtenerAlgo ;
  console.log(data2);
}

algoAsincrono();
