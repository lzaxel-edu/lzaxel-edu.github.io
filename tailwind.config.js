/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: ['selector', '[color-scheme="dark"]'],
    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#f9f5ff',
                    '100': '#f2e9fe',
                    '200': '#e7d6fe',
                    '300': '#d4b6fc',
                    '400': '#bf90f9',
                    '500': '#a05af2',
                    '600': '#8a38e5',
                    '700': '#7627c9',
                    '800': '#6425a4',
                    '900': '#531f84',
                    '950': '#360a61',
                }
            }
        }
    },
    plugins: [],
}