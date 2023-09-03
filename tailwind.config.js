module.exports = {
    content: ['./src/**/*.{html,js}'],   
    theme: {
        extend: {
            screens: {
                'dark': {'raw': '(prefers-color-scheme: dark)'},
            }
        }
    }, 
};