import { PokemonType } from "../types/PokemonType";
import { HStack, Tag } from "@chakra-ui/react";
import { PokemonTag } from "./PokemonTag";

export function SelectedPokemonTypes({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
    return (
        <HStack mt={2}>
            {pokemonTypes
                .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
                .map((pokemonType, idx) => {
                    return <PokemonTag key={idx} typeName={pokemonType.name} />
                })}
        </HStack>
    )
}