const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}


const mysql = require('mysql');
const connection = mysql.createConnection(config);
const sql = 'insert into people (name) values (\'Andressa\')';
connection.query(sql);
connection.end();


app.get('/', (req, res) => res.send('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><body><h1>Full Cycle</h1><table> <tr><td>o</td><td>o</td><td rowspan=0>o</td></tr> <tr><td>o</td><td>o</td></tr> <tr><td>o</td><td>o</td></tr> </table></body></html>'));

app.post('/', (req, res) => { 

    console.log(req.body);
    var nome = req.body.nome;

    const mysql = require('mysql');
    const connection = mysql.createConnection(config);
    const sql = `insert into people (name) values ('${nome}')`;
    connection.query(sql);
    connection.end();

    res.send('<h1>Cadastrado Com Sucesso</h1>')});

app.listen(

    port, () => {

        console.log(`Bem Vindo`)
        console.log(`Welcome`)
        console.log(`Benvenuto`)
        console.log(`Example app listening on port ${port}!`)

    }

)


process.on('SIGINT', () => {
    console.info("Interrupted SIGINT");
    process.exit(0);
})

process.on('SIGTERM', () => {
    console.info("Interrupted SIGTERM");
    process.exit(0);
})



 