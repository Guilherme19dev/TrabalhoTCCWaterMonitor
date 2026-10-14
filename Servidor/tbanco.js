const mysql = require("mysql2")

const tbanco = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"app"
})

module.exports = tbanco