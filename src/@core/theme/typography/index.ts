import { Theme } from '@mui/material/styles'

const Typography = (theme:Theme) => {
    return {
        h1: {
            fontWeight: 500,
            color: theme.palette.text.primary
          }
    }
}
export default Typography