import { fetchData } from "./api.js";
import { showLoadingScreen, hideLoadingScreen } from "./loadingScreen.js";
import { centreName } from "./centreName.js";
import { printComposters } from "./printComposters.js";

export function loadComposters() {
    showLoadingScreen();
    centreName();
    fetchData("/api/composters")
        .then((data) => {
            const composterData = data.data;
            printComposters(composterData);
        })
        .catch((error) => {
            hideLoadingScreen();
            console.error("Error:", error);
            document.getElementById("datosCompostera").innerHTML = /* html */ `
                <p class="text-red-600">
                    Error al obtener los datos de las composteras.
                </p>
            `;
        });
}

document.addEventListener("DOMContentLoaded", loadComposters);
