import { NextResponse } from "next/server";

export default function middleware(req) {
    const url = req.url
    const verify = req.cookies.get('loggedIn')

    if (verify === undefined && url.includes('/profile')) {
        return NextResponse.redirect("http://localhost:3000/student-login");
    }
    if (verify === undefined && url.includes('/course-registration')) {
        return NextResponse.redirect("http://localhost:3000/student-login");
    }

    if (verify === undefined && url.includes('/activity-points')) {
        return NextResponse.redirect("http://localhost:3000/student-login");
    }

    if (verify && (url.includes("/student-login") || url.includes("/facculty-login"))) {
        return NextResponse.redirect("http://localhost:3000/profile");
    }
}