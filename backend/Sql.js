import express from "express";
import db from './db.js';

const app = express();

app.listen(8800, ()=> {
  console.log("Connected to backend!")
});
// allows us to send json files using a client
app.use(express.json()) 

// get a request from a user and receive a response, browser can only do get
// this is how to make api request using a server
app.get("/", (req,res)=>{
    res.json("Hello this is the backend")
})
app.get("/users", (req, res) => {
     // we get the info we need from sql queries
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
         // will return an error, or if has data, it gives it

      }
      return res.json(data);
    });
  });

  // user sends user details, in order to test we endpoints use postman to
app.post("/users",(req,res) => {
    const q = "INSERT INTO users (`name`) VALUES (?)";
    const values = [
        req.body.name
    ];
    db.query(q,[values], (err,data) => {
        if (err) 
            return res.json(err);
        return res.json("user has been created");
    });
});

app.listen(8800, ()=> {
    console.log("Connected to backend!")
})