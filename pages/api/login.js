import dbConnect from "../../utils/dbConnection";


export default async function (req, res) {
    const { db } = await dbConnect()
    let { usn, email, password } = req.body;
    // console.log({ usn, email, password });
    try {
        const user = await db.collection("users").find({
            $and: [
                {
                    email:
                    {
                        $eq: email
                    },
                },
                {
                    password:
                    {
                        $eq: password
                    }
                },
            ]
        })
        // console.log(user);
        if (!user) {
            return res.json({ err: true })
        } else {
            console.log("found person");
            return res.json({ err: false })
            console.log("aiyla");
        }
    } catch (e) {
        console.log(e);
        res.json({ err: true })
        console.log("nahi yaar");
    }
    res.json({ err: true })
}
