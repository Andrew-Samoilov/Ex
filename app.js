const express = require("express");
const app = express();

const host = '127.0.0.1'
const port = 7000

app.get("/", function (request, response) {
    response.send("<h1>Главная страница</h1>");
});
app.get("/about", function (request, response) {
    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function (request, response) {
    response.send("<h1>Контакты</h1>");
});
// app.listen(3000);

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`)
})

////

var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://testnet.binance.vision/api/v3/ticker/24hr',
    headers: {
        'Content-Type': 'application/json'
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
