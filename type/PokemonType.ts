import { DamageRelations } from "./DamageRelations"
import { PokemonTypeName } from "./PokemonTypeName"

export interface PokemonType {
    id: number
    name: PokemonTypeName
    damage_relations: DamageRelations
}
