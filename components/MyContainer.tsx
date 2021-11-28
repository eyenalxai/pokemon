import { Container } from "@mui/material"
import React from "react"

export function MyContainer({ children }: { children: React.ReactNode }) {
    return (
        <Container
            maxWidth={"xs"}
            sx={{
                display: "grid",
                justifyContent: "center",
                marginBottom: "4em"
            }}
        >
            {children}
        </Container>
    )
}
