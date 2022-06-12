module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                '25rem': '25rem',
            },
        },
    },
    plugins: [require("daisyui")],
}