import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

const app = express();
app.use(express.json());

// using cors we form a bridge between the frontend and the backend
// by giving it the Frontend URL & methods that the backend will be using 
app.use(cors({
    origin: "http://192.168.1.5:3000",
    methods: ["POST", "GET"],
    credentials: true
}));

// for DB we are using XAMPP wherein we have a database : "loginInfo" and there's a table: "logininfo"
// having 3 columns [Email Varchar(20), Password Varchar(20), Authority Varchar(20)]
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "loginInfo"
})

// user reaches '/login' endpoint the following code is meant to run
app.post('/login', (req, res) => {
    
    const sql = "SELECT * FROM logininfo WHERE Email = ? and Password = ?";
    
    // after running the above query with the given email and password we get a callback value
    // either 'error' / 'data' from the database 
    db.query(sql, [req.body.Email, req.body.Password], (err, data) => {
        if (err) return res.json({Message : "Server Side Error"});
        if (data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({name}, "our-jsonwebtoken-secret-key", {expiresIn : "1d"}) // using jwt to sign our payload using our secret key also giving it a expiry time 
            res.cookie("token", token); // this token it recieved by the user as a cookie
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