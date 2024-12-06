import { logout } from "./noToken.js";

export function fetchData(url) {
    const apiToken = sessionStorage.getItem("apiToken");

    if (!apiToken) {
        logout();
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

export function postData(url, data) {
    const apiToken = sessionStorage.getItem("apiToken");

    if (!apiToken) {
        logout();
        return Promise.reject(
            "Token no encontrado en el almacenamiento de sesión"
        );
    }

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Error al enviar los datos a ${url}`);
        }
        return response.json();
    });
}

export function patchData(url, data) {
    const apiToken = sessionStorage.getItem("apiToken");

    if (!apiToken) {
        logout();
        return Promise.reject(
            "Token no encontrado en el almacenamiento de sesión"
        );
    }

    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Error al actualizar los datos en ${url}`);
        }
        return response.json();
    });
}
