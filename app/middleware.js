import { NextResponse } from "next/server"

export default function middleWare(req) {
    const { cookie } = req.body()
    const jwt = cookie.OursiteJWT
    const url = req.url
    if (url.includes('/student-login') || url.includes('/facculty-login')) {
        if (jwt === undefined) {
            NextResponse.redirect('/profile')
        }
    }
    if (url.includes('/profile')) {
        if (jwt === undefined) {
            NextResponse.redirect('/student-login')
        }
    }
}
