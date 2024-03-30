import  db  from "../connect.js"
import bcrypt from "bcryptjs"

export const register = (req, res) => {

    //check user is already exist
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data)=>{
        if(err) {
            console.log("Checking User Error>>>>>", err);
            return res.status(500).json(err)
        }
        if(data.length) {
            console.log("Where is user", data);
            return  res.status(409).json("User is already exist")
        }

        //create new user
            //hash password
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt)

            const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)"
            const values = [req.body.username, req.body.email, hashedPassword, req.body.name]
            db.query(q, [values], (err, data)=>{
                if(err) {
                    console.log("Insert database Error:", err);
                    return res.status(500).json(err)
                }
                console.log("Inserting Data>>>>>>>>>", data);
                return res.status(200).json("User has been created!")
            })
    })

}

export const login = (req, res) => {
    res.send("Login Screen Test")
}

export const logout = (req, res) => {
    res.send("This is for logout")
}