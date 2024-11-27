// async function consulta(url) {
//     const response = await fetch(url);
//     if (!response.ok) {
//         if (response.status === 404) {
//             return null;
//         }
//         throw new Error("Error en la consulta.");
//     }
//     return await response.json();
// }

// const centro = await consulta("http://compost.test/api/centres/1");

// console.log(centro.data);

// const boton = document.querySelector("#mostrarDatos");
// const mostrarDatos = document.querySelector("#DatosCentro");

// function mostrarCentro() {
//     mostrarDatos.innerHTML = `<p>${centro.data.name}</p>`;
// }

// boton.addEventListener("click", mostrarCentro);

document.getElementById("fetchCentre").addEventListener("click", function () {
    const centreId = this.getAttribute("data-id"); // Obtener el ID del centro del atributo data-id
    // Llamada al API para obtener el centro por ID
    fetch(`/api/centres/${centreId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener el centro");
            }
            return response.json();
        })
        .then((data) => {
            // Mostrar el nombre del centro
            document.getElementById("NombreCentro").textContent =
                data.data.name;
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById("NombreCentro").textContent =
                "Error al obtener el nombre del centro";
        });
});
