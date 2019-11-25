var express = require('express');
var app = express();
var request = require('request-promise'),
    ruta = "https://192.168.200.25:4000";

var aux = false;


app.get('/saludo', function (req, res) {
    aux = true;
    res.send('jao');
});

if(aux){
    request({
        uri:ruta,
        json:true,
    }).then(saludo =>{

        if(saludo !="" || null){
            console.log(saludo);
            aux = false;
        }
    });
}

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});