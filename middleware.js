import { NextResponse } from "next/server";

export default function middleware(req) {
    // console.log(req);
    const { cookies } = req;
    const { RequestCookies } = cookies;
    // console.log(cookies);
    // console.log(RequestCookies);
    const verify = cookies
    const url = req.url
    // console.log(verify);

    // if (verify == RequestCookies {"ourSiteJwt":{"name":"ourSiteJwt","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQGdtYWlsLmNvbSIsImlhdCI6MTY3Mjg5MTQwOH0.LrqFCFX40Db8pt5GpZIfCE7f81puxsa_v-4WFGc6kzM"}}&& url.includes('/profile')) {
    //     return NextResponse.redirect("http://localhost:3000/profile");
    // }

    // if (verify != {} && url.includes("/student-login")) {
    //     return NextResponse.redirect("http://localhost:3000/profile");
    // }


}