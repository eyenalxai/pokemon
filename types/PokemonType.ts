import { DamageRelations } from "./DamageRelations";
import { PokemonTypeName } from "../util/AllTypes";

export interface PokemonType {
    id: number
    name: PokemonTypeName
    damage_relations: DamageRelations
}