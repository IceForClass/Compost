import { loadComposters } from "./composteras.js";

export function afterForm(composterId) {
    const container = document.getElementById("DatosCompostera");

    container.innerHTML = "";

    container.innerHTML = `
        <h2 class="text-lg text-white font-bold mb-4">Formulario de Después para Compostera ${composterId}</h2>
            <div class="mb-4">
                <label for="fill_level" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nivel de Llenado:</label>
                <select id="fill_level" name="fill_level" class="mt-1 block w-full" required>
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
                <label for="photo" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Foto (URL):</label>
                <input type="url" id="photo" name="photo" class="mt-1 block w-full">
            </div>
            <div class="mb-4">
                <label for="observations" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Observaciones:</label>
                <textarea id="observations" name="observations" class="mt-1 block w-full"></textarea>
            </div>
            <div class="flex justify-between">
                <button type="button" id="saveButton" class="bg-blue-500 text-white py-2 px-4 rounded">Guardar</button>
            </div>
    `;

    document
        .getElementById("saveButton")
        .addEventListener("click", function () {
            loadComposters();
        });
}
