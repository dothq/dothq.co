const lightTheme = {
    isDark: false,
    colors: {
        primary: '#0070f3',
        secondary: '#ffffff',
        tertiary: '#000000'
    },
    ui: {
        background: '#ffffff',
        color: '#000',
        titleGradient: 'linear-gradient(45deg, #7e7e7e, black)',
        logoGradient: 'linear-gradient(135.94deg,#000000 0%,#2B2B2B 84.74%)',
        homeBackground: '#f9f9f9',
        border: '#eaeaea',
    }
}

const darkTheme = {
    isDark: true,
    colors: {
        primary: '#0070f3',
        secondary: '#000000',
        tertiary: '#ffffff'
    },
    ui: {
        background: '#000000',
        color: '#fff',
        titleGradient: 'linear-gradient(45deg, #d2d2d2, white)',
        logoGradient: 'linear-gradient(135.94deg,#ffffff 0%,#cecece 84.74%)',
        homeBackground: '#0e0e0e',
        border: '#333333'
    }
}

module.exports = { lightTheme, darkTheme }