// Async await hacia una API con Fetch

const url = 'https://picsum.photos/list';

// Cuando el documento esté listo, mandar llamar la funcion
document.addEventListener('DOMContentLoaded', obtenerDatos);

// Esto es usando FETCH API
function obtenerDatos1() {
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

// Funciona de manera Asincrona, tiene una sintaxis sincrona
// Esto es con Asycn Await
async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
