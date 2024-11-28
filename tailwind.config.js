import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Usa la clase 'dark' para activar el modo oscuro
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                light: {
                    primary: '#FFFFFF', // Fondo principal
                    secondary: '#F5F5F5', // Fondo secundario
                    highlight: '#E8F5E9', // Fondo destacado
                    'btn-primary': '#4CAF50', // Botón principal
                    'btn-primary-hover': '#388E3C', // Hover/Focus en botón principal
                    'btn-secondary': '#81C784', // Botón secundario
                    'accent-primary': '#FF9800', // Llamadas a la acción principales
                    'accent-secondary': '#FFB74D', // Detalles sutiles
                    'text-primary': '#212121', // Texto principal
                    'text-secondary': '#616161', // Texto secundario
                    'text-disabled': '#BDBDBD', // Texto desactivado
                    'border-primary': '#E0E0E0', // Líneas y bordes
                },
                dark: {
                    primary: '#121212', // Fondo principal
                    secondary: '#1E1E1E', // Fondo secundario
                    highlight: '#2E7D32', // Fondo destacado
                    'btn-primary': '#66BB6A', // Botón principal
                    'btn-primary-hover': '#388E3C', // Hover/Focus en botón principal
                    'btn-secondary': '#1B5E20', // Botón secundario
                    'accent-primary': '#FF8C00', // Llamadas a la acción principales
                    'accent-secondary': '#FFCC80', // Detalles sutiles
                    'text-primary': '#E0E0E0', // Texto principal
                    'text-secondary': '#B0BEC5', // Texto secundario
                    'text-disabled': '#757575', // Texto desactivado
                    'border-primary': '#424242', // Líneas y bordes
                },
            },
        },
    },

    plugins: [forms],
};
