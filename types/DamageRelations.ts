import { PokemonTypeName } from "../util/AllTypes";

export interface DamageRelations {
    no_damage_to: { name: PokemonTypeName }[]
    half_damage_to: { name: PokemonTypeName }[]
    double_damage_to: { name: PokemonTypeName }[]
    no_damage_from: { name: PokemonTypeName }[]
    half_damage_from: { name: PokemonTypeName }[]
    double_damage_from: { name: PokemonTypeName }[]
}