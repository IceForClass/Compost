import { patchData, fetchData } from "./api.js";
import { loadComposters } from "./composteras.js";

export function closeCycle(id) {
    patchData(`/api/composters/${id}`, { ocupada: 0 })
        .then((response) => {
            console.log(`Compostera ${id} actualizada exitosamente a vacía.`);
            openCycle(id + 1);
        })
        .catch((error) => {
            console.error("Error al actualizar la compostera:", error);
        });
}

export function openCycle(id) {
    patchData(`/api/composters/${id}`, { ocupada: 1 })
        .then((response) => {
            console.log(`Compostera ${id} actualizada exitosamente a ocupada.`);
            loadComposters();
        })
        .catch((error) => {
            console.error("Error al actualizar la compostera:", error);
        });
}

export async function checkNextComposter(id) {
    const response = await fetchData(`/api/composters/${id + 1}`);
    const composterData = response.data;

    // Verificar si la siguiente compostera está ocupada
    if (composterData.ocupada === 1) {
        console.log(`La compostera ${id + 1} está ocupada`);
        return false;
    } else {
        console.log(`La compostera ${id + 1} no está ocupada`);
        return true;
    }
}
