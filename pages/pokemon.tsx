import React, { useState } from "react"
import { PokemonOption } from "../type/PokemonOption"
import { pokemonNames } from "../util/PokemonNames"
import { SWRResponse } from "swr"
import { PokemonType } from "../type/PokemonType"
import { usePokemonTypes } from "../util/UsePokemonTypes"
import { TextField } from "@mui/material"
import { SelectAutocomplete } from "../components/SelectAutocomplete"
import { SelectedPokemonTypes } from "../components/type/SelectedPokemonTypes"
import { TypeSplit } from "../components/type/TypeSplit"
import { Loading } from "../components/Loading"
import { MainContainer } from "../components/MainContainer"
import { BackButton } from "../components/BackButton"

export default function Pokemon() {
    const [pokemonOption, setPokemonOption] = useState<PokemonOption>(
        pokemonNames[Math.floor(Math.random() * pokemonNames.length)]!
    )

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = usePokemonTypes(pokemonOption)

    return (
        <MainContainer>
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
                <Loading />
            )}
        </MainContainer>
    )
}
