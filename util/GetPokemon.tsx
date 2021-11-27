import { PokemonOption } from "../types/PokemonOption";
import useSWR, { SWRResponse } from "swr";
import { Pokemon } from "../types/Pokemon";
import { pokemonApiUrl } from "../config/URL";
import { fetcher } from "./Fetcher";

export function getPokemon(pokemonName: PokemonOption): SWRResponse<Pokemon, Error> {
    return useSWR(
        `${ pokemonApiUrl }/${ pokemonName.value }`, fetcher
    )
}