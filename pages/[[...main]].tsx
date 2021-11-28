import React from "react"
import { Box, Tab } from "@mui/material"
import { MainContainer } from "../components/MainContainer"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { CheckPokemon } from "../components/CheckPokemon"
import { CheckTypes } from "../components/CheckTypes"

interface HomeProps {
    query: HomeQuery
}

type HomeQuery = "pokemon" | "types"

export default function Home({ query }: HomeProps) {
    const [value, setValue] = React.useState<HomeQuery>(query)

    return (
        <MainContainer>
            <TabContext value={value}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TabList onChange={(_, value: HomeQuery) => setValue(value)} aria-label="lab API tabs example">
                        <Tab
                            label="Pokémon"
                            value="pokemon"
                            sx={{
                                textTransform: "none"
                            }}
                        />
                        <Tab
                            label="Types"
                            value="types"
                            sx={{
                                textTransform: "none"
                            }}
                        />
                    </TabList>
                </Box>
                <TabPanel value="pokemon">
                    <CheckPokemon />
                </TabPanel>
                <TabPanel value="types">
                    <CheckTypes />
                </TabPanel>
            </TabContext>
        </MainContainer>
    )
}

export const getServerSideProps = async (context: { query: { main: string[] } }) => {
    if (context.query.main.length != 1) return { props: { query: "pokemon" } }
    if (context.query.main[0] != "pokemon" && context.query.main[0] != "types") return { props: { query: "pokemon" } }
    return { props: { query: context.query.main[0] as HomeQuery } }
}
