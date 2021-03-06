import { PokemonType } from "../../type/PokemonType"
import { pokemonTypeNames } from "../../util/PokemonTypeNames"
import { TypeColumn } from "../column/TypeColumn"
import { PokemonTypeName } from "../../type/PokemonTypeName"
import { TypeColumnWrapper } from "../column/TypeColumnWrapper"

export function TypeSplit({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
    let damage_multipliers: { name: PokemonTypeName; multiplier: number }[] = pokemonTypeNames.map((typeName) => {
        return { name: typeName, multiplier: 1 }
    })

    let double_damage_from: PokemonTypeName[] = []
    let half_damage_from: PokemonTypeName[] = []
    let no_damage_from: PokemonTypeName[] = []

    pokemonTypes.map((pokemonType: PokemonType) => {
        pokemonType.damage_relations.double_damage_from.map((type) => double_damage_from.push(type.name))
        pokemonType.damage_relations.half_damage_from.map((type) => half_damage_from.push(type.name))
        pokemonType.damage_relations.no_damage_from.map((type) => no_damage_from.push(type.name))
    })

    damage_multipliers.map((type) => {
        if (double_damage_from.includes(type.name)) type.multiplier *= 2
        if (half_damage_from.includes(type.name)) type.multiplier *= 0.5
        if (no_damage_from.includes(type.name)) type.multiplier *= 0
    })

    return (
        <TypeColumnWrapper>
            <TypeColumn types={damage_multipliers.filter((type) => type.multiplier >= 2)} text={"Weak"} />
            <TypeColumn
                types={damage_multipliers.filter((type) => type.multiplier <= 0.5 && type.multiplier !== 0)}
                text={"Resistant"}
            />
            <TypeColumn types={damage_multipliers.filter((type) => type.multiplier === 0)} text={"Immune"} />
        </TypeColumnWrapper>
    )
}
