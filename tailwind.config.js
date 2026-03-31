/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: "#0A192F",
                    navyLight: "#112240",
                    turquoise: "#00CED1",
                    marine: "#008B8B",
                    white: "#FFFFFF",
                    gray: "#F8FAFC",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
