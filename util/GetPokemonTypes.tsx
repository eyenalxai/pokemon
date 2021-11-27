import { Pokemon } from "../types/Pokemon";
import useSWR, { SWRResponse } from "swr";
import { PokemonType } from "../types/PokemonType";
import { pokemonTypeApiUrl } from "../config/URL";
import { multiFetcher } from "./MultiFetcher";

export function getPokemonTypes(pokemonInfo?: Pokemon): SWRResponse<PokemonType[], Error> {
    return useSWR(pokemonInfo !== undefined
            ? pokemonInfo.types.map(pokemonType => `${ pokemonTypeApiUrl }/${ pokemonType.type.name }`)
            : null,
        multiFetcher
    )
}