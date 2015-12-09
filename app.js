var http = require('https');
var username = "olivermcrobbie";

function printMessage(username, badgecount,points){
    var msg = username + " has " + badgecount + " total badge(s) and " + points + " points in Javascript";
    console.log(msg);
}


//Connect to api url https://teamtreehouse.com/username.json (using https now)
var request = http.get("https://teamtreehouse.com/olivermcrobbie.json", function(response){
    var body ="";
    //Read the data
    response.on('data', data => body+=data);
    response.on('end', function(){
        var profile = JSON.parse(body);
        console.dir(profile);
    });
    //Parse the data
    //Print the data
});

request.on('error', function(error){
    console.log(error.message);
});