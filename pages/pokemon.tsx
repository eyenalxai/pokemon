import React, { useState } from "react"
import { PokemonOption } from "../types/PokemonOption"
import { pokemonNames } from "../util/PokemonNames"
import { SWRResponse } from "swr"
import { PokemonType } from "../types/PokemonType"
import { usePokemonTypes } from "../util/UsePokemonTypes"
import { Box, CircularProgress, TextField } from "@mui/material"
import { SelectAutocomplete } from "../components/SelectAutocomplete"
import { SelectedPokemonTypes } from "../components/type/SelectedPokemonTypes"
import { TypeSplit } from "../components/type/TypeSplit"
import { BackButton } from "../components/type/BackButton"
import { MyContainer } from "../components/MyContainer"

export default function CheckPokemon() {
    const [pokemonOption, setPokemonOption] = useState<PokemonOption>(
        pokemonNames[Math.floor(Math.random() * pokemonNames.length)]!
    )

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = usePokemonTypes(pokemonOption)

    return (
        <MyContainer>
            <BackButton />
            <SelectAutocomplete
                disablePortal
                disableClearable
                blurOnSelect={"touch"}
                id="combo-box-demo"
                defaultValue={pokemonOption}
                onChange={(_, values) => setPokemonOption(values as PokemonOption)}
                options={pokemonNames}
                renderInput={(params) => <TextField {...params} key={params.id} label="Pokémon" />}
                sx={{
                    marginTop: "2em",
                    width: "20em"
                }}
            />
            {pokemonTypes ? (
                <>
                    <SelectedPokemonTypes pokemonTypes={pokemonTypes} />
                    <TypeSplit pokemonTypes={pokemonTypes} />
                </>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "4em"
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
        </MyContainer>
    )
}
