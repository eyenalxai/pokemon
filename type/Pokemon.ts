export interface Pokemon {
    name: string
    weight: number
    types: {
        type: { name: string }
    }[]
}
