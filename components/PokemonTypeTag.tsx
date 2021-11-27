import { capitalize, Chip, useMediaQuery } from "@mui/material";
import { PokemonTypeName } from "../util/PokemonTypeNames";
import { pokemonTypeColors } from "../util/PokemonTypeColors";
import { ColorMagic } from "../util/colorMagic";

export function PokemonTypeTag({ pokemonTypeName }: { pokemonTypeName: PokemonTypeName }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const backgroundColor = {
        value: prefersDarkMode ? 1 : 1,
        saturation: prefersDarkMode ? 0.7 : 0.7,
        opacity: prefersDarkMode ? 50 : 50
    }

    const color = {
        value: prefersDarkMode ? 0.95 : 0.5,
        saturation: prefersDarkMode ? 0.5 : 0.5,
        opacity: prefersDarkMode ? 244 : 200
    }

    const borderColor = {
        value: prefersDarkMode ? 0.95 : 0.5,
        saturation: prefersDarkMode ? 0.5 : 0.5,
        opacity: prefersDarkMode ? 100 : 100
    }

    return (
        <Chip
            label={ capitalize(pokemonTypeName) }
            sx={
                {
                    backgroundColor: `${ ColorMagic(pokemonTypeColors[pokemonTypeName], backgroundColor.value, backgroundColor.saturation, backgroundColor.opacity) }`,
                    width: "6em",
                    height: "2.7em",
                    fontSize: "1rem",
                    color: `${ ColorMagic(pokemonTypeColors[pokemonTypeName], color.value, color.saturation, color.opacity) }`,
                    borderRadius: "0.6em",
                    border: 1,
                    borderColor: `${ ColorMagic(pokemonTypeColors[pokemonTypeName], borderColor.value, borderColor.saturation, borderColor.opacity) }`
                }
            }
        />
    )
}