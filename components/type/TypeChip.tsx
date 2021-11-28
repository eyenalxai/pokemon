import { capitalize, Chip, useMediaQuery } from "@mui/material";
import { PokemonTypeName } from "../../util/PokemonTypeNames";
import { pokemonTypeColors } from "../../util/PokemonTypeColors";
import { normalizeColor } from "../../util/NormalizeColor";
import { useColors } from "../../util/UseColors";

interface TypeChipProps {
    pokemonTypeName: PokemonTypeName
}

export function TypeChip({ pokemonTypeName }: TypeChipProps) {
    const { backgroundColor, color, borderColor } = useColors(useMediaQuery('(prefers-color-scheme: dark)'))

    return (
        <Chip
            label={ capitalize(pokemonTypeName) }
            sx={
                {
                    backgroundColor: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], backgroundColor.value, backgroundColor.saturation, backgroundColor.opacity) }`,
                    width: "6em",
                    height: "2.7em",
                    fontSize: "1rem",
                    color: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], color.value, color.saturation, color.opacity) }`,
                    borderRadius: "0.6em",
                    border: 1,
                    borderColor: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], borderColor.value, borderColor.saturation, borderColor.opacity) }`
                }
            }
        />
    )
}