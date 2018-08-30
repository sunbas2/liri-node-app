require("dotenv").config();

var fs = require("fs");
var keys = require('./key.js');
var Spotify = require("node-spotify-api");
var request = require("request");

var options = function(action, parameter) {
    switch(action) {
        case "spotify-this-song"
        spotify(parameter);

        case "do-what-it-says":
        default1();
        break;

    };
};

function spotify(parameter) {
    var spotify = new Spotify({
        id: ea32ef732d984eceb10a6ea17e0854c3,
        secret: c7dd6b4f88c341478741b08758e6a3cd
    });


    spotify.search({ type: 'track', query: parameter}, funtion(err, data) {
        if(err) {
            console.log(err);
            return;
          
        }
    }


    function default1() {
        fs.readFile("random.txt", "utf8", function(err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
   
    });
}

var begin = function(argv2, argv3) {
    options(argv2, argv3);
};

begin(process.argv[2], process.argv[3]);

