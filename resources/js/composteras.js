import { fetchData } from "./api.js";
import { beforeForm } from "./beforeForm.js";
import { centreName } from "./centreName.js";

export function loadComposters() {
    centreName().then(() => {
        const idCentre = sessionStorage.getItem("idCentre");
        if (!idCentre) {
            console.error("idCentre no está definido");
            return;
        }

        fetchData(`/api/centres/${idCentre}/composters`)
            .then((data) => {
                console.log("Se dibujan las composteras");
                const composterData = data.data;
                const container = document.getElementById("datosCompostera");
                container.innerHTML = "";

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
                    const typeName =
                        typeMapping[composter.type] || "Desconocido";
                    const empty =
                        emptyMapping[composter.ocupada] || "Estado desconocido";

                    const card = document.createElement("a");
                    card.href = `${window.location.pathname}?composter=${composter.id}`;
                    card.className =
                        "block p-6 bg-gradient-to-br from-green-200 to-green-500 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out mb-4 no-underline";
                    card.innerHTML = `
                        <div class="flex items-center gap-4">
                            <div class="bg-green-600 text-white p-3 rounded-full shadow-lg">
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

                    card.addEventListener("click", (event) => {
                        event.preventDefault();

                        if (composter.ocupada === 1) {
                            beforeForm(composter.id);
                        } else {
                            alert(
                                `La compostera ${composter.id} está libre, necesita recibir un bolo.`
                            );
                        }
                    });

                    container.appendChild(card);
                });
            })
            .catch((error) => {
                console.error("Error:", error);
                document.getElementById("datosCompostera").innerHTML = `
                    <p class="text-red-600">
                        Error al obtener los datos de las composteras.
                    </p>
                `;
            });
    });
}

// Mostrar el loader al cargar la página
document.addEventListener("DOMContentLoaded", loadComposters);
