import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Usa la clase 'dark' para activar el modo oscuro
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        './resources/views/**/*.blade.php', // Blade templates
        './resources/js/**/*.{js, vue, ts, tsx}',          // Any JS/TS/TSX files
        './resources/css/**/*.css',        // Any CSS files with Tailwind classes
        './storage/framework/views/*.php', // Cached Blade views
        './resources/lang/**/*.php',       // (Optional) Localization files, if needed
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
                title: ["Montserrat Alternates", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                light: {
                    primary: '#FFFFFF', // White (Fondo principal)
                    secondary: '#F5F5F5', // Light Gray (Fondo secundario)
                    highlight: '#E8F5E9', // Pale Green (Fondo destacado)
                    'btn-primary': '#4CAF50', // Teal (Botón principal)
                    'btn-primary-hover': '#388E3C', // Dark Teal (Hover/Focus en botón principal)
                    'btn-secondary': '#81C784', // Pastel Green (Botón secundario)
                    'accent-primary': '#FF9800', // Amber (Llamadas a la acción principales)
                    'accent-secondary': '#FFB74D', // Light Amber (Detalles sutiles)
                    'text-primary': '#212121', // Dark Gray (Texto principal)
                    'text-secondary': '#616161', // Medium Gray (Texto secundario)
                    'text-disabled': '#BDBDBD', // Light Gray (Texto desactivado)
                    'border-primary': '#E0E0E0', // Light Gray (Líneas y bordes)
                },
                dark: {
                    primary: '#121212', // Charcoal (Fondo principal)
                    secondary: '#1E1E1E', // Dark Gray (Fondo secundario)
                    highlight: '#2E7D32', // Forest Green (Fondo destacado)
                    'btn-primary': '#66BB6A', // Lime Green (Botón principal)
                    'btn-primary-hover': '#388E3C', // Dark Teal (Hover/Focus en botón principal)
                    'btn-secondary': '#1B5E20', // Forest Green (Botón secundario)
                    'accent-primary': '#FF8C00', // Orange (Llamadas a la acción principales)
                    'accent-secondary': '#FFCC80', // Light Orange (Detalles sutiles)
                    'text-primary': '#E0E0E0', // Light Gray (Texto principal)
                    'text-secondary': '#B0BEC5', // Medium Gray (Texto secundario)
                    'text-disabled': '#757575', // Dark Gray (Texto desactivado)
                    'border-primary': '#424242', // Dark Gray (Líneas y bordes)
                },
            },
        },
    },

    plugins: [
        forms
    ],
};
