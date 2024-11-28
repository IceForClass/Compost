document.getElementById("fetchCentre").addEventListener("click", function () {
    const centreId = this.getAttribute("data-id"); // Obtener el ID del centro del atributo data-id
    // Llamada al API para obtener el centro por ID
    fetch(`/api/centres/${centreId}`)
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
