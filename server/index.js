const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const hc = require('./controllers/house_controller');
require('dotenv').config();
const app = express();

const { CONNECTION_STRING: cs, SERVER_PORT: port, SESSION_SECRET: ss } = process.env;

app.use(bodyParser.json());
app.use(express.static('build'));


massive(cs).then(db =>  {
    app.set('db', db);
    console.log('db is connected');
});


app.get('/api/houses', hc.getHouses);

app.post('/api/houses', hc.addNewHouse);

app.delete('/api/houses/:id', hc.deleteHouse);



app.listen(port, () => console.log(port));