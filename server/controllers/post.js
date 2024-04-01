import db from "../connect.js"

export const getPosts = (req, res) => {
    const q =`
    SELECT p.*, u.id AS userId, name, profilePic
    FROM posts AS p
    JOIN users AS u
    ON (u.id = p.userId)
    ORDER BY p.id DESC;`

    db.query(q, (err, data)=>{
        if(err){
            console.log("Get all posts error:", err);
            res.status(500).json(err)
        }
        console.log("Get all posts data:", data);
        return res.status(200).json(data)
    })
}