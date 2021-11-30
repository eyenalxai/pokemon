import { Breakpoint, Container } from "@mui/material"
import React from "react"

interface MainContainerProps {
    children: React.ReactNode
    maxWidth?: Breakpoint
}

export function MainContainer({ children, maxWidth }: MainContainerProps) {
    return (
        <Container
            maxWidth={maxWidth || "xs"}
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
