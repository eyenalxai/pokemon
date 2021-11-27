import { capitalize, Chip, useMediaQuery } from "@mui/material";
import { pokemonTypeColors } from "../util/Theme";
import { PokemonTypeName } from "../util/AllTypes";

export function PokemonTypeTag({ pokemonTypeName }: { pokemonTypeName: PokemonTypeName }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <Chip
            label={ capitalize(pokemonTypeName) }
            sx={
                {
                    backgroundColor: `${ pokemonTypeColors[pokemonTypeName][prefersDarkMode ? 700 : 300] }${ prefersDarkMode ? 50 : 87 }`,
                    width: "6em",
                    height: "2.7em",
                    fontSize: "1rem",
                    color: `${ pokemonTypeColors[pokemonTypeName][prefersDarkMode ? 400 : 700] }`,
                    borderRadius: "0.6em",
                    border: 1,
                    borderColor: `${ pokemonTypeColors[pokemonTypeName][prefersDarkMode ? 700 : 500] }88`
                }
            }
        />
    )
}