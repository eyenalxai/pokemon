import React from "react"
import { Box, Tab } from "@mui/material"
import { MainContainer } from "../components/MainContainer"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { CheckPokemon } from "../components/CheckPokemon"
import { CheckTypes } from "../components/CheckTypes"
import { useRouter } from "next/router"

interface HomeProps {
    query: HomeQuery
}

type HomeQuery = "pokemon" | "types"

export default function Home({ query }: HomeProps) {
    const router = useRouter()
    const [value, setValue] = React.useState<HomeQuery>(query)

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, href: HomeQuery) {
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
                            onClick={(e) => handleClick(e, "pokemon")}
                            sx={{
                                textTransform: "none"
                            }}
                        />
                        <Tab
                            label="Types"
                            value="types"
                            onClick={(e) => handleClick(e, "types")}
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

export const getServerSideProps = async (context: { query: { main: HomeQuery } }) => {
    return { props: { query: context.query.main[0] } }
}
