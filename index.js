var express = require('express');
var app = express();
var request = require('request-promise'),
    ruta = "https://jsonplaceholder.typicode.com/users";

request({
    uri:ruta,
    json:true,
}).then(saludo =>{

    console.log(saludo);
    return "como le va";

});


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});