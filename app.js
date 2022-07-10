const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use( (req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});



app.get('/', (req, res) => {
    res.send({
        name: 'Andrew',
        notes: {
            title: 'Novo titulo',
            body: 'Coisas Lindas'    
        }
    });
});


app.get('/about', (req, res) => {
    res.send({
        name: 'About',
        notes: {
            title: 'BOOOOUT',
            body: 'body bout '    
        }
    });
});



app.listen(3000);
