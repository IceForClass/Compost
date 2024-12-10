import { patchData, fetchData, postData } from "./api.js";
import { loadComposters } from "./composteras.js";

export function closeCicle(id) {
    patchData(`/api/composters/${id}`, { ocupada: 0 })
        .then((response) => {
            console.log(`Compostera ${id} actualizada exitosamente a vacía.`);
            if (id != 3) {
                openCicle(id + 1);
            } else {
                loadComposters();
            }
        })
        .catch((error) => {
            console.error("Error al actualizar la compostera:", error);
        });
}

export async function newCicle() {
    const now = new Date();
    const start = now.toISOString().replace("T", " ").split(".")[0];
    const bolo_id = localStorage.getItem("bolo_id");
    const cicleData = { bolo_id, start };
    const response = await postData("/api/cicle", cicleData);
    console.log("Ciclo creado:", response);
}

export function openCicle(id) {
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
        dateEndCicle();
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
        dateEndCicle();
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

    function dateEndCicle() {
        const cicle_id = localStorage.getItem("cicle_id");

        const now = new Date();
        const end = now.toISOString().replace("T", " ").split(".")[0];

        patchData(`/api/cicle/${cicle_id}`, { terminado: 1, end: end })
            .then((response) => {
                console.log(`Fecha de fin de ciclo añadida correctamente`);
            })
            .catch((error) => {
                console.error(
                    "Error al actualizar la fecha de fin del ciclo:",
                    error
                );
            });
    }
}
