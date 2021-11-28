import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest): Promise<void | NextResponse> {
    if (req.nextUrl.pathname !== "/pokemon" && req.nextUrl.pathname !== "/types") {
        return NextResponse.redirect("/pokemon")
    }
}
