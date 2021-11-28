import { Button, capitalize, useMediaQuery } from "@mui/material";
import { PokemonTypeName } from "../../util/PokemonTypeNames";
import { pokemonTypeColors } from "../../util/PokemonTypeColors";
import { normalizeColor } from "../../util/NormalizeColor";


interface TypeChipProps {
    pokemonTypeName: PokemonTypeName
    disabled: boolean,
    selected: boolean
    onClick: () => void
}

export function TypeButton({ pokemonTypeName, disabled, selected, onClick }: TypeChipProps) {

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
        <Button
            onClick={onClick}
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