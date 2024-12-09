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
        let boloData = {};
        let registData = {};
        Promise.all([
            fetchData(`/api/composters/${composter.id}/regist/`),
            fetchData(`/api/exactbolo/composter${composter.id}/`)
        ])
            .then(([rData, bData]) => {
                boloData = bData;
                registData = rData.data;
                console.log("registData", registData);
                console.log("boloData", boloData);
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
        printComposters(composter, container, boloData, registData);
    });
}




