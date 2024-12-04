import { fetchData } from "./api.js";

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
                card.href = `${window.location.pathname}?composter=${composter.id}`;
                card.className =
                    "block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 no-underline";
                card.innerHTML = `
                    <h4 class="text-lg font-bold text-gray-800 dark:text-gray-100">
                        Compostera ${composter.id}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Tipo: ${typeName}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Estado: ${empty}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                       Id Centro: ${composter.centre_id}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Creado el: ${new Date(
                            composter.created_at
                        ).toLocaleString()}
                    </p>
                `;

                // Controlador para comprobar si la compostera está ócuipada
                card.addEventListener("click", (event) => {
                    event.preventDefault();
                    if (composter.ocupada === 1) {
                        alert(`La compostera ${composter.id} está ocupada.`);
                    } else {
                        alert(`La compostera ${composter.id} está libre.`);
                    }
                });

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
