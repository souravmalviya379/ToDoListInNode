const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running server'+err);
    }else{
        console.log('Server is running on port : '+port);
    }
})

