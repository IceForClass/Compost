import { patchData, fetchData } from "./api.js";
import { loadComposters } from "./composteras.js";

export function closeCycle(id) {
    patchData(`/api/composters/${id}`, { ocupada: 0 })
        .then((response) => {
            console.log(`Compostera ${id} actualizada exitosamente a vacía.`);
            if (id != 3) {
                openCycle(id + 1);
            } else {
                loadComposters();
            }
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
    if (id == 3) {
        updateCicle(id);
        return true;
    }
    const response = await fetchData(`/api/composters/${id + 1}`);
    const composterData = response.data;

    // Verificar si la siguiente compostera está ocupada
    if (composterData.ocupada === 1) {
        console.log(`La compostera ${id + 1} está ocupada`);
        return false;
    } else {
        console.log(`La compostera ${id + 1} no está ocupada`);
        updateCicle(id);
        return true;
    }

    function updateCicle(id) {
        const bolo_id = localStorage.getItem("bolo_id");
        if (id == 3) {
            patchData(`/api/bolo/${bolo_id}`, { finish: 1 })
                .then((response) => {
                    console.log(
                        `Bolo ${bolo_id} actualizado exitosamente a terminado.`
                    );
                })
                .catch((error) => {
                    console.error("Error al actualizar el bolo:", error);
                });
        } else if (id == 1) {
            patchData(`/api/bolo/${bolo_id}`, { cicle2: 1 })
                .then((response) => {
                    console.log(
                        `Bolo ${bolo_id} actualizado exitosamente al ciclo 2.`
                    );
                })
                .catch((error) => {
                    console.error("Error al actualizar el bolo:", error);
                });
        } else if (id == 2) {
            patchData(`/api/bolo/${bolo_id}`, { cicle3: 1 })
                .then((response) => {
                    console.log(
                        `Bolo ${bolo_id} actualizado exitosamente al ciclo 3.`
                    );
                })
                .catch((error) => {
                    console.error("Error al actualizar el bolo:", error);
                });
        }
    }
}
