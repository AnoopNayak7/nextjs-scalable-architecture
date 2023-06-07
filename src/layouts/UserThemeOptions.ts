import { ThemeOptions } from '@mui/system'

const UserThemeOptions = (): ThemeOptions => {
    return {
        palette: {
            mode: 'light',
            primary: {
                main: '#6200ee'
            },
            secondary: {
                main: '#3700b3'
            }
        },
        typography: {
            fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
        },
        shape: {
            borderRadius: 8
        }
    }
}

export default UserThemeOptions

