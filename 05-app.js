// Ejemplo de async await y qué es lo que hace

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() => {
            if (!error) {
                resolve('El listado se ha descargado');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });
}

// async es la funcion padre
// await se usa en la parte que espera que se ejecute el promise
async function ejecutar() {
    try {
        console.log(3 + 3);
        // Espera hasta que la función cumpla su cometido
        const respuesta = await descargarClientes();
        console.log(respuesta);
        console.log(3 + 3);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();
