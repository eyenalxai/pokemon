import { Center, Container, Spinner } from "@chakra-ui/react";
import { PokemonOption } from "../types/PokemonOption";
import { SelectedPokemonTypes } from "../components/SelectedPokemonTypes";
import { PokemonType } from "../types/PokemonType";
import { allPokemonNames } from "../util/AllPokemonNames";
import { SWRResponse } from "swr";
import { getPokemon } from "../util/GetPokemon";
import { getPokemonTypes } from "../util/GetPokemonTypes";
import { Pokemon } from "../types/Pokemon";
import { TypeColumns } from "../components/TypeColumns";
import { useState } from "react";
import { Select } from "chakra-react-select";

function Home() {
  const [pokemonOption, setPokemonOption] = useState<PokemonOption>(allPokemonNames[Math.floor(Math.random() * allPokemonNames.length)]);

  const { data: pokemon }: SWRResponse<Pokemon, Error> = getPokemon(pokemonOption)
  const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = getPokemonTypes(pokemon)


  return (
      <Container mt={ 12 } maxWidth={ "xs" }>
        <Select options={ allPokemonNames }
                onChange={ (x: PokemonOption) => setPokemonOption(x as PokemonOption) }
                defaultValue={pokemonOption}
        />
        { pokemonTypes
            ? <>
              <SelectedPokemonTypes pokemonTypes={ pokemonTypes }/>
              <TypeColumns pokemonTypes={ pokemonTypes }/>
            </>
            : <Center mt={12}>
              <Spinner/>
            </Center>
        }
      </Container>
  )
}

export default Home
