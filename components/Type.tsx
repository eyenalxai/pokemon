import { Box } from "@mui/material"
import React from "react"
import { pokemonTypeNames } from "../util/PokemonTypeNames"
import { TypeButton } from "./button/TypeButton"
import { TypeSplit } from "./split/TypeSplit"
import useSWR, { SWRResponse } from "swr"
import { pokemonTypeApiUrl } from "../config/URL"
import { multiFetcher } from "../util/MultiFetcher"
import { PokemonType } from "../type/PokemonType"
import { Loading } from "./Loading"
import { PokemonTypeName } from "../type/PokemonTypeName"
import { isTypeClickable } from "../util/IsTypeClickable"
import _ from "lodash"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { pokemonTypeState } from "../recoil/atoms"
import { ButtonGridWrapper } from "./button/ButtonGridWrapper"

export function Type() {
    const types = useRecoilValue(pokemonTypeState)
    const setTypes = useSetRecoilState(pokemonTypeState)

    function handleSelect(type: PokemonTypeName) {
        if (isTypeClickable(type, types, 2)) {
            setTypes(_.xor(types, [type]))
        }
    }

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = useSWR(
        types.map((pokemonType) => `${pokemonTypeApiUrl}/${pokemonType}`),
        multiFetcher
    )

    return (
        <>
            <ButtonGridWrapper>
                {pokemonTypeNames.sort().map((type, idx) => {
                    return (
                        <Box key={idx}>
                            <TypeButton
                                key={idx}
                                pokemonTypeName={type}
                                disabled={!isTypeClickable(type, types)}
                                selected={types.includes(type)}
                                onClick={() => handleSelect(type)}
                            />
                        </Box>
                    )
                })}
            </ButtonGridWrapper>
            {pokemonTypes ? <TypeSplit pokemonTypes={pokemonTypes} /> : types.length > 0 ? <Loading /> : null}
        </>
    )
}
