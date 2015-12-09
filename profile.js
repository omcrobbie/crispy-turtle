var http = require('https');
var codes = require('http');

//print out message
function printMessage(username, badgecount,points){
    var msg = username + " has " + badgecount + " total badge(s) and " + points + " points in Javascript";
    console.log(msg);
}

function printError(error){
    console.error(error.message);
}

function get(username){
    //Connect to api url https://teamtreehouse.com/username.json (using https now)
    var request = http.get("https://teamtreehouse.com/" + username + ".json", function(response){
        var body ="";
        //Read the data
        response.on('data', data => body += data);
        response.on('end', function(){
            if (response.statusCode === 200){
                try {
                    //Parse the data
                    var profile = JSON.parse(body);
                    //Print the data
                    printMessage(username, profile.badges.length, profile.points.JavaScript);
                } catch (error){
                    //Parse error
                    printError(error);
                }
            }else{
                //Status code error
                printError({message: "There was an error getting the profile for " + username + ". (" + codes.STATUS_CODES[response.statusCode] + ")"});
            }
        });
        
    });
    //Connection error
    request.on('error', printError);
}

module.exports.get = get;
