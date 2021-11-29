import React from "react"
import { PokemonOption } from "../type/PokemonOption"
import { pokemonNames } from "../util/PokemonNames"
import { SWRResponse } from "swr"
import { PokemonType } from "../type/PokemonType"
import { usePokemonTypes } from "../util/UsePokemonTypes"
import { TextField } from "@mui/material"
import { SelectAutocomplete } from "./SelectAutocomplete"
import { SelectedPokemonTypes } from "./type/SelectedPokemonTypes"
import { TypeSplit } from "./type/TypeSplit"
import { Loading } from "./Loading"

interface CheckPokemonProps {
    pokemonOption: PokemonOption
    setPokemonOption: (PokemonOption: PokemonOption) => void
}

export function CheckPokemon({ pokemonOption, setPokemonOption }: CheckPokemonProps) {
    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = usePokemonTypes(pokemonOption)

    return (
        <>
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
        </>
    )
}
