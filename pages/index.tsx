import { PokemonOption } from "../types/PokemonOption";
import { PokemonType } from "../types/PokemonType";
import { allPokemonNames } from "../util/AllPokemonNames";
import { SWRResponse } from "swr";
import { usePokemonTypes } from "../util/UsePokemonTypes";
import { useState } from "react";
import { Autocomplete, Box, CircularProgress, Container, TextField } from "@mui/material";
import { SelectedPokemonTypes } from "../components/SelectedPokemonTypes";
import { TypeColumns } from "../components/TypeColumns";

function Home() {
    const [pokemonOption, setPokemonOption] = useState<PokemonOption>(allPokemonNames[Math.floor(Math.random() * allPokemonNames.length)]);

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = usePokemonTypes(pokemonOption)

    return (
        <Container maxWidth={"xs"} sx={{
            display: "grid",
            justifyContent: "center"
        }}>
            <Autocomplete
                disablePortal
                disableClearable
                id="combo-box-demo"
                defaultValue={ pokemonOption }
                onChange={ (event, values) => setPokemonOption(values) }
                options={ allPokemonNames }
                renderInput={ (params) => <TextField { ...params } key={ params.id } label="Pokémon"/> }
                sx={{
                    marginTop: "4em",
                    width: "20em"
                }}
            />
            { pokemonTypes
                ? <>
                    <SelectedPokemonTypes pokemonTypes={ pokemonTypes }/>
                    <TypeColumns pokemonTypes={pokemonTypes}/>
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
