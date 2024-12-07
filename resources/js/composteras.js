import { fetchData } from "./api.js";
import { beforeForm } from "./beforeForm.js";
import { centreName } from "./centreName.js";
import { createBolo } from "./crearBolo.js";
import { showLoadingScreen, hideLoadingScreen } from "./loadingScreen.js";

export function loadComposters() {
    showLoadingScreen();
    centreName();
    fetchData("/api/composters")
        .then((data) => {
            const composterData = data.data;
            const container = document.getElementById("datosCompostera");
            container.innerHTML = /* html */ "";

            const typeMapping = {
                11: "Aporte",
                22: "Degradación",
                33: "Maduración",
            };

            const emptyMapping = {
                0: "Vacía",
                1: "Ocupada",
            };

            composterData.forEach((composter) => {
                const typeName = typeMapping[composter.type] || "Desconocido";
                const empty =
                    emptyMapping[composter.ocupada] || "Estado desconocido";

                const card = document.createElement("a");
                // card.href = `${window.location.pathname}?composter=${composter.id}`;
                card.className =
                    "flex flex-col sm:flex-row gap-4 justify-between items-center block p-6 bg-gradient-to-br from-light-highlight to-green-400 dark:from-dark-highlight dark:to-green-900 rounded-lg shadow-lg hover:shadow-xl mb-4 no-underline";
                card.innerHTML = /* html */ `    
                    <div class="flex items-center gap-4">
                        <div class="text-white p-2 rounded-full shadow-lg">
                            <i class="fa fa-leaf fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Compostera ${composter.id}
                            </h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                Tipo: <span class="font-semibold">${typeName}</span>
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                Estado: <span class="font-semibold">${empty}</span>
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                Creado el: <span class="font-semibold">${new Date(
                    composter.created_at
                ).toLocaleString()}</span>
                            </p>
                        </div>
                    </div>
                `;

                const newRegistButton = document.createElement("button");
                const seeRegistButton = document.createElement("button");
                const buttonsDiv = document.createElement("div");
                buttonsDiv.className = "flex gap-2";
                newRegistButton.innerHTML = /* html */ `Nuevo registro <i class="fa fa-solid fa-plus"></i>`;
                seeRegistButton.innerHTML = /* html */ `Ver registros <i class="fa fa-solid fa-eye"></i>`;
                newRegistButton.className =
                    "flex items-center justify-center gap-2 bg-light-btn-primary dark:bg-dark-btn-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-btn-primary-hover focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 transition duration-300 ease-in-out";
                seeRegistButton.className =
                    "flex items-center justify-center gap-2 bg-light-btn-primary dark:bg-dark-btn-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-btn-primary-hover focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 transition duration-300 ease-in-out";
                newRegistButton.addEventListener("click", (event) => {
                    event.preventDefault();

                    if (composter.ocupada === 1) {
                        beforeForm(composter.id);
                    } else if (composter.id === 1 && composter.ocupada === 0) {
                        const confirmed = confirm(
                            `La compostera ${composter.id} necesita un bolo, ¿crear uno nuevo?`
                        );
                        if (confirmed) {
                            createBolo();
                        }
                    } else {
                        alert(
                            `La compostera ${composter.id} está libre, tiene que llegarle un bolo de otra compostera`
                        );
                    }
                });

                buttonsDiv.appendChild(newRegistButton);
                buttonsDiv.appendChild(seeRegistButton);
                card.appendChild(buttonsDiv);
                container.appendChild(card);
            });
        })
        .then(hideLoadingScreen)
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
