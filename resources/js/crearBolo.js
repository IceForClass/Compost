import { postData } from "./api";
import { loadComposters } from "./composteras";

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
            const name = document.getElementById("name").value.trim();
            const description = document
                .getElementById("description")
                .value.trim();

            const boloData = {
                name: name,
                description: description,
                cicle1: true,
            };

            try {
                // Creamos un nuevo bolo
                const response = await postData("/api/bolo", boloData);
                // Debug
                console.log("Bolo creado:", response);

                // Volvemos a la vista de las composteras
                loadComposters();
            } catch (error) {
                console.error("Error al crear el bolo:", error.message);
            }
        });
}
