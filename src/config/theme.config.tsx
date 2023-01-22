import { createTheme } from "@mui/material"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material"
import React from "react"


type themeProp = {
    children: JSX.Element
}

enum themePalette {
    BACKGROUND = '#ffffff',
    LIGHT = "#4dffff"
}

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: themePalette.BACKGROUND
        },
        // primary: {
        //     main: themePalette.LIGHT
        // }
    }
})

export const ThemeConfig: React.FC<themeProp> = ({children}) => {
    return (
        <ThemeProvider
            theme={theme}
        >
            <CssBaseline>
                {children}
            </CssBaseline>
        </ThemeProvider>
    )
}