import { capitalizeFirstLetter } from "../util/CapitalizeFirstLetter";
import { Tag } from "@chakra-ui/react"

export function PokemonTag({ typeName }: { typeName: string }) {
    return (
        <Tag width={ "5rem" } justifyContent={ "center" } size={ "lg" } colorScheme={ typeName }>
            { capitalizeFirstLetter(typeName) }
        </Tag>
    )
}