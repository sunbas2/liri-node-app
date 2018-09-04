require("dotenv").config();

var fs = require("fs");
var keys1 = require('./keys.js');
var Spotify = require("node-spotify-api");
var request = require("request");

var options = function(action, parameter) {
    switch(action) {
        case "spotify-this-song":
            thisSpotify(parameter);
            break;
        case "do-what-it-says":
            default1();
            break;
        default:
            console.log("LIRI is not sure")
    };
};

function thisSpotify(parameter) {
    var spotify = new Spotify(keys1.spotify);
    };

    if (!parameter) {
        parameter = "The Sign";
    }

    spotify.search({ type: 'track', query: parameter }, function(err, data) {
        if (err) {
            console.log(err);
            return;
        } else {
            output = 
                "Song Name: " + parameter +
                "Album Name: " + data.tracks.items[0].album.name +
                "Artist Name: " + data.tracks.items[0].album.artists[0].name +
                "URL: " + data.tracks.items[0].album.external_urls.spotify;
            console.log(output);
          
        };
    });

    var default1 = function() {
        fs.readFile("random.txt", "utf8", function(err, data) {
            console.log(data);
            writeToLog(data);
        });
    }            

    
    var begin = function(argv2, argv3) {
        options(argv2, argv3);
    };
    
    begin(process.argv[2], process.argv[3]);