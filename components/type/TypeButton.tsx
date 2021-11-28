import { Button, capitalize, useMediaQuery } from "@mui/material";
import { PokemonTypeName } from "../../util/PokemonTypeNames";
import { pokemonTypeColors } from "../../util/PokemonTypeColors";
import { normalizeColor } from "../../util/NormalizeColor";
import { useColors } from "../../util/UseColors";


interface TypeChipProps {
    pokemonTypeName: PokemonTypeName
    disabled: boolean,
    selected: boolean
    onClick: () => void
}

export function TypeButton({ pokemonTypeName, disabled, selected, onClick }: TypeChipProps) {

    const { backgroundColor, color, borderColor } = useColors(useMediaQuery('(prefers-color-scheme: dark)'))

    return (
        <Button
            onClick={ onClick }
            disabled={disabled}
            sx={ {
                backgroundColor: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], backgroundColor.value, backgroundColor.saturation / (!selected ? 5 : 1), backgroundColor.opacity) }`,
                width: "6em",
                height: "2.7em",
                fontSize: "1rem",
                color: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], color.value, color.saturation / (!selected ? 4 : 1), color.opacity) }`,
                borderRadius: "0.6em",
                border: 1,
                textTransform: "none",
                borderColor: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], borderColor.value, borderColor.saturation / (!selected ? 5 : 1), borderColor.opacity) }`,
                ':hover': {
                    bgcolor: `${ normalizeColor(pokemonTypeColors[pokemonTypeName], backgroundColor.value, backgroundColor.saturation, backgroundColor.opacity) }`, // theme.palette.primary.main
                },
            } }
        >{ capitalize(pokemonTypeName) }</Button>
    )
}