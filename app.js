var profile = require("./profile");
if (process.argv.length > 2){
    var users = process.argv.slice(2);
    users.forEach(profile.get);
} else
    console.log("No usernames were supplied!");
