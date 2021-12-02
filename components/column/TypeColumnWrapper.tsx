import { Box } from "@mui/material"
import React from "react"

export function TypeColumnWrapper({ gapRem, children }: { gapRem?: number; children: React.ReactNode }) {
    return (
        <Box
            sx={{
                display: "flex",
                marginTop: "1em",
                flexDirection: "row",
                alignContent: "flex-start",
                gap: `${gapRem || 1}rem`
            }}
        >
            {children}
        </Box>
    )
}
