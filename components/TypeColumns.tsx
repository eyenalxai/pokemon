import { PokemonType } from "../types/PokemonType";
import { allTypes, PokemonTypeName } from "../util/AllTypes";
import { TypeStack } from "./TypeStack";
import { Box } from "@mui/material";

export function TypeColumns({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
    let damage_multipliers: { name: PokemonTypeName, multiplier: number }[] = allTypes.map(typeName => {
        return { name: typeName, multiplier: 1 }
    })

    let double_damage_from: PokemonTypeName[] = []
    let half_damage_from: PokemonTypeName[] = []
    let no_damage_from: PokemonTypeName[] = []

    pokemonTypes
        .map((pokemonType: PokemonType) => {
                pokemonType.damage_relations.double_damage_from.map((type) =>
                    double_damage_from.push(type.name))
                pokemonType.damage_relations.half_damage_from.map((type) =>
                    half_damage_from.push(type.name))
                pokemonType.damage_relations.no_damage_from.map((type) =>
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
        <Box sx={ {
            display: 'flex',
            marginTop: "2em",
            flexDirection: "row",
            alignContent: "flex-start",
            gap: "1em"
        } }>
            <TypeStack
                types={ damage_multipliers.filter(type => type.multiplier >= 2) }
                text={ "Weak" }/>
            <TypeStack
                types={ damage_multipliers.filter(type => type.multiplier <= 0.5 && type.multiplier !== 0) }
                text={ "Resistant" }/>
            <TypeStack
                types={ damage_multipliers.filter(type => type.multiplier === 0) }
                text={ "Immune" }/>
        </Box>
    )
}