import { Pokemon } from "../type/Pokemon"
import useSWR, { SWRResponse } from "swr"
import { PokemonType } from "../type/PokemonType"
import { pokemonApiUrl, pokemonTypeApiUrl } from "../config/URL"
import { multiFetcher } from "./MultiFetcher"
import { PokemonOption } from "../type/PokemonOption"
import { fetcher } from "./Fetcher"

export function usePokemonTypes(pokemonOption: PokemonOption): SWRResponse<PokemonType[], Error> {
    const { data: pokemon }: SWRResponse<Pokemon, Error> = useSWR(`${pokemonApiUrl}/${pokemonOption.value}`, fetcher)

    return useSWR(
        pokemon !== undefined
            ? pokemon.types.map((pokemonType) => `${pokemonTypeApiUrl}/${pokemonType.type.name}`)
            : null,
        multiFetcher
    )
}
