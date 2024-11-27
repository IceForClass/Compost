async function consulta(url) {
    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 404) {
            return null;
        }
        throw new Error("Error en la consulta.");
    }
    return await response.json();
}

const centro = await consulta("http://compost.test/api/centres/1");

console.log(centro.data);

const boton = document.querySelector("#mostrarDatos");
const mostrarDatos = document.querySelector("#DatosCentro");

function mostrarCentro() {
    mostrarDatos.innerHTML = `<p>${centro.data.name}</p>`;
}

boton.addEventListener("click", mostrarCentro);
