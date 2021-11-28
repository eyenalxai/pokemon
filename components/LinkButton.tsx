import { Button, Link } from "@mui/material";
import React from "react";

interface LinkButtonProps {
    href: string
    text: string
}

export function LinkButton({ href, text }: LinkButtonProps) {
    return (
        <Button
            component={ Link }
            href={ `/${ href }` }
            variant="outlined"
            sx={ {
                textTransform: 'none'
            } }
        >
            { text }
        </Button>
    )
}