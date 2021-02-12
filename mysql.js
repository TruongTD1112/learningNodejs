var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "mydb"

});

con.connect(function(err) {
    console.log(err);
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
      if (err) throw err;
      console.log("Table is created");
    });
  });