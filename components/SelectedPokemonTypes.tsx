import { PokemonType } from "../types/PokemonType";
import { PokemonTypeTag } from "./PokemonTypeTag";

export function SelectedPokemonTypes({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
    return (
        <div style={ {
            display: "flex",
            marginTop: "0.5em",
            gap: "1em"
        } }>
            {
                pokemonTypes
                    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
                    .map((pokemonType: PokemonType, idx) => {
                        return <PokemonTypeTag key={ idx } pokemonTypeName={ pokemonType.name }/>
                    })
            }
        </div>
    )
}