export default async function (req, res) {
    const { cookies } = req;
    const token = cookies.ourSiteJwt;
    if (!token) {
        return res.json({ message: false });
    }
    return res.json({ message: true });
}
