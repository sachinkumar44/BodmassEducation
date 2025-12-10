/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1e3a8a', // Deep Blue
                    dark: '#1e293b',
                    light: '#3b82f6',
                },
                secondary: {
                    DEFAULT: '#ea580c', // Orange/Red
                    dark: '#c2410c',
                    light: '#fb923c',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
