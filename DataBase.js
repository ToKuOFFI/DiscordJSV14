const mysql = require("mysql")

module.exports = async toku => {

    const Database = new mysql.createConnection({
        host: "NOM DE VOTRE DATABASE",
        user: "NOM DE L'UTILSATEUR ( "root" si local host )",
        password: "MDP DE VOTRE DATABASE ( rien mettre si local host )",
        database: "NOM DE LA DATABASE"
    })
    
    Database.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    
        console.log("📋 Base de données bien relié.")
    })
    
    module.exports = Database;
}
