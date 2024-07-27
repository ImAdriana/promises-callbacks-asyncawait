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

// ***********************************************
// Importante discenir entre function express y Declaration
// Declaration sería, como en el archivo 05-app.js:
async function ejecutar() {}

// Esta es la otra forma, nota personal, checar cual es de mi agrado
const ejecutar = async () => {
    try {
        console.log(3 + 3);
        // Espera hasta que la función cumpla su cometido
        const respuesta = await descargarClientes();
        console.log(respuesta);
        console.log(3 + 3);
    } catch (error) {
        console.log(error);
    }
};

ejecutar();
