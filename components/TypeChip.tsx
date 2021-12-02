import { capitalize, Chip, useMediaQuery } from "@mui/material"
import { pokemonTypeColors } from "../util/PokemonTypeColors"
import { normalizeColor } from "../util/NormalizeColor"
import { getColors } from "../util/GetColors"
import { defaultTypeStyle } from "../util/DefaultTypeStyle"
import { PokemonTypeName } from "../type/PokemonTypeName"

interface TypeChipProps {
    pokemonTypeName: PokemonTypeName
}

export function TypeChip({ pokemonTypeName }: TypeChipProps) {
    const { backgroundColor, color, borderColor } = getColors(useMediaQuery("(prefers-color-scheme: dark)"))

    return (
        <Chip
            label={capitalize(pokemonTypeName)}
            sx={{
                ...defaultTypeStyle,
                backgroundColor: `${normalizeColor(
                    pokemonTypeColors[pokemonTypeName],
                    backgroundColor.value,
                    backgroundColor.saturation,
                    backgroundColor.opacity
                )}`,
                color: `${normalizeColor(
                    pokemonTypeColors[pokemonTypeName],
                    color.value,
                    color.saturation,
                    color.opacity
                )}`,
                borderColor: `${normalizeColor(
                    pokemonTypeColors[pokemonTypeName],
                    borderColor.value,
                    borderColor.saturation,
                    borderColor.opacity
                )}`
            }}
        />
    )
}
