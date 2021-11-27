import { DamageRelations } from "./DamageRelations";

export interface PokemonType {
    id: number
    name: string
    damage_relations: DamageRelations
}