import { useRecoilValue, useSetRecoilState } from "recoil"
import { pokemonAttackTypeState } from "../recoil/atoms"
import useSWR, { SWRResponse } from "swr"
import { PokemonType } from "../type/PokemonType"
import { pokemonTypeApiUrl } from "../config/URL"
import { multiFetcher } from "../util/MultiFetcher"
import { PokemonTypeName } from "../type/PokemonTypeName"
import { isTypeClickable } from "../util/IsTypeClickable"
import _ from "lodash"
import { Box } from "@mui/material"
import { pokemonTypeNames } from "../util/PokemonTypeNames"
import { TypeButton } from "./button/TypeButton"
import { Loading } from "./Loading"
import React from "react"
import { AttackSplit } from "./split/AttackSplit"
import { ButtonGridWrapper } from "./button/ButtonGridWrapper"

export function Attack() {
    const attacks = useRecoilValue(pokemonAttackTypeState)
    const setAttacks = useSetRecoilState(pokemonAttackTypeState)

    function handleSelect(attack: PokemonTypeName) {
        if (isTypeClickable(attack, attacks)) {
            setAttacks(_.xor(attacks, [attack]))
        }
    }

    const { data: pokemonTypes }: SWRResponse<PokemonType[], Error> = useSWR(
        attacks.map((pokemonType) => `${pokemonTypeApiUrl}/${pokemonType}`),
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
                                disabled={!isTypeClickable(type, attacks)}
                                selected={attacks.includes(type)}
                                onClick={() => handleSelect(type)}
                            />
                        </Box>
                    )
                })}
            </ButtonGridWrapper>
            {pokemonTypes ? <AttackSplit pokemonTypes={pokemonTypes} /> : attacks.length > 0 ? <Loading /> : null}
        </>
    )
}
