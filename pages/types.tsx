import { MyContainer } from "../components/MyContainer"
import { Box } from "@mui/material"
import React, { useState } from "react"
import { PokemonTypeName, pokemonTypeNames } from "../util/PokemonTypeNames"
import _ from "lodash"
import { TypeButton } from "../components/type/TypeButton"
import { TypeSplit } from "../components/type/TypeSplit"
import useSWR, { SWRResponse } from "swr"
import { pokemonTypeApiUrl } from "../config/URL"
import { multiFetcher } from "../util/MultiFetcher"
import { PokemonType } from "../types/PokemonType"
import { Loading } from "../components/type/Loading"
import { BackButton } from "../components/type/BackButton"

export default function Types() {
    const [types, setTypes] = useState<PokemonTypeName[]>([])

    function handleSelect(type: PokemonTypeName) {
        if (isClickable(type)) {
            setTypes(_.xor(types, [type]))
        }
    }

    function isClickable(type: PokemonTypeName) {
        return types.includes(type) || types.length < 2
    }

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = useSWR(
        types.map((pokemonType) => `${pokemonTypeApiUrl}/${pokemonType}`),

        multiFetcher
    )

    return (
        <MyContainer>
            <BackButton />
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
                                disabled={!isClickable(type)}
                                selected={types.includes(type)}
                                onClick={() => handleSelect(type)}
                            />
                        </Box>
                    )
                })}
            </Box>
            {pokemonTypes ? <TypeSplit pokemonTypes={pokemonTypes} /> : types.length > 0 ? <Loading /> : null}
        </MyContainer>
    )
}
