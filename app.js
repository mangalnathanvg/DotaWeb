var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});



















// var express = require('express');
// var app = express();
// var path = require('path');

// // Serve static files
// app.use(express.static(path.join(__dirname + '/public')));
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });






// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });


/*
// app.get('/', function (req, res) {
//     res.sendFile('/dotaweb/index.html');
// });
   app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

app.post('/submit-awesome-data',function(req,res){
    if(req.body.HeroName=="Axe"){
        res.send("Culling Blade");
    }

    else if(req.body.HeroName=="Sven"){
        res.send("God's Strength");
    }
    else if(req.body.HeroName=="Lone Druid"){
        res.send("Morph");
    }
    else if(req.body.HeroName=="Invoker"){
        res.send("Deafening Blast");
    }
    else{
        res.send("Fuck Off!! I am busy");
    }
});*/