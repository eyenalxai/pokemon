import { PokemonType } from "../../type/PokemonType"
import { Divider } from "@mui/material"
import { PokemonTypeName } from "../../type/PokemonTypeName"
import _ from "lodash"
import { AttackColumn } from "../column/AttackColumn"
import { pokemonTypeNames } from "../../util/PokemonTypeNames"
import { TypeColumnWrapper } from "../column/TypeColumnWrapper"

export function AttackSplit({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
    let increased_damage_to: PokemonTypeName[] = []

    pokemonTypes.map((pokemonType: PokemonType) => {
        pokemonType.damage_relations.double_damage_to.map((type) => {
            if (!increased_damage_to.includes(type.name)) increased_damage_to.push(type.name)
        })
    })

    let others: PokemonTypeName[] = _.xor(increased_damage_to, pokemonTypeNames)

    const othersLonger = others.length > increased_damage_to.length
    console.log(othersLonger)

    return (
        <TypeColumnWrapper gapRem={0.7}>
            <AttackColumn types={increased_damage_to} text={"Strong"} longest={!othersLonger} />
            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    marginY: "4rem"
                }}
            />
            <AttackColumn types={others} longest={othersLonger} />
        </TypeColumnWrapper>
    )
}
