import { MainContainer } from "../components/MainContainer"
import { Box } from "@mui/material"
import React from "react"
import { BackButton } from "../components/BackButton"

export default function Custom404() {
    return (
        <MainContainer maxWidth={"md"}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center"
                }}
            >
                <h1>OOPSIE WOOPSIE!!</h1>
                <h2>Uwu You made a fucky wucky!!</h2>
                <h3>A wittle fucko boingo!</h3>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <BackButton />
            </Box>
        </MainContainer>
    )
}
