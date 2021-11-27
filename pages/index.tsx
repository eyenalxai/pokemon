import { PokemonOption } from "../types/PokemonOption";
import { PokemonType } from "../types/PokemonType";
import { allPokemonNames } from "../util/AllPokemonNames";
import { SWRResponse } from "swr";
import { usePokemonTypes } from "../util/UsePokemonTypes";
import { useState } from "react";
import { Autocomplete, Box, CircularProgress, Container, TextField } from "@mui/material";
import { SelectedPokemonTypes } from "../components/SelectedPokemonTypes";
import { TypeStack } from "../components/TypeStack";
import { TypeColumns } from "../components/TypeColumns";

function Home() {
    const [pokemonOption, setPokemonOption] = useState<PokemonOption>(allPokemonNames[Math.floor(Math.random() * allPokemonNames.length)]);

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = usePokemonTypes(pokemonOption)

    return (
        <Container maxWidth="sm">
            <Autocomplete
                disablePortal
                disableClearable
                id="combo-box-demo"
                onChange={ (event, values) => setPokemonOption(values) }
                options={ allPokemonNames }
                sx={ { width: "20em", marginTop: "3em", marginBottom: "0.5em" } }
                renderInput={ (params) => <TextField { ...params } key={ params.id } label="Pokémon"/> }
            />
            { pokemonTypes
                ? <>
                    <SelectedPokemonTypes pokemonTypes={ pokemonTypes }/>
                    <TypeColumns pokemonTypes={pokemonTypes}/>
                </>
                : <Box sx={ {
                    width: "20em",
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: "1em"
                } }>
                    <CircularProgress/>
                </Box>


            }
        </Container>
    )
}

export default Home
