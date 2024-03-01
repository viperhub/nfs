/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                danger: 'var(--color-danger)',
                'primary-text': 'var(--color-primary-text)',

                'text-primary': 'var(--color-text-primary)',
                'text-default': 'var(--color-text-default)',
                paper: 'var(--color-paper)',

                border: 'var(--color-border)',
                'input-filled': 'var(--color-input-filled)',
            },
        },
    },
    plugins: [],
    fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
    }
};