import { Center, Container, FormLabel, Spinner } from "@chakra-ui/react";
import { PokemonOption } from "../types/PokemonOption";
import { SelectedPokemonTypes } from "../components/SelectedPokemonTypes";
import { PokemonType } from "../types/PokemonType";
import { allPokemonNames } from "../util/AllPokemonNames";
import { SWRResponse } from "swr";
import { usePokemonTypes } from "../util/UsePokemonTypes";
import { TypeColumns } from "../components/TypeColumns";
import { useState } from "react";
import { Select } from "chakra-react-select";

function Home() {
    const [pokemonOption, setPokemonOption] = useState<PokemonOption>(allPokemonNames[Math.floor(Math.random() * allPokemonNames.length)]);

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = usePokemonTypes(pokemonOption)

    return (
        <Container mt={ 12 } maxWidth={ "xs" }>
            <FormLabel fontSize={"xs"} ml={1} mb={0} textColor={"gray.500"}>Select Pokémon</FormLabel>
            <Select options={ allPokemonNames }
                    onChange={ (x: PokemonOption) => setPokemonOption(x as PokemonOption) }
                    defaultValue={ pokemonOption }
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
