/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: '#150E28',
                purple: '#903AFF',
                pink: '#D434FE',
                pinker: '#FE34B9'
            },
            fontFamily: {
                unica: ['Unica One', 'cursive'],
                montserrat: ['Montserrat', 'sans-serif']
            }
        }
    },
    plugins: []
};
