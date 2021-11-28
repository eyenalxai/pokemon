import { Box, CircularProgress } from "@mui/material"
import React from "react"

export function Loading() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "4em"
            }}
        >
            <CircularProgress />
        </Box>
    )
}
