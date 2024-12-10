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
            container.innerHTML = `<p class="text-gray-500">No hay registros disponibles para esta compostera.</p>`;
        } else {
            // Crear tabla y encabezado
            const table = document.createElement("table");
            table.className =
                "w-full text-left border-collapse border border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden";
            table.innerHTML = `
                <thead class="bg-gray-100">
                    <tr>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">ID</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Usuario</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Ciclo</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Fecha</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Inicio del ciclo</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");

            // Agregar filas con datos
            filteredData.forEach((regist) => {
                const row = document.createElement("tr");
                row.className = "hover:bg-gray-50 even:bg-gray-50";
                row.innerHTML = `
                    <td class="border border-gray-300 px-4 py-2 text-blue-600 font-medium">
                        <a href="#" data-id="${regist.id}">${regist.id}</a>
                    </td>
                    <td class="border border-gray-300 px-4 py-2">${
                        regist.user_id
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        regist.cicle_id
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${new Date(
                        regist.date
                    ).toLocaleDateString()}</td>
                    <td class="border border-gray-300 px-4 py-2">${
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
                "mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600";
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

            container.appendChild(backButton);

            container.appendChild(table);
        }
    } catch (error) {
        console.error("Error al obtener el historial:", error);
        container.innerHTML = `<p class="text-red-500">Ocurrió un error al cargar el historial.</p>`;
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
            container.innerHTML = `<p class="text-gray-500">No hay registros disponibles después de este ciclo.</p>`;
        } else {
            // Crear título para la sección "Después"
            const sectionTitle = document.createElement("h2");
            sectionTitle.className = "text-2xl font-bold mb-4 text-gray-700";
            sectionTitle.textContent = "Después";
            container.appendChild(sectionTitle);

            // Crear tabla y encabezado
            const table = document.createElement("table");
            table.className =
                "w-full text-left border-collapse border border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden";
            table.innerHTML = `
                <thead class="bg-gray-100">
                    <tr>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">ID</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Nivel de llenado</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Foto</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Observaciones</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");

            // Agregar filas con datos
            data.data.forEach((afters) => {
                const row = document.createElement("tr");
                row.className = "hover:bg-gray-50 even:bg-gray-50";
                row.innerHTML = `
                    <td class="border border-gray-300 px-4 py-2">${
                        afters.id
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        afters.fill_level || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        afters.photo
                            ? `<a href="${afters.photo}" target="_blank" class="text-blue-500 underline">Ver foto</a>`
                            : "Sin foto"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        afters.observations || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${new Date(
                        afters.created_at
                    ).toLocaleString()}</td>
                `;
                tbody.appendChild(row);
            });

            // Crear botones de navegación
            const backButton = document.createElement("button");
            backButton.className =
                "mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600";
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
                "mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-2";
            beforeButton.innerText = "Antes";
            beforeButton.addEventListener("click", () => {
                fetchBefore(registId); // Llamar a la función fetchBefore
            });

            const duringButton = document.createElement("button");
            duringButton.className =
                "mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600";
            duringButton.innerText = "Durante";
            duringButton.addEventListener("click", () => {
                fetchDuring(registId); // Llamar a la función fetchDuring
            });

            container.appendChild(backButton);
            container.appendChild(beforeButton);
            container.appendChild(duringButton);
            container.appendChild(table);
        }
    } catch (error) {
        console.error(
            "Error al obtener los datos posteriores al registro:",
            error
        );
        container.innerHTML = `<p class="text-red-500">Ocurrió un error al cargar los datos.</p>`;
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
            container.innerHTML = `<p class="text-gray-500">No hay registros anteriores para este ID.</p>`;
        } else {
            // Crear título para la sección "Antes"
            const sectionTitle = document.createElement("h2");
            sectionTitle.className = "text-2xl font-bold mb-4 text-gray-700";
            sectionTitle.textContent = "Antes";
            container.appendChild(sectionTitle);

            // Crear contenedor de tabla responsive
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "overflow-x-auto";

            // Crear tabla y encabezado
            const table = document.createElement("table");
            table.className =
                "min-w-full text-left border-collapse border border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden";
            table.innerHTML = `
                <thead class="bg-gray-100">
                    <tr>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">ID</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Registro ID</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Temperatura Ambiente</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Temperatura Compost</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Nivel de Llenado</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Olor</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Estado de Insectos</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Descripción de Insectos</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Humedad</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Fotos Iniciales</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Observaciones Iniciales</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Creado</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Actualizado</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");

            // Agregar filas con datos
            beforeData.forEach((before) => {
                const row = document.createElement("tr");
                row.className = "hover:bg-gray-50 even:bg-gray-50";
                row.innerHTML = `
                    <td class="border border-gray-300 px-4 py-2">${
                        before.id
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.regist_id
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.temp_ambient || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.temp_compost || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.fill_level || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.olor || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.insect_status === 1 ? "Presente" : "Ausente"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.insect_description || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.humidity || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.initial_photos
                            ? `<a href="${before.initial_photos}" target="_blank" class="text-blue-500 underline">Ver fotos</a>`
                            : "Sin fotos"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        before.initial_observations || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${new Date(
                        before.created_at
                    ).toLocaleString()}</td>
                    <td class="border border-gray-300 px-4 py-2">${new Date(
                        before.updated_at
                    ).toLocaleString()}</td>
                `;
                tbody.appendChild(row);
            });

            // Crear botón de Volver
            const backButton = document.createElement("button");
            backButton.className =
                "mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600";
            backButton.innerText = "Volver";

            // Evento al hacer clic en Volver
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

            const duringButton = document.createElement("button");
            duringButton.className =
                "mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600";
            duringButton.innerText = "Durante";
            duringButton.addEventListener("click", () => {
                fetchDuring(registId); // Llamar a la función fetchDuring
            });

            const afterButton = document.createElement("button");
            afterButton.className =
                "mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-2";
            afterButton.innerText = "Después";
            afterButton.addEventListener("click", () => {
                fetchAfter(registId); // Llamar a la función fetchBefore
            });

            container.appendChild(backButton);
            container.appendChild(afterButton);
            container.appendChild(duringButton);
            container.appendChild(table);

            // Añadir la tabla al contenedor
            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);
        }
    } catch (error) {
        console.error("Error al obtener los datos anteriores:", error);
        container.innerHTML = `<p class="text-red-500">Ocurrió un error al cargar los datos anteriores.</p>`;
    }
}

export async function fetchDuring(registId) {
    const container = document.getElementById("datosCompostera");

    try {
        // Limpia el contenedor antes de mostrar los nuevos datos
        container.innerHTML = "";

        // Usa fetchData para realizar la solicitud
        const result = await fetchData(`/api/regist/${registId}/during`);

        // Obtén los datos
        const duringData = result.data;

        // Si no hay datos, muestra un mensaje
        if (duringData.length === 0) {
            container.innerHTML = `<p class="text-gray-500">No hay registros disponibles durante este ciclo.</p>`;
        } else {
            // Crear título para la sección "Antes"
            const sectionTitle = document.createElement("h2");
            sectionTitle.className = "text-2xl font-bold mb-4 text-gray-700";
            sectionTitle.textContent = "Durante";
            container.appendChild(sectionTitle);

            // Crear contenedor de tabla responsive
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "overflow-x-auto";

            // Crear tabla y encabezado
            const table = document.createElement("table");
            table.className =
                "min-w-full text-left border-collapse border border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden";
            table.innerHTML = `
                <thead class="bg-gray-100">
                    <tr>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">ID</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Registro ID</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Riego Realizado</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Revolvimiento Realizado</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Depósito de Verde</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Cantidad de Verde</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Tipo de Verde</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Depósito de Seco</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Cantidad de Seco</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Tipo de Seco</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Fotos</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Observaciones</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Creado</th>
                        <th class="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">Actualizado</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");

            // Agregar filas con datos
            duringData.forEach((during) => {
                const row = document.createElement("tr");
                row.className = "hover:bg-gray-50 even:bg-gray-50";
                row.innerHTML = `
                    <td class="border border-gray-300 px-4 py-2">${
                        during.id
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.regist_id
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.watering_done === 1 ? "Sí" : "No"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.stirring_done === 1 ? "Sí" : "No"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.green_deposit === 1 ? "Sí" : "No"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.green_quantity || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.green_type || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.dry_deposit === 1 ? "Sí" : "No"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.dry_quantity || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.dry_type || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.photo
                            ? `<a href="${during.photo}" target="_blank" class="text-blue-500 underline">Ver fotos</a>`
                            : "Sin fotos"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${
                        during.observations || "N/A"
                    }</td>
                    <td class="border border-gray-300 px-4 py-2">${new Date(
                        during.created_at
                    ).toLocaleString()}</td>
                    <td class="border border-gray-300 px-4 py-2">${new Date(
                        during.updated_at
                    ).toLocaleString()}</td>
                `;
                tbody.appendChild(row);
            });

            // Crear botón de Volver
            const backButton = document.createElement("button");
            backButton.className =
                "mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600";
            backButton.innerText = "Volver";

            // Evento al hacer clic en Volver
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

            const afterButton = document.createElement("button");
            afterButton.className =
                "mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-2";
            afterButton.innerText = "Después";
            afterButton.addEventListener("click", () => {
                fetchAfter(registId); // Llamar a la función fetchBefore
            });

            const beforeButton = document.createElement("button");
            beforeButton.className =
                "mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-2";
            beforeButton.innerText = "Antes";
            beforeButton.addEventListener("click", () => {
                fetchBefore(registId); // Llamar a la función fetchBefore
            });

            container.appendChild(backButton);
            container.appendChild(beforeButton);
            container.appendChild(afterButton);
            container.appendChild(table);

            // Añadir la tabla al contenedor
            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);
        }
    } catch (error) {
        console.error("Error al obtener los datos durante el ciclo:", error);
        container.innerHTML = `<p class="text-red-500">Ocurrió un error al cargar los datos durante el ciclo.</p>`;
    }
}
