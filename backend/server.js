import express from "express"
import mysql from "mysql2"
import renderToString from 'react-dom'
// backend/index.js
import App from '../frontend/src/App'


const app = express();



app.use(express.static('frontend/public'));

app.get('*', (req, res) => {
  const App = require('./frontend/src/App').default;
  const html = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


// need to use mysql2  as it is an upgrade from other option of downgrading mysql

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"password", // remember to change this when commiting
    database:"test"
})
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