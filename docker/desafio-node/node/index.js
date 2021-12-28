const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}


const mysql = require('mysql');
const connection = mysql.createConnection(config);
//cria a tabela caso ela não exista
const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), PRIMARY KEY (id))`;
connection.query(sqlCreateTable);
const sql = 'insert into people (name) values (\'Vitor\')';
connection.query(sql);
connection.end();


app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
    connection.query('select * from people', function (err, rows, fields) {
        if (err) throw err

        res.write("<h1>Full Cycle Rocks!</h1>");
        res.write("<ul>");
        for (let r in rows)
        {
            res.write(`<li>${rows[r].name}</li>`);
        }
        res.write("</ul>");
        res.end();

    })
    connection.end();
    
});



app.listen(

    port, () => {
        console.log(`Bem Vindo, listening on port ${port}!`)
    }

)




 