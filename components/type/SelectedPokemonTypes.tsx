import { PokemonType } from "../../types/PokemonType";
import { TypeChip } from "./TypeChip";
import { Box } from "@mui/material";

export function SelectedPokemonTypes({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
    return (
        <Box sx={ {
            display: "flex",
            marginTop: "0.5em",
            gap: "1em"
        } }>
            {
                pokemonTypes
                    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
                    .map((pokemonType: PokemonType, idx) => {
                        return <TypeChip key={ idx } pokemonTypeName={ pokemonType.name }/>
                    })
            }
        </Box>
    )
}