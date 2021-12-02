import { TypeChip } from "../TypeChip"
import { Box } from "@mui/material"
import { PokemonTypeName } from "../../type/PokemonTypeName"

export function AttackColumn({ types, text, longest }: { types: PokemonTypeName[]; text?: string; longest: boolean }) {
    if (types.length === 0) return null

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    marginBottom: `${text ? "0.5rem" : "2rem"}`
                }}
            >
                {text}
            </Box>
            <Box
                sx={{
                    display: "grid",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    gridTemplateColumns: `repeat(${longest ? 2 : 1}, 1fr)`,
                    gap: "0.5em"
                }}
            >
                {types.sort().map((typeName, idx) => {
                    return <TypeChip key={idx} pokemonTypeName={typeName} />
                })}
            </Box>
        </Box>
    )
}
