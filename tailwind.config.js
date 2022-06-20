module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}","node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                '25rem': '25rem',
            },
        },
    },
    plugins: [
        require('daisyui'),
        require('flowbite/plugin')
    ],
}