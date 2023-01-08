import { serialize } from "cookie";

export default async function (req, res) {
    const serialised = serialize("ourSiteJ", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/",
    });
    res.setHeader("Set-Cookie", serialised);
}
