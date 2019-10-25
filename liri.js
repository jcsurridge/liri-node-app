require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios');


let queryURL = `https://rest.bandsintown.com/artists/" + ${artist} + "/events?app_id=codingbootcamp`
let commands = process.argv[2];


function concertThis(){



    
}