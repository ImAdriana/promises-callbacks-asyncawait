// Creando un Promise - .then - .catch

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No aplica');
    }
});

aplicarDescuento
    // Cuando se cumple el Promise
    .then((resultado) => console.log(resultado)) // Si descuento es true
    .catch((error) => console.log(error)); // Si descuento es false
