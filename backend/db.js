import mysql from "mysql2";
// need to use mysql2  as it is an upgrade from other option of downgrading mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", // remember to change the password
  database: "test"
});

export default db;
