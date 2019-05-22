const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Stev!eg33",
    database: "burgers_db"
  });
}

connection.connect(function(error) {
  if (error) {
    console.log(error.stack);
    return;
  }
  console.log(`successfully connected with id ${connection.threadId}`);
});

module.exports = connection;
