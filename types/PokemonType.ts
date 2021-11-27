import { DamageRelations } from "./DamageRelations";
import { PokemonTypeName } from "../util/PokemonTypeNames";

export interface PokemonType {
    id: number
    name: PokemonTypeName
    damage_relations: DamageRelations
}