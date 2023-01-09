export default async function (req, res) {
    if (!req.cookies.get('loggedIn')) {
        return res.json({ message: false });
    }
    return res.json({ message: true });
}
