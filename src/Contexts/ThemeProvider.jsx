import React from 'react'
export const themes = {
    DARK: {
        dark: true,
        colors: {
            primary: 'white',
            background: 'black',
            card: 'black',
            text: 'white',
            details: 'purple',
            border: 'gray',
            notification: 'green',
        },
    },
    LIGHT: {
        dark: false,
        colors: {
            primary: 'black',
            background: 'white',
            card: 'white',
            text: 'black',
            details: 'purple',
            border: 'gray',
            notification: 'green',
        },
    },
}

const ThemeContext = React.createContext()

export default ThemeContext
