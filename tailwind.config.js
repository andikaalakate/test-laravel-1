import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                color: {
                    whity: "#efefef",
                    primary: "#0059ff",
                    accent: "#ffc639",
                    secondary: "#393e46",
                    dark: "#222831",
                },
            },
            screens: {
                pc: "1920px",
                laptop: "1366px",
                "tablet-l": "992px",
                hp: "576px",
                hmin: "425px",
                minni: "375px",
                mini: "320px",
            },
        },
    },

    plugins: [
        forms, 
        require("tailwind-scrollbar"), 
        require("daisyui")
    ],
    daisyui: {
    themes: ["light", "dark"],
  },
};
