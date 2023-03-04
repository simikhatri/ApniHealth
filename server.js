const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors")


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// const userschema = new mongoose.Schema({

//     Username: String,
//     Email: String,
//     password: String,
//     Phone: Number
// })
// const Users = mongoose.model("Users", userschema)

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://root:root@cluster0.4y4qr9k.mongodb.net/ApniHealth', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => console.log("Error in conecting to database"))
db.once('open', () => console.log("Connected to database"));
app.post("/signup", async (req, resp) => {
    const { Username, Email, Phone, password } = req.body
    const data = {
        "Username": Username,
        "Phone": Phone,
        "Email": Email,
        "password": password,
    }
    db.collection('Users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("record inserted")
    });
}
)

// app.post("/signup", (req, resp) => {
//     var username = req.body.fname;
//     var Phone = req.body.fphon;
//     var email = req.body.femail;
//     var password = req.body.fpass;
//     var Role = req.body.Role;

//     var data = {
//         "username": username,
//         "Phone": Phone,
//         "email": email,
//         "password": password,
//     }
//     db.collection('Users').insertOne(data, (err, collection) => {
//         if (req.body.Role === "doctor") {
//             return resp.redirect('Home.js');
//         }
//         else {
//             return resp.redirect('Home.js');
//         }
//     });
// });
app.listen(3200, () => {
    console.log("Server is running at port 3200");
});