import { Box } from "@mui/material"
import React from "react"
import { pokemonTypeNames } from "../util/PokemonTypeNames"
import { TypeButton } from "./type/TypeButton"
import { TypeSplit } from "./type/TypeSplit"
import useSWR, { SWRResponse } from "swr"
import { pokemonTypeApiUrl } from "../config/URL"
import { multiFetcher } from "../util/MultiFetcher"
import { PokemonType } from "../type/PokemonType"
import { Loading } from "./Loading"
import { PokemonTypeName } from "../type/PokemonTypeName"
import { isTypeClickable } from "../util/IsTypeClickable"
import _ from "lodash"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { pokemonTypesState } from "../recoil/atoms"

export function Type() {
    const types = useRecoilValue(pokemonTypesState)
    const setTypes = useSetRecoilState(pokemonTypesState)

    function handleSelect(type: PokemonTypeName) {
        if (isTypeClickable(type, types)) {
            setTypes(_.xor(types, [type]))
        }
    }

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = useSWR(
        types.map((pokemonType) => `${pokemonTypeApiUrl}/${pokemonType}`),
        multiFetcher
    )

    return (
        <>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1em",
                    marginTop: "2em"
                }}
            >
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
            </Box>
            {pokemonTypes ? <TypeSplit pokemonTypes={pokemonTypes} /> : types.length > 0 ? <Loading /> : null}
        </>
    )
}
