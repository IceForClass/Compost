import { fetchData } from "./api.js";
import { printComposters } from "./printData.js";
import { hideLoadingScreen } from "./loadingScreen.js";

export function fetchComposters() {
    fetchData("/api/composters")
        .then((data) => {
            const composterData = data.data;
            loopComposters(composterData);
        })
        .catch((error) => {
            hideLoadingScreen();
            console.error("Error al obtener las composteras:", error);
            document.getElementById("datosCompostera").innerHTML = /* html */ `
            <p class="text-red-600">
                Error al obtener los datos de las composteras. ${error}
            </p>
        `;
        });
}

function loopComposters(composterData) {
    const container = document.getElementById("datosCompostera");
    container.innerHTML = /* html */ "";

    composterData.forEach((composter) => {
        fetchData(`/api/composters/${composter.id}/regist/`)
            .then((data) => {
                const registData = data.data;
            })
            .catch((error) => {
                console.error("Error al obtener los registros:", error);
            });

        printComposters(composter, container);
    });
}




