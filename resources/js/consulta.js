document.getElementById("fetchCentre").addEventListener("click", function () {
    const centreId = this.getAttribute("data-id");
    const apiToken = sessionStorage.getItem("apiToken");

    if (!apiToken) {
        document.getElementById("NombreCentro").textContent =
            "Token no encontrado en el almacenamiento de sesión";
        return;
    }

    // Se llama a la api con el token en el encabezado de la petición
    fetch(`/api/centres/${centreId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`, // Incluir el token en el encabezado
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener el centro");
            }
            return response.json();
        })
        .then((data) => {
            // Mostrar el nombre del centro
            document.getElementById("NombreCentro").textContent =
                data.data.name;
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById("NombreCentro").textContent =
                "Error al obtener el nombre del centro";
        });
});
