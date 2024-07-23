// De Callback Hell a Promises
const paises = [];

const nuevoPais = (pais) =>
    new Promise((resolve) => {
        setTimeout(() => {
            paises.push(pais);
            resolve(`Pais agregado ${pais}`);
        }, 3000);
    });

nuevoPais('Alemania')
    .then((resultado) => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then((resultado) => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Cuba');
    })
    .then((resultado) => {
        console.log(resultado);
        console.log(paises);
    });
