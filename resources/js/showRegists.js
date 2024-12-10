import { fetchData } from "./api.js";
import { loadComposters } from "./composteras.js";

export async function fetchHistory(composterId) {
    const container = document.getElementById("datosCompostera");

    localStorage.setItem("composterId", JSON.stringify(composterId));

    try {
        // Limpia el contenedor antes de mostrar los nuevos datos
        container.innerHTML = "";

        // Usa fetchData para obtener los datos del histórico
        const data = await fetchData("/api/regist/");

        // Filtra los registros para la compostera seleccionada
        const filteredData = data.data.filter(
            (regist) => regist.composter_id === composterId
        );

        // Si no hay registros, muestra un mensaje adecuado
        if (filteredData.length === 0) {
            container.innerHTML = `<p class="text-gray-500 dark:text-gray-400 text-center">No hay registros disponibles para esta compostera.</p>`;
        } else {
            // Crear tabla y encabezado
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "overflow-x-auto"; // Hacer que la tabla sea desplazable horizontalmente en pantallas pequeñas

            const table = document.createElement("table");
            table.className =
                "w-full text-left border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden";

            table.innerHTML = `
                <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">ID</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Usuario</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Ciclo</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Fecha</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Inicio del ciclo</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");

            // Agregar filas con datos
            filteredData.forEach((regist) => {
                const row = document.createElement("tr");
                row.className =
                    "hover:bg-gray-50 dark:hover:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800";
                row.innerHTML = `
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-blue-600 dark:text-blue-400 font-medium">
                        <a href="#" data-id="${regist.id}">${regist.id}</a>
                    </td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        regist.user_id
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        regist.cicle_id
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${new Date(
                        regist.date
                    ).toLocaleDateString()}</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        regist.cicle_start ? "Sí" : "No"
                    }</td>
                `;
                tbody.appendChild(row);

                // Agregar evento al enlace del ID
                row.querySelector(`[data-id="${regist.id}"]`).addEventListener(
                    "click",
                    (event) => {
                        event.preventDefault();
                        fetchBefore(regist.id);
                    }
                );
            });

            // Crear botón de Volver
            const backButton = document.createElement("button");
            backButton.className =
                "mt-4 px-6 py-2 bg-gray-500 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition";
            backButton.innerText = "Volver";

            // Evento al hacer clic en Volver
            backButton.addEventListener("click", () => {
                const composterId = JSON.parse(
                    localStorage.getItem("composterId")
                );
                if (composterId) {
                    loadComposters(); // Llamar a fetchHistory con el composterId
                } else {
                    console.error(
                        "No se encontró el composterId en el localStorage"
                    );
                }
            });

            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);
            container.appendChild(backButton);
        }
    } catch (error) {
        console.error("Error al obtener el historial:", error);
        container.innerHTML = `<p class="text-red-500 dark:text-red-400 text-center">Ocurrió un error al cargar el historial.</p>`;
    }
}

export async function fetchAfter(registId) {
    const container = document.getElementById("datosCompostera");

    try {
        // Limpia el contenedor antes de mostrar los nuevos datos
        container.innerHTML = "";

        // Usa fetchData para obtener los datos después del registro
        const data = await fetchData(`/api/regist/${registId}/after`);

        // Si no hay datos, muestra un mensaje adecuado
        if (data.data.length === 0) {
            container.innerHTML = `<p class="text-gray-500 dark:text-gray-400 text-center">No hay registros disponibles después de este ciclo.</p>`;
        } else {
            // Crear título para la sección "Después"
            const sectionTitle = document.createElement("h2");
            sectionTitle.className =
                "text-2xl font-bold mb-6 text-gray-700 dark:text-gray-200 text-center";
            sectionTitle.textContent = "Registros Después del Ciclo";
            container.appendChild(sectionTitle);

            // Crear contenedor para la tabla (scroll horizontal)
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "overflow-x-auto";

            // Crear tabla y encabezado
            const table = document.createElement("table");
            table.className =
                "w-full text-left border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden";
            table.innerHTML = `
                <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">ID</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Nivel de llenado</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Foto</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Observaciones</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");

            // Agregar filas con datos
            data.data.forEach((afters) => {
                const row = document.createElement("tr");
                row.className =
                    "hover:bg-gray-50 dark:hover:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800";
                row.innerHTML = `
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        afters.id
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        afters.fill_level || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">
                        ${
                            afters.photo
                                ? `<a href="${afters.photo}" target="_blank" class="text-blue-500 dark:text-blue-400 underline">Ver foto</a>`
                                : "Sin foto"
                        }
                    </td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        afters.observations || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${new Date(
                        afters.created_at
                    ).toLocaleString()}</td>
                `;
                tbody.appendChild(row);
            });

            // Crear botones de navegación
            const buttonContainer = document.createElement("div");
            buttonContainer.className =
                "flex flex-wrap justify-center gap-4 mt-6";

            const backButton = document.createElement("button");
            backButton.className =
                "px-6 py-2 bg-gray-500 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition";
            backButton.innerText = "Volver";
            backButton.addEventListener("click", () => {
                const composterId = JSON.parse(
                    localStorage.getItem("composterId")
                );
                if (composterId) {
                    fetchHistory(composterId); // Llamar a fetchHistory con el composterId
                } else {
                    console.error(
                        "No se encontró el composterId en el localStorage"
                    );
                }
            });

            const beforeButton = document.createElement("button");
            beforeButton.className =
                "px-6 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition";
            beforeButton.innerText = "Antes";
            beforeButton.addEventListener("click", () => {
                fetchBefore(registId); // Llamar a la función fetchBefore
            });

            const duringButton = document.createElement("button");
            duringButton.className =
                "px-6 py-2 bg-yellow-500 dark:bg-yellow-700 text-white rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500 transition";
            duringButton.innerText = "Durante";
            duringButton.addEventListener("click", () => {
                fetchDuring(registId); // Llamar a la función fetchDuring
            });

            buttonContainer.appendChild(backButton);
            buttonContainer.appendChild(beforeButton);
            buttonContainer.appendChild(duringButton);

            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);
            container.appendChild(buttonContainer);
        }
    } catch (error) {
        console.error(
            "Error al obtener los datos posteriores al registro:",
            error
        );
        container.innerHTML = `<p class="text-red-500 dark:text-red-400 text-center">Ocurrió un error al cargar los datos.</p>`;
    }
}

export async function fetchBefore(registId) {
    const container = document.getElementById("datosCompostera");

    try {
        // Limpia el contenedor antes de mostrar los nuevos datos
        container.innerHTML = "";

        // Usa fetchData para realizar la solicitud
        const result = await fetchData(`/api/regist/${registId}/before`);

        // Obtén los datos
        const beforeData = result.data;

        // Si no hay datos, muestra un mensaje
        if (beforeData.length === 0) {
            container.innerHTML = `<p class="text-gray-500 dark:text-gray-400 text-center">No hay registros anteriores para este ID.</p>`;
        } else {
            // Crear título para la sección "Antes"
            const sectionTitle = document.createElement("h2");
            sectionTitle.className =
                "text-2xl font-bold mb-6 text-gray-700 dark:text-gray-200 text-center";
            sectionTitle.textContent = "Registros Antes del Ciclo";
            container.appendChild(sectionTitle);

            // Crear contenedor de tabla responsive
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "overflow-x-auto";

            // Crear tabla y encabezado
            const table = document.createElement("table");
            table.className =
                "w-full text-left border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden";
            table.innerHTML = `
                <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">ID</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Registro ID</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Temp. Ambiente</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Temp. Compost</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Nivel de Llenado</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Olor</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Insectos</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Descripción</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Humedad</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Fotos</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Observaciones</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Creado</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Actualizado</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");

            // Agregar filas con datos
            beforeData.forEach((before) => {
                const row = document.createElement("tr");
                row.className =
                    "hover:bg-gray-50 dark:hover:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800";
                row.innerHTML = `
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.id
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.regist_id
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.temp_ambient || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.temp_compost || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.fill_level || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.olor || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.insect_status === 1 ? "Presente" : "Ausente"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.insect_description || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.humidity || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">${
                        before.initial_photos
                            ? `<a href="${before.initial_photos}" target="_blank" class="text-blue-500 dark:text-blue-400 underline">Ver fotos</a>`
                            : "Sin fotos"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        before.initial_observations || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${new Date(
                        before.created_at
                    ).toLocaleString()}</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${new Date(
                        before.updated_at
                    ).toLocaleString()}</td>
                `;
                tbody.appendChild(row);
            });

            // Crear botones de navegación
            const buttonContainer = document.createElement("div");
            buttonContainer.className =
                "flex flex-wrap justify-center gap-4 mt-6";

            const backButton = document.createElement("button");
            backButton.className =
                "px-6 py-2 bg-gray-500 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition";
            backButton.innerText = "Volver";
            backButton.addEventListener("click", () => {
                const composterId = JSON.parse(
                    localStorage.getItem("composterId")
                );
                if (composterId) {
                    fetchHistory(composterId);
                } else {
                    console.error(
                        "No se encontró el composterId en el localStorage"
                    );
                }
            });

            const afterButton = document.createElement("button");
            afterButton.className =
                "px-6 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition";
            afterButton.innerText = "Después";
            afterButton.addEventListener("click", () => {
                fetchAfter(registId);
            });

            const duringButton = document.createElement("button");
            duringButton.className =
                "px-6 py-2 bg-yellow-500 dark:bg-yellow-700 text-white rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500 transition";
            duringButton.innerText = "Durante";
            duringButton.addEventListener("click", () => {
                fetchDuring(registId);
            });

            buttonContainer.appendChild(backButton);
            buttonContainer.appendChild(afterButton);
            buttonContainer.appendChild(duringButton);

            // Añadir tabla y botones al contenedor
            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);
            container.appendChild(buttonContainer);
        }
    } catch (error) {
        console.error("Error al obtener los datos anteriores:", error);
        container.innerHTML = `<p class="text-red-500 dark:text-red-400 text-center">Ocurrió un error al cargar los datos anteriores.</p>`;
    }
}

export async function fetchDuring(registId) {
    const container = document.getElementById("datosCompostera");

    try {
        // Limpia el contenedor antes de mostrar los nuevos datos
        container.innerHTML = "";

        // Realiza la solicitud para obtener los datos
        const result = await fetchData(`/api/regist/${registId}/during`);

        // Datos obtenidos
        const duringData = result.data;

        // Verifica si hay datos
        if (duringData.length === 0) {
            container.innerHTML = `
                <p class="text-center text-gray-500 mt-6">
                    No hay registros disponibles durante este ciclo.
                </p>`;
        } else {
            // Crear título de la sección
            const sectionTitle = document.createElement("h2");
            sectionTitle.className =
                "text-2xl font-bold mb-6 text-gray-700 dark:text-gray-200 text-center";
            sectionTitle.textContent = "Registros Durante el Ciclo";
            container.appendChild(sectionTitle);

            // Crear tabla responsive
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "overflow-x-auto";
            const table = document.createElement("table");
            table.className =
                "w-full text-left border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden";

            // Encabezado de la tabla
            table.innerHTML = `
                <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">ID</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Registro ID</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Riego</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Revolvimiento</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Depósito Verde</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Cantidad Verde</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Tipo Verde</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Depósito Seco</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Cantidad Seco</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Tipo Seco</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Fotos</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Observaciones</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Creado</th>
                        <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">Actualizado</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;
            const tbody = table.querySelector("tbody");

            // Agregar filas de datos
            duringData.forEach((during) => {
                const row = document.createElement("tr");
                row.className =
                    "hover:bg-gray-50 dark:hover:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800";
                row.innerHTML = `
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.id
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.regist_id
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.watering_done ? "Sí" : "No"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.stirring_done ? "Sí" : "No"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.green_deposit ? "Sí" : "No"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.green_quantity || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.green_type || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.dry_deposit ? "Sí" : "No"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.dry_quantity || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.dry_type || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">${
                        during.photo
                            ? `<a href="${during.photo}" target="_blank" class="text-blue-500 dark:text-blue-400 underline">Ver fotos</a>`
                            : "Sin fotos"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${
                        during.observations || "N/A"
                    }</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${new Date(
                        during.created_at
                    ).toLocaleString()}</td>
                    <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-300">${new Date(
                        during.updated_at
                    ).toLocaleString()}</td>
                `;
                tbody.appendChild(row);
            });

            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);

            // Crear botones de navegación
            const buttonContainer = document.createElement("div");
            buttonContainer.className =
                "flex flex-wrap justify-center gap-4 mt-6";

            const beforeButton = document.createElement("button");
            beforeButton.className =
                "px-6 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition";
            beforeButton.innerText = "Antes";
            beforeButton.addEventListener("click", () => {
                fetchBefore(registId);
            });

            const afterButton = document.createElement("button");
            afterButton.className =
                "px-6 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition";
            afterButton.innerText = "Después";
            afterButton.addEventListener("click", () => {
                fetchAfter(registId);
            });

            const backButton = document.createElement("button");
            backButton.className =
                "px-6 py-2 bg-gray-500 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition";
            backButton.innerText = "Volver";
            backButton.addEventListener("click", () => {
                const composterId = JSON.parse(
                    localStorage.getItem("composterId")
                );
                if (composterId) {
                    fetchHistory(composterId);
                } else {
                    console.error(
                        "No se encontró el composterId en el localStorage"
                    );
                }
            });

            buttonContainer.appendChild(beforeButton);
            buttonContainer.appendChild(afterButton);
            buttonContainer.appendChild(backButton);
            container.appendChild(buttonContainer);
        }
    } catch (error) {
        console.error("Error al obtener los datos durante el ciclo:", error);
        container.innerHTML = `
            <p class="text-center text-red-500 dark:text-red-400 mt-6">
                Ocurrió un error al cargar los datos durante el ciclo.
            </p>`;
    }
}
