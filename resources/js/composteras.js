import { fetchData } from "./api.js";
import { vite } from 'laravel-vite-plugin';

const fullImage = vite('resources/images/full.png');

console.log(fullImage);

document.addEventListener("DOMContentLoaded", function () {
    const apiToken = sessionStorage.getItem("apiToken");

document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // No quiero que se muestren los dichosos codigos
    const typeMapping = {
        11: "aporte",
        22: "degradacion",
        33: "maduracion",
    };

    const emptyMapping = {
        0: "Vacia",
        1: "Ocupada",
    };

    // Llamar a la función fetchData para hacer la consulta
    fetchData("/api/composters")
        .then((data) => {
            const composterData = data.data;
            const container = document.getElementById("DatosCompostera");
            container.innerHTML = "";
            composterData.forEach((composter) => {
                const typeName = typeMapping[composter.type] || "Desconocido";
                const empty =
                    emptyMapping[composter.ocupada] || "Estado desconocido";

                const card = document.createElement("a");
                if (composter.ocupada == 1) {
                    const imgComposterState = document.querySelector("#compostera-llena");
                } else {
                    const imgComposterState = document.querySelector("#compostera-vacia");
                }
                console.log('const: ' + imgComposterState);
                console.log(document.querySelector("#compostera-vacia"));


                let imgComposterState = document.querySelector("#compostera-vacia");
                card.href = `${window.location.pathname}?composter=${composter.id}`;
                card.className =

                    "block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 no-underline h-48 flex justify-between items-center";
                card.innerHTML = /*html*/ `
                
                <div>
                <h4 class="text-lg font-bold text-gray-800 dark:text-gray-100">
                    Compostera ${composter.id}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Tipo: ${typeName}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Id Centro: ${composter.centre_id}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Creado el: ${new Date(
                    composter.created_at
                ).toLocaleString()}
                </p>
            </div>
                `; // toLocaleString Para obtener la hora local
                card.appendChild(imgComposterState);
                imgComposterState.classList.remove("invisible");
                container.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById("DatosCompostera").innerHTML = `
                <p class=" text-red-600">
                    "Error al obtener los datos de las composteras";
                </p>
            `;
        });
});
