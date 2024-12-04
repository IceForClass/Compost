export function fetchData(url) {
    const apiToken = sessionStorage.getItem("apiToken");

    if (!apiToken) {
        return Promise.reject(
            "Token no encontrado en el almacenamiento de sesión"
        );
    }

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Error al obtener los datos desde ${url}`);
        }
        return response.json();
    });
}
