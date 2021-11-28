import { hexToHsv, hsvToHex } from "@super-effective/colorutils"

function numberToHex(number: number): string {
    if (number > 255) throw "Opacity must be lower or equal to 255"
    return number.toString(16).toUpperCase().padStart(2, "0")
}

export function normalizeColor(hexColor: string, value: number, saturation: number, opacity: number): string {
    const { hue } = hexToHsv(hexColor)
    return `${hsvToHex(hue, saturation, value)}${numberToHex(opacity)}`
}
