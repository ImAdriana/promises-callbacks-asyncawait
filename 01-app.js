// Ejemplo de callbacks
const paises = ['spain', 'mexico', 'colombia', 'peru', 'england'];
function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback(); // Realiza un refresh en la lista
    }, 3000);
}
function mostrarPaises() {
    setTimeout(() => {
        paises.forEach((pais) => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises(); // Un segundo después muestra los elementos de la lista 
nuevoPais('united states', mostrarPaises); // Agrega un país y actualiza la lista

// I m p o r t a n t e
// Un callback si se usa repetidamente provoca un Callback Hell
