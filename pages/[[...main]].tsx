import React, { useState } from "react"
import { Box, Tab } from "@mui/material"
import { MainContainer } from "../components/MainContainer"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { CheckPokemon } from "../components/CheckPokemon"
import { CheckTypes } from "../components/CheckTypes"
import { useRouter } from "next/router"
import { PokemonOption } from "../type/PokemonOption"
import { pokemonNames } from "../util/PokemonNames"
import { PokemonTypeName } from "../type/PokemonTypeName"
import _ from "lodash"
import { isTypeClickable } from "../util/IsTypeClickable"

interface HomeProps {
    query: HomeQuery
}

type HomeQuery = "pokemon" | "types"

export default function Home({ query }: HomeProps) {
    const router = useRouter()
    const [value, setValue] = useState<HomeQuery>(query)

    const [pokemonOption, setPokemonOption] = useState<PokemonOption>(
        pokemonNames[Math.floor(Math.random() * pokemonNames.length)]!
    )

    const [types, setTypes] = useState<PokemonTypeName[]>([])

    function handleSelect(type: PokemonTypeName) {
        if (isTypeClickable(type, types)) {
            setTypes(_.xor(types, [type]))
        }
    }

    function move(e: React.MouseEvent<HTMLDivElement, MouseEvent>, href: HomeQuery) {
        e.preventDefault()
        router.replace(href)
    }

    return (
        <MainContainer>
            <TabContext value={value}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TabList onChange={(_, value: HomeQuery) => setValue(value)} aria-label="lab API tabs example">
                        <Tab
                            label="Pokémon"
                            value="pokemon"
                            onClick={(e) => move(e, "pokemon")}
                            sx={{
                                textTransform: "none"
                            }}
                        />
                        <Tab
                            label="Types"
                            value="types"
                            onClick={(e) => move(e, "types")}
                            sx={{
                                textTransform: "none"
                            }}
                        />
                    </TabList>
                </Box>
                <TabPanel value="pokemon">
                    <CheckPokemon pokemonOption={pokemonOption} setPokemonOption={setPokemonOption} />
                </TabPanel>
                <TabPanel value="types">
                    <CheckTypes types={types} handleSelect={handleSelect} />
                </TabPanel>
            </TabContext>
        </MainContainer>
    )
}

export const getServerSideProps = async (context: { query: { main: HomeQuery } }) => {
    return { props: { query: context.query.main[0] } }
}
