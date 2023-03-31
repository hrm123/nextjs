const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode : true,
    theme:{
        extend:{
            fontFaimly: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
}