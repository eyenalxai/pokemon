import React from "react";
import { Box, Button, Link } from "@mui/material";
import { MyContainer } from "../components/MyContainer";
import { LinkButton } from "../components/LinkButton";

export default function Home() {
    return (
        <MyContainer>
            <Box sx={ {
                marginTop: "6em",
                display: "flex",
                flexDirection: "row",
                gap: "1em"
            } }>
                <LinkButton href={"pokemon"} text={"Pokémon"}/>
                <LinkButton href={"types"} text={"Types"}/>
            </Box>
        </MyContainer>
    )
}