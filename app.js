require('dotenv').config();
const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');

app.use(express.static('public'));


// Template Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const PORT = 5000 || process.env.PORT;

app.use('/', require('./server/routes/main'));



app.listen(PORT, ()=> {
    console.log(`Application is listening on port: ${PORT}`);
});