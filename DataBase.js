const mysql = require("mysql")

const db = mysql.createConnection({
   host: "NOM DE VOTRE DATABASE",
   user: ""NOM DE L'UTILSATEUR ( "root" si local host )",
   password: "MDP DE VOTRE DATABASE ( rien mettre si local host )",
   database: 'NOM DE LA DATABASE',
 });

 db.connect(function(err) {
   if (err) throw err;
   console.log("📋 Base de données bien relié.");
 });

module.exports = db
