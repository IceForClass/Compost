import { fetchData } from "./api.js";

export function centreName() {
    const idUser = sessionStorage.getItem("idUser");
    fetchData(`/api/users/${idUser}/centres/`).then((data) => {
        const centreData = data.data[0];
        const container = document.getElementById("nombreCentro");

        container.innerHTML = "";
        container.className =
            "text-center text-xl font-semibold text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 p-4 rounded shadow";

        sessionStorage.setItem("idCentre", centreData.id);
        container.innerHTML = centreData.name || "Centro Desconocido";
    });
}