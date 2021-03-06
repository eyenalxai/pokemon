import { atom } from "recoil"
import { pokemonNames } from "../util/PokemonNames"
import { PokemonTypeName } from "../type/PokemonTypeName"

export const pokemonState = atom({
    key: "pokemonState",
    default: pokemonNames[Math.floor(Math.random() * pokemonNames.length)]!
})

export const pokemonTypeState = atom({
    key: "pokemonTypesState",
    default: [] as PokemonTypeName[]
})

export const pokemonAttackTypeState = atom({
    key: "pokemonAttackTypeState",
    default: [] as PokemonTypeName[]
})
