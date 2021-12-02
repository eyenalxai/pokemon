import { Box } from "@mui/material"
import React, { useState } from "react"
import { pokemonTypeNames } from "../util/PokemonTypeNames"
import { TypeButton } from "../components/type/TypeButton"
import { TypeSplit } from "../components/type/TypeSplit"
import useSWR, { SWRResponse } from "swr"
import { pokemonTypeApiUrl } from "../config/URL"
import { multiFetcher } from "../util/MultiFetcher"
import { PokemonType } from "../type/PokemonType"
import { Loading } from "../components/Loading"
import { PokemonTypeName } from "../type/PokemonTypeName"
import { isTypeClickable } from "../util/IsTypeClickable"
import _ from "lodash"
import { MainContainer } from "../components/MainContainer"
import { BackButton } from "../components/BackButton"

export default function Type() {
    const [types, setTypes] = useState<PokemonTypeName[]>([])

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
        <MainContainer>
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
                                disabled={!isTypeClickable(type, types)}
                                selected={types.includes(type)}
                                onClick={() => handleSelect(type)}
                            />
                        </Box>
                    )
                })}
            </Box>
            {pokemonTypes ? <TypeSplit pokemonTypes={pokemonTypes} /> : types.length > 0 ? <Loading /> : null}
        </MainContainer>
    )
}