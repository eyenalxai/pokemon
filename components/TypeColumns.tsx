import { PokemonType } from "../types/PokemonType";
import { allTypes } from "../util/AllTypes";
import { TypeStack } from "./TypeStack";
import { Flex, HStack } from "@chakra-ui/react";

export function TypeColumns({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
    let damage_multipliers: { name: string, multiplier: number }[] = allTypes.map(typeName => {
        return { name: typeName, multiplier: 1 }
    })

    let double_damage_from: string[] = []
    let half_damage_from: string[] = []
    let no_damage_from: string[] = []

    pokemonTypes
        .map((pokemonType: PokemonType) => {
                pokemonType.damage_relations.double_damage_from.map((type: { name: string }) =>
                    double_damage_from.push(type.name))
                pokemonType.damage_relations.half_damage_from.map((type: { name: string }) =>
                    half_damage_from.push(type.name))
                pokemonType.damage_relations.no_damage_from.map((type: { name: string }) =>
                    no_damage_from.push(type.name))
            }
        )

    damage_multipliers.map(type => {
            if (double_damage_from.includes(type.name)) type.multiplier *= 2
            if (half_damage_from.includes(type.name)) type.multiplier *= 0.5
            if (no_damage_from.includes(type.name)) type.multiplier *= 0
        }
    )

    return (
        <Flex gridGap={6} mt={4}>
            <TypeStack
                types={ damage_multipliers.filter(type => type.multiplier >= 2) }
                text={ "Weak" }/>
            <TypeStack
                types={ damage_multipliers.filter(type => type.multiplier <= 0.5 && type.multiplier !== 0) }
                text={ "Resistant" }/>
            <TypeStack
                types={ damage_multipliers.filter(type => type.multiplier === 0) }
                text={ "Immune" }/>
        </Flex>
    )
}