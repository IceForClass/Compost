import { afterForm } from "./afterForm.js";
import { fetchData } from "./api.js";

export function duringForm(composterId) {
    const container = document.getElementById("datosCompostera");

    container.innerHTML = /* html */ `
        <h2 class="text-xl font-extrabold text-center text-green-600 mb-6">Formulario Durante para Compostera ${composterId}</h2>
        <div class="space-y-4">
            <div class="flex items-center space-x-3">
                <input type="checkbox" id="watering_done" name="watering_done" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                <label for="watering_done" class="text-sm font-medium text-gray-700 dark:text-gray-300">Riego Realizado</label>
            </div>
            <div class="flex items-center space-x-3">
                <input type="checkbox" id="stirring_done" name="stirring_done" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                <label for="stirring_done" class="text-sm font-medium text-gray-700 dark:text-gray-300">Remoción Realizada</label>
            </div>
            <div class="flex items-center space-x-3">
                <input type="checkbox" id="green_deposit" name="green_deposit" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                <label for="green_deposit" class="text-sm font-medium text-gray-700 dark:text-gray-300">Aporte Verde</label>
            </div>
            <div class="flex items-center space-x-3">
                <input type="checkbox" id="dry_deposit" name="dry_deposit" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                <label for="dry_deposit" class="text-sm font-medium text-gray-700 dark:text-gray-300">Aporte Seco</label>
            </div>
            <div>
                <label for="green_quantity" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Cantidad Verde (kg):</label>
                <input type="number" id="green_quantity" name="green_quantity" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" min="0" step="0.1">
            </div>
            <div>
                <label for="green_type" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Tipo de Aporte Verde:</label>
                <input type="text" id="green_type" name="green_type" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
            </div>
            <div>
                <label for="dry_quantity" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Cantidad Seca (kg):</label>
                <input type="number" id="dry_quantity" name="dry_quantity" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" min="0" step="0.1">
            </div>
            <div>
                <label for="dry_type" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Tipo de Aporte Seco:</label>
                <input type="text" id="dry_type" name="dry_type" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
            </div>
            <div>
                <label for="photo" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Foto (URL):</label>
                <input type="url" id="photo" name="photo" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
            </div>
            <div>
                <label for="observations" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Observaciones:</label>
                <textarea id="observations" name="observations" class="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
        </div>
        <div class="mt-6 flex justify-end">
            <button type="button" id="nextFormButton" class="bg-green-600 text-green-700 hover:text-green-100 dark:text-green-100 px-6 py-2 rounded-lg hover:bg-green-700 bg-opacity-10 border-2 border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Siguiente
            </button>
        </div>        
    `;
    document
        .getElementById("nextFormButton")
        .addEventListener("click", function () {
            const formData = saveDuringFormData();
            console.log("Formulario Durante:", formData);
            afterForm(composterId);
        });

    function saveDuringFormData() {
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
        getCicle();
        localStorage.setItem("duringFormData", JSON.stringify(formData));
        return formData;
    }

    function getCicle() {
        const boloId = localStorage.getItem("bolo_id");
        fetchData(`/api/bolo/${boloId}/cicle`)
            .then((cicleData) => {
                // Filtrar el ciclo que tiene 'terminado' en false
                const activeCicle = cicleData.data.find(
                    (cicle) => !cicle.terminado
                );
                if (activeCicle) {
                    console.log("Ciclo activo del bolo:", activeCicle.id);
                    localStorage.setItem("cicle_id", activeCicle.id);
                } else {
                    console.warn(
                        "No se encontró ningún ciclo activo para el bolo."
                    );
                }
            })
            .catch((error) => {
                console.error("Error al obtener el ciclo del bolo:", error);
            });
    }
}
