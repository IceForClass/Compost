export function logout() {
    const csrfToken = document.head.querySelector(
        'meta[name="csrf-token"]' // https://laravel.com/docs/11.x/csrf
    ).content;

    return fetch("/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
        },
    })
        .then((response) => {
            if (response.ok) {
                // Obligamos al usuario a volver a loguearse para obtener de nuevo el token
                window.location.href = "/login";
            } else {
                console.error("Error al intentar cerrar sesión");
            }
        })
        .catch((error) => {
            console.error("Error en la solicitud de logout:", error);
        });
}
