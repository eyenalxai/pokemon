import { Tag, VStack } from "@chakra-ui/react";
import { PokemonTag } from "./PokemonTag";

export function TypeStack({ types, text }: { types: { name: string, multiplier: number }[], text: string }) {
    if (types.length === 0) return null

    return (
        <VStack>
            <p>{ text }</p>
            { types
                .sort((a, b) => a.multiplier < b.multiplier ? -1 : (a.multiplier > b.multiplier ? 1 : 0))
                .map((typeName, idx) => {
                    return <PokemonTag key={idx} typeName={typeName.name} />
                }) }
        </VStack>
    )
}