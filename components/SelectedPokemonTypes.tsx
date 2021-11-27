import { capitalize, Chip, useMediaQuery } from "@mui/material";
import { PokemonType } from "../types/PokemonType";
import { pokemonTypeColors } from "../util/Theme";
import { PokemonTypeTag } from "./PokemonTypeTag";

export function SelectedPokemonTypes({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
    return (
        <div style={{
            display: "flex",
            marginTop: "0.5em",
            gap: "0.5em"
        }}>
            {
                pokemonTypes
                    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
                    .map((pokemonType: PokemonType, idx) => {
                        return <PokemonTypeTag key={idx} pokemonTypeName={pokemonType.name}/>
                    })
            }
        </div>
    )
}