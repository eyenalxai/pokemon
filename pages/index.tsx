import { PokemonOption } from "../types/PokemonOption";
import { PokemonType } from "../types/PokemonType";
import { SWRResponse } from "swr";
import { usePokemonTypes } from "../util/UsePokemonTypes";
import React, { useState } from "react";

import { Autocomplete, Box, CircularProgress, Container, styled, TextField, withStyles } from "@mui/material";
import { SelectedPokemonTypes } from "../components/SelectedPokemonTypes";
import { TypeColumns } from "../components/TypeColumns";
import { pokemonNames } from "../util/PokemonNames";
import { AutocompleteStyled } from "../components/AutocompleteStyled";



function Home() {
    const [pokemonOption, setPokemonOption] = useState<PokemonOption>(pokemonNames[Math.floor(Math.random() * pokemonNames.length)]);

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = usePokemonTypes(pokemonOption)

    return (
        <Container maxWidth={ "xs" } sx={ {
            display: "grid",
            justifyContent: "center",
            marginBottom: "4em"
        } }>
            <AutocompleteStyled
                disablePortal
                disableClearable
                id="combo-box-demo"
                defaultValue={ pokemonOption }
                onChange={ (event, values) => setPokemonOption(values as PokemonOption) }
                options={ pokemonNames }
                renderInput={ (params) => <TextField { ...params } key={ params.id } label="Pokémon"/> }
                sx={ {
                    marginTop: "4em",
                    width: "20em"
                } }
            />
            { pokemonTypes
                ? <>
                    <SelectedPokemonTypes pokemonTypes={ pokemonTypes }/>
                    <TypeColumns pokemonTypes={ pokemonTypes }/>
                </>
                : <Box sx={ {
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: "4em"
                } }>
                    <CircularProgress/>
                </Box>
            }
        </Container>
    )
}

export default Home
