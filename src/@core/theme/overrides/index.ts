import { Theme } from '@mui/material/styles'

import MuiButton from './button'

const Overrides = (theme: Theme) => {
    const button = MuiButton(theme)

    return Object.assign(
        button
    )
}

export default Overrides