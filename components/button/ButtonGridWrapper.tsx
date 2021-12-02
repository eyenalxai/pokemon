import { Box } from "@mui/material"
import React from "react"

export function ButtonGridWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1em",
                marginTop: "2em"
            }}
        >
            {children}
        </Box>
    )
}
