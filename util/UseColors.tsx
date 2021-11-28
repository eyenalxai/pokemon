export function useColors(prefersDarkMode: boolean) {

    const backgroundColor = {
        value: prefersDarkMode ? 0.5 : 1,
        saturation: prefersDarkMode ? 0.5 : 0.7,
        opacity: prefersDarkMode ? 77 : 50
    }

    const color = {
        value: prefersDarkMode ? 0.95 : 0.5,
        saturation: prefersDarkMode ? 0.5 : 0.5,
        opacity: prefersDarkMode ? 250 : 200
    }

    const borderColor = {
        value: prefersDarkMode ? 0.5 : 0.5,
        saturation: prefersDarkMode ? 0.5 : 0.5,
        opacity: prefersDarkMode ? 100 : 100
    }

    return { backgroundColor, color, borderColor }
}