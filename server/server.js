import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://192.168.1.5:3000",
    methods: ["POST", "GET"],
    credentials: true
}));

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "loginInfo"
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM logininfo WHERE Email = ? and Password = ?";
    db.query(sql, [req.body.Email, req.body.Password], (err, data) => {
        if (err) return res.json({Message : "Server Side Error"});
        if (data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({name}, "our-jsonwebtoken-secret-key", {expiresIn : "1d"})
            res.cookie("token", token);
            return res.json({Status : "Success"})
        }
        else {
            return res.json({Message : "No records existed"})
        }
    })
})

app.listen(8081, () => {
    console.warn("running")
})