import { capitalize, Chip, useMediaQuery } from "@mui/material";
import { PokemonTypeName } from "../../util/PokemonTypeNames";
import { pokemonTypeColors } from "../../util/PokemonTypeColors";
import { normalizeColor } from "../../util/NormalizeColor";

interface TypeChipProps {
    pokemonTypeName: PokemonTypeName
    notSelected?: boolean
}

export function TypeChip({ pokemonTypeName, notSelected }: TypeChipProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const backgroundColor = {
        value: prefersDarkMode ? 0.5 : 1,
        saturation: prefersDarkMode ? 0.5 : 0.7,
        opacity: prefersDarkMode ? 77 : 50
    }

    const color = {
        value: prefersDarkMode ? 0.95 : 0.5,
        saturation: prefersDarkMode ? 0.5 : 0.5,
        opacity: prefersDarkMode ? 250 : 200
    }

    const borderColor = {
        value: prefersDarkMode ? 0.5 : 0.5,
        saturation: prefersDarkMode ? 0.5 : 0.5,
        opacity: prefersDarkMode ? 100 : 100
    }

    return (
        <Chip
            label={ capitalize(pokemonTypeName) }
            sx={
                {
                    backgroundColor: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], backgroundColor.value, backgroundColor.saturation / (notSelected ? 3 : 1), backgroundColor.opacity) }`,
                    width: "6em",
                    height: "2.7em",
                    fontSize: "1rem",
                    color: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], color.value, color.saturation/ (notSelected ? 3 : 1), color.opacity) }`,
                    borderRadius: "0.6em",
                    border: 1,
                    borderColor: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], borderColor.value, borderColor.saturation/ (notSelected ? 3 : 1), borderColor.opacity) }`
                }
            }
        />
    )
}