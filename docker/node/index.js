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
const sql = 'insert into people (name) values (\'vitor\')';
connection.query(sql);
connection.end();


app.get('/', (req, res) => res.send('<h1>Full Cycle</h1>'));

app.listen(

    port, () => console.log(`Example app listening on port ${port}!`)

)


process.on('SIGINT', () => {
    console.info("Interrupted SIGINT");
    process.exit(0);
})

process.on('SIGTERM', () => {
    console.info("Interrupted SIGTERM");
    process.exit(0);
})



 