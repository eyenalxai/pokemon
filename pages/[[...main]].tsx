import React, { useState } from "react"
import { Box, Tab } from "@mui/material"
import { MainContainer } from "../components/MainContainer"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Pokemon } from "../components/Pokemon"
import { Type } from "../components/Type"
import { useRouter } from "next/router"
import { Attack } from "../components/Attack"

interface HomeProps {
    query: HomeQuery
}

type HomeQuery = "pokemon" | "type" | "attack"

export default function Home({ query }: HomeProps) {
    const router = useRouter()
    const [value, setValue] = useState<HomeQuery>(query)

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
                            label="Type"
                            value="type"
                            onClick={(e) => move(e, "type")}
                            sx={{
                                textTransform: "none"
                            }}
                        />
                        <Tab
                            label="Attack"
                            value="attack"
                            onClick={(e) => move(e, "attack")}
                            sx={{
                                textTransform: "none"
                            }}
                        />
                    </TabList>
                </Box>
                <TabPanel value="pokemon">
                    <Pokemon />
                </TabPanel>
                <TabPanel value="type">
                    <Type />
                </TabPanel>
                <TabPanel value="attack">
                    <Attack />
                </TabPanel>
            </TabContext>
        </MainContainer>
    )
}

export const getServerSideProps = async (context: { query: { main: HomeQuery } }) => {
    return { props: { query: context.query.main[0] } }
}
