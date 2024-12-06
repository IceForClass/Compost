import { loadComposters } from "./composteras.js";
import { closeCycle } from "./endCycle.js";

export function afterForm(composterId) {
    const container = document.getElementById("datosCompostera");

    container.innerHTML = /* html */ `
        <h2 class="text-xl font-extrabold text-center text-green-600 mb-6">Formulario de Después para Compostera ${composterId}</h2>
        <div class="space-y-4">
            <div>
                <label for="fill_level" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nivel de Llenado:</label>
                <select id="fill_level" name="fill_level" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required>
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
            <div>
                <label for="photo" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Foto (URL):</label>
                <input type="url" id="photo" name="photo" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
                <label for="observations" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Observaciones:</label>
                <textarea id="observations" name="observations" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div>
                <label for="end_cycle" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Fin de Ciclo:</label>
                <input type="checkbox" id="end_cycle" name="end_cycle" class="mt-2 rounded border-gray-300 text-green-600 focus:ring-green-500">
            </div>
        </div>
        <div class="mt-6 flex justify-end">
            <button type="button" id="saveButton" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Guardar
            </button>
        </div>
    `;

    document
        .getElementById("saveButton")
        .addEventListener("click", function () {
            const formData = saveAfterFormData();
            console.log("Formulario Después:", formData);

            const endCycleCheckbox = document.getElementById("end_cycle");

            if (endCycleCheckbox.checked) {
                console.log("Fin de Ciclo marcado...");
                closeCycle(composterId);
            } else {
                loadComposters();
            }
        });

    function saveAfterFormData() {
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
        localStorage.setItem("afterFormData", JSON.stringify(formData));
        return formData;
    }
}
