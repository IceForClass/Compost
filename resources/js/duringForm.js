import { afterForm } from "./afterForm.js";

export function duringForm(composterId) {
    const container = document.getElementById("DatosCompostera");

    container.innerHTML = "";

    container.innerHTML = `
        <h2 class="text-lg text-white font-bold mb-4">Formulario Durante para Compostera ${composterId}</h2>
            <div class="mb-4">
                <label for="watering_done" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Riego Realizado:</label>
                <input type="checkbox" id="watering_done" name="watering_done" class="mt-1">
            </div>
            <div class="mb-4">
                <label for="stirring_done" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Remoción Realizada:</label>
                <input type="checkbox" id="stirring_done" name="stirring_done" class="mt-1">
            </div>
            <div class="mb-4">
                <label for="green_deposit" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Aporte Verde:</label>
                <input type="checkbox" id="green_deposit" name="green_deposit" class="mt-1">
            </div>
            <div class="mb-4">
                <label for="green_quantity" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Cantidad Verde (kg):</label>
                <input type="number" id="green_quantity" name="green_quantity" class="mt-1 block w-full" min="0" step="0.1">
            </div>
            <div class="mb-4">
                <label for="green_type" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Tipo de Aporte Verde:</label>
                <input type="text" id="green_type" name="green_type" class="mt-1 block w-full">
            </div>
            <div class="mb-4">
                <label for="dry_deposit" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Aporte Seco:</label>
                <input type="checkbox" id="dry_deposit" name="dry_deposit" class="mt-1">
            </div>
            <div class="mb-4">
                <label for="dry_quantity" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Cantidad Seca (kg):</label>
                <input type="number" id="dry_quantity" name="dry_quantity" class="mt-1 block w-full" min="0" step="0.1">
            </div>
            <div class="mb-4">
                <label for="dry_type" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Tipo de Aporte Seco:</label>
                <input type="text" id="dry_type" name="dry_type" class="mt-1 block w-full">
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
                <button type="button" id="nextFormButton" class="bg-green-500 text-white py-2 px-4 rounded">Siguiente</button>
            </div>        
    `;
    document
        .getElementById("nextFormButton")
        .addEventListener("click", function () {
            afterForm(composterId);
        });
}
