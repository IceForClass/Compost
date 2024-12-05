import { fetchData } from "./api.js";

function showLoadingScreen() {
    const loadingDiv = document.createElement("div");
    loadingDiv.id = "loading";
    loadingDiv.className =
        "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50";

    loadingDiv.innerHTML = `
        <div class="flex flex-col items-center">
            <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4"></div>
            <p class="text-white text-lg font-semibold">Cargando...</p>
        </div>
    `;

    document.body.appendChild(loadingDiv);
}

// Función para ocultar la pantalla de carga
function hideLoadingScreen() {
    const loadingDiv = document.getElementById("loading");
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// Modificar centreName para incluir la pantalla de carga
export function centreName() {
    showLoadingScreen(); // Mostrar la pantalla de carga

    const idUser = sessionStorage.getItem("idUser");

    return fetchData(`/api/users/${idUser}/centres/`)
        .then((data) => {
            const centreData = data.data[0];
            const container = document.getElementById("nombreCentro");

            container.innerHTML = "";
            container.className =
                "text-center text-xl font-semibold text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 rounded shadow";

            sessionStorage.setItem("idCentre", centreData.id);
            container.innerHTML = centreData.name || "Centro Desconocido";
        })
        .catch((error) => {
            console.error("Error al obtener datos del centro:", error);
            alert("Hubo un problema al cargar los datos del centro.");
        })
        .finally(() => {
            hideLoadingScreen(); // Ocultar la pantalla de carga
        });
}
