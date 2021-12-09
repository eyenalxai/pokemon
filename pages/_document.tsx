import { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
                    <link rel="manifest" href="/site.webmanifest?v=2" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#D1D5DB" />
                    <link rel="shortcut icon" href="/favicon.ico?v=2" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#FFF" media="(prefers-color-scheme: light)" />
                    <meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)" />
                    <meta name="description" content="Pokemon types and weaknesses checker." />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
