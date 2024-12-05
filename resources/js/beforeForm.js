import { duringForm } from "./duringForm.js";

export function beforeForm(composterId) {
    const container = document.getElementById("DatosCompostera");

    container.innerHTML = `
        <h2 class="text-lg text-white font-bold mb-4">Formulario de Antes para Compostera ${composterId}</h2>
        <div class="mb-4">
            <label for="temp_ambient" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Temperatura Ambiente:</label>
            <input type="number" id="temp_ambient" name="temp_ambient" step="0.1" class="mt-1 block w-full">
        </div>
        <div class="mb-4">
            <label for="temp_compost" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Temperatura Compost:</label>
            <input type="number" id="temp_compost" name="temp_compost" step="0.1" class="mt-1 block w-full">
        </div>
        <div class="mb-4">
            <label for="fill_level" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nivel de Llenado:</label>
            <select id="fill_level" name="fill_level" class="mt-1 block w-full">
                <option value="">Seleccione</option>
                <option value="0%">0%</option>
                <option value="12.5%">12.5%</option>
                <option value="25%">25%</option>
                <option value="37.5%">37.5%</option>
                <option value="50%">50%</option>
                <option value="62.5%">62.5%</option>
                <option value="75%">75%</option>
                <option value="87.5%">87.5%</option>
                <option value="100%">100%</option>
            </select>
        </div>
        <div class="mb-4">
            <label for="odor" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Olor:</label>
            <select id="odor" name="odor" class="mt-1 block w-full">
                <option value="">Seleccione</option>
                <option value="0">No bad smell</option>
                <option value="1">Neutral</option>
                <option value="2">Rotten</option>
                <option value="3">Other</option>
            </select>
        </div>
        <div class="mb-4">
            <label for="insect_status" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Insectos:</label>
            <input type="checkbox" id="insect_status" name="insect_status" class="mt-1">
        </div>
        <div class="mb-4">
            <label for="insect_description" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción de Insectos:</label>
            <input type="text" id="insect_description" name="insect_description" class="mt-1 block w-full">
        </div>
        <div class="mb-4">
            <label for="humidity" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Humedad:</label>
            <select id="humidity" name="humidity" class="mt-1 block w-full">
                <option value="">Seleccione</option>
                <option value="0">Deficient</option>
                <option value="1">Good</option>
                <option value="2">Excessive</option>
            </select>
        </div>
        <div class="mb-4">
            <label for="initial_photos" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Fotos Iniciales (URL):</label>
            <input type="url" id="initial_photos" name="initial_photos" class="mt-1 block w-full">
        </div>
        <div class="mb-4">
            <label for="initial_observations" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Observaciones Iniciales:</label>
            <textarea id="initial_observations" name="initial_observations" class="mt-1 block w-full"></textarea>
        </div>
        <div class="flex justify-between">
            <button type="button" id="nextFormButton" class="bg-green-500 text-white py-2 px-4 rounded">Siguiente</button>
        </div>
    `;

    document
        .getElementById("nextFormButton")
        .addEventListener("click", function () {
            const formData = saveBeforeFormData();
            console.log("Formulario Antes:", formData);
            duringForm(composterId);
        });

    function saveBeforeFormData() {
        const formData = {};
        document
            .querySelectorAll("input, select, textarea")
            .forEach((element) => {
                formData[element.name] =
                    element.type === "checkbox"
                        ? element.checked
                            ? "1"
                            : "0"
                        : element.value;
            });
        localStorage.setItem("beforeFormData", JSON.stringify(formData));
        return formData;
    }
}
