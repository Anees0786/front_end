import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
//change the password to access the local mySql database;
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
});
export default db;
