// var express = require("express");
// var app = express();

// var request = require('request');

// // var bodyparser = require("body-parser");
// // app.use(bodyparser.urlencoded({extended: true}));
// app.set("view engine", "ejs");

// app.get("/results", function(req, res)
// {
//     request('http://www.omdbapi.com/?t=harry&apikey=thewdb', function(error, response, body)
// {
//     if(!error && response.statusCode === 200)
//     {
        
//         var parsedData = JSON.parse(body);
//         res.render("results");
//     }
// });
    
// });


// app.listen(process.env.PORT, process.env.IP, function()
// {
//     console.log("Movie App Server has started!!");
// });


var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query+"&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", {data: data});
        }
    });
});



app.listen(9090, process.env.IP, function(){
    console.log("Movie App has started!!!");
});