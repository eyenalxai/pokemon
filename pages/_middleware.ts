import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest): Promise<void | NextResponse> {
    if (!["pokemon", "type", "attack"].includes(req.nextUrl.pathname.substring(1))) {
        return NextResponse.redirect("/pokemon")
    }
}
