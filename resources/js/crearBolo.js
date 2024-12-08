import { postData, patchData } from "./api";
import { loadComposters } from "./composteras";
import { fetchData } from "./api.js";

export function createBolo() {
    const container = document.getElementById("datosCompostera");
    container.innerHTML = /* html */ `
        <h2 class="text-xl font-extrabold text-center text-green-600 mb-6">Formulario para crear el bolo</h2>
        <div class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre:</label>
                <input type="text" id="name" name="name" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">

                <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción:</label>
                <textarea id="description" name="description" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
        </div>
        <div class="mt-6 flex justify-end">
            <button type="button" id="createButton" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Crear
            </button>
        </div>
    `;

    document
        .getElementById("createButton")
        .addEventListener("click", async function () {
            const name =
                document.getElementById("name").value.trim() ||
                "Bolo sin nombre";
            const description =
                document.getElementById("description").value.trim() ||
                "No se especificó descripción para el bolo";

            // Crear los datos del bolo
            const boloData = {
                name: name,
                description: description,
                cicle1: true,
            };

            try {
                // Creamos un nuevo bolo
                const response = await postData("/api/bolo", boloData);
                console.log("Bolo creado:", response);

                // Actualizamos el estado de la primera compostera
                const updateComposter = await patchData("/api/composters/1", {
                    ocupada: 1,
                });
                console.log("Compostera 1 actualizada:", updateComposter);

                // debug
                // alert("Bolo creado y compostera 1 actualizada exitosamente.");
                // Volvemos a la vista de las composteras
                createCicle();
                loadComposters();
            } catch (error) {
                console.error("Error:", error.message);
                alert(
                    "Ocurrió un error al crear el bolo o actualizar la compostera 1."
                );
            }
        });
}

async function createCicle() {
    const now = new Date();
    const start = now.toISOString().replace("T", " ").split(".")[0];
    const composter_id = localStorage.getItem("composter_id");

    try {
        const boloResponse = await fetchData(
            `/api/exactbolo/composter${composter_id}`
        );
        if (!boloResponse || !boloResponse.id) {
            throw new Error(
                "No se encontró un bolo válido para iniciar el ciclo."
            );
        }

        const bolo_id = boloResponse.id;
        const cicleData = { bolo_id, start };

        console.log("Datos enviados a /api/cicle:", cicleData);

        const response = await postData("/api/cicle", cicleData);
        console.log("Ciclo creado:", response);
    } catch (error) {
        console.error("Error al crear el ciclo:", error.message);
        alert("Ocurrió un error al iniciar el ciclo.");
    }
}
