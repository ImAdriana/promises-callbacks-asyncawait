// Manejar múltiples awaits

function descargarNuevosClientes() {
    return new Promise((resolve) => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarNuevosPedidos() {
    return new Promise((resolve) => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

const app = async () => {
    try {
        // Utilizando esta técnica se ejecutan las dos funciones al mismo tiempo y no espera hasta que la otra finalice, indispensable saber si lo requiere el proyecto que se está manejando
        const respuesta = await Promise.all([
            descargarNuevosClientes(),
            descargarNuevosPedidos(),
        ]);

        // Esta es la otra manera, pero la segunda linea se ejecuta hasta que la primer linea haya terminado el proceso
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarNuevosPedidos();
    } catch (error) {
        console.log(error);
    }
};

app();
