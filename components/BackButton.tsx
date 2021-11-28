import { LinkButton } from "./LinkButton"
import { Box } from "@mui/material"
import React from "react"

export function BackButton() {
    return (
        <Box
            sx={{
                marginTop: "1em"
            }}
        >
            <LinkButton text={"Back"} />
        </Box>
    )
}
