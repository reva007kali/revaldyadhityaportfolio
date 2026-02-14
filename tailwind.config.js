import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Inter",
                    "Helvetica Neue",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                ],
                mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                swiss: {
                    blue: "#c53535ff", // Vibrant Swiss Blue
                    red: "#FF0000", // Classic Swiss Red (optional accent)
                    offwhite: "#F5F5F5",
                    dark: "#111111",
                },
            },
          
            boxShadow: {
                swiss: "0 0 0 1px rgba(0,0,0,0.1)", // Subtle borders instead of shadows
                "swiss-hover": "0 0 0 2px #0055FF",
            },
        },
    },

    plugins: [forms],
};
