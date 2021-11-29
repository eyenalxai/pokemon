import type { AppProps } from "next/app"
import Head from "next/head"
import useMediaQuery from "@mui/material/useMediaQuery"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useMemo } from "react"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps }: AppProps) {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? "dark" : "light"
                }
            }),
        [prefersDarkMode]
    )

    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Pokemon Helper</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </RecoilRoot>
    )
}

export default MyApp
