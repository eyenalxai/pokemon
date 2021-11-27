import { PokemonTypeTag } from "./PokemonTypeTag";
import { PokemonTypeName } from "../util/AllTypes";
import { Box, TextField } from "@mui/material";

export function TypeStack({ types, text }: { types: { name: PokemonTypeName, multiplier: number }[], text: string }) {
    if (types.length === 0) return null

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column"
        }}>
            <Box sx={{
                textAlign: 'center',
                marginTop: "2em"
            }}>{ text }</Box>
            { types
                .sort((a, b) => a.multiplier < b.multiplier ? -1 : (a.multiplier > b.multiplier ? 1 : 0))
                .map((typeName: { name: PokemonTypeName; multiplier: number }, idx) => {
                    return <PokemonTypeTag key={idx} pokemonTypeName={typeName.name} />
                }) }
        </Box>
    )
}