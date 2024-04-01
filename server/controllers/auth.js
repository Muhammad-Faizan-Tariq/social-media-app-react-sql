import db from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = (req, res) => {

    const q = "SELECT * FROM users WHERE username = ?"
    //check user is already exist
    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            console.log("Checking User Error>>>>>", err);
            return res.status(500).json(err)
        }
        if (data.length) {
            console.log("Where is user", data);
            return res.status(409).json("User is already exist")
        }

        //create new user
        //hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)"
        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]
        db.query(q, [values], (err, data) => {
            if (err) {
                console.log("Insert database Error:", err);
                return res.status(500).json(err)
            }
            console.log("Inserting Data>>>>>>>>>", data);
            return res.status(200).json("User has been created!")
        })
    })

}

export const login = (req, res) => {

    const q = "SELECT * FROM users WHERE username = ?"
    //found user
    db.query(q, [req.body.username], (err, data) => {

        if (err) {
            console.log("Not found user error:", err);
            return res.status(500).json(err);
        }
        if (data.length === 0) {
            console.log("This user is not found:", data);
            return res.status(404).json("User not found!")
        }

        //if user found then check password
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
        if (!checkPassword) {
            console.log("Wrong Passowrd", data[0].password);
            return res.status(400).json("Wrong credentials!")
        }

        const token = jwt.sign({id:data[0].id}, "secretkey")
        const {password, ...other} = data[0]
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(other)
    })

}

export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has been logout")
}

export const forgetPassword = (req, res) => {
    res.send("This is for forget Password!!")
}