// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Declarar el array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo"); // Cambio aquí
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la función si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista visual en la página
    mostrarListaAmigos();
}

// 3. Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada nombre como un elemento <li>
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// 4. Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return; // Detener la función si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado"); // Cambio aquí
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}