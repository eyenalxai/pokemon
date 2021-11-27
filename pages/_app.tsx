import type { AppProps } from 'next/app'
import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import Head from 'next/head';
import { theme } from "../util/Theme";


function MyApp({ Component, pageProps }: AppProps) {

    const colorModeManager =
        typeof pageProps.cookies === "string"
            ? cookieStorageManager(pageProps.cookies)
            : localStorageManager

    return (
        <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
            <Head>
                <title>Pokemon Helper</title>
            </Head>
            <Component { ...pageProps } />
        </ChakraProvider>
    )
}

export default MyApp
