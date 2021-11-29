import { PokemonTypeName } from "../type/PokemonTypeName"

export function isTypeClickable(type: PokemonTypeName, types: PokemonTypeName[]) {
    return types.includes(type) || types.length < 2
}
