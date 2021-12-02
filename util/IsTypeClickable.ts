import { PokemonTypeName } from "../type/PokemonTypeName"

export function isTypeClickable(type: PokemonTypeName, types: PokemonTypeName[], maxSelected?: number) {
    return types.includes(type) || maxSelected === undefined ? true : types.length < maxSelected
}
