import { fetchData } from "./api.js";
import { printComposter as printComposter } from "./printData.js";
import { hideLoadingScreen, showLoadingScreen } from "./loadingScreen.js";

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
    showLoadingScreen();

    composterData.forEach((composter) => {
        let boloData = {};
        let registData = {};
        Promise.all([
            fetchData(`/api/composters/${composter.id}/regist/`),
            fetchData(`/api/exactbolo/composter${composter.id}/`)
        ])
            .then(([rData, bData]) => {
                boloData = Object.keys(bData).length === 0 ? { id: 0, name: "Sin bolo", description: "-" } : bData;
                registData = rData.data;
                if (document.querySelector("#datosCompostera")) {
                    printComposter(composter, boloData, registData);
                }
                hideLoadingScreen();
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
    });
}

export function fetchRegistsData(registId) {
    return Promise.all([
        fetchData(`/api/regist/${registId}/before`),
        fetchData(`/api/regist/${registId}/during`),
        fetchData(`/api/regist/${registId}/after`)
    ]).then(([beforeData, duringData, afterData]) => {
        return { beforeData, duringData, afterData };
    })
}