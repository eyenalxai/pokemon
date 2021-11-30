import React from "react"
import { Box } from "@mui/material"
import { MainContainer } from "../components/MainContainer"
import { LinkButton } from "../components/LinkButton"

export default function Home() {
    return (
        <MainContainer>
            <Box
                sx={{
                    marginTop: "6em",
                    display: "flex",
                    flexDirection: "row",
                    gap: "1em"
                }}
            >
                <LinkButton href={"pokemon"} text={"Pokémon"} />
                <LinkButton href={"type"} text={"Type"} />
            </Box>
        </MainContainer>
    )
}
