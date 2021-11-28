import { Button, capitalize, useMediaQuery } from "@mui/material"
import { PokemonTypeName } from "../../util/PokemonTypeNames"
import { pokemonTypeColors } from "../../util/PokemonTypeColors"
import { normalizeColor } from "../../util/NormalizeColor"
import { useColors } from "../../util/UseColors"
import { defaultTypeStyle } from "../../util/DefaultTypeStyle"

interface TypeChipProps {
    pokemonTypeName: PokemonTypeName
    disabled: boolean
    selected: boolean
    onClick: () => void
}

export function TypeButton({ pokemonTypeName, disabled, selected, onClick }: TypeChipProps) {
    const { backgroundColor, color, borderColor } = useColors(useMediaQuery("(prefers-color-scheme: dark)"))

    return (
        <Button
            onClick={onClick}
            sx={{
                ...defaultTypeStyle,
                cursor: disabled ? "default" : "pointer",
                backgroundColor: `${normalizeColor(
                    pokemonTypeColors[pokemonTypeName],
                    backgroundColor.value,
                    backgroundColor.saturation / (!selected ? 5 : 1),
                    backgroundColor.opacity
                )}`,
                color: `${normalizeColor(
                    pokemonTypeColors[pokemonTypeName],
                    color.value,
                    color.saturation / (!selected ? 4 : 1),
                    color.opacity
                )}`,
                borderColor: `${normalizeColor(
                    pokemonTypeColors[pokemonTypeName],
                    borderColor.value,
                    borderColor.saturation / (!selected ? 5 : 1),
                    borderColor.opacity
                )}`,
                ":hover": {
                    backgroundColor: `${normalizeColor(
                        pokemonTypeColors[pokemonTypeName],
                        backgroundColor.value,
                        backgroundColor.saturation / (disabled ? 5 : 1),
                        backgroundColor.opacity
                    )}` // theme.palette.primary.main
                }
            }}
        >
            {capitalize(pokemonTypeName)}
        </Button>
    )
}
