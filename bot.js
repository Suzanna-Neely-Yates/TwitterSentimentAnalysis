// Greeting
console.log("Bot is starting");

// Import Twit
var Twit = require("twit");

// Import Sentiment
var Sentiment = require('sentiment');

// Authenticate
var config = require ('./config');
var T = new Twit(config);

// Get Tweets with Given Parameters
var params = {
    q: 'Any word or phrase',
    languages: "en",
    count: 10
}

T.get ('search/tweets', params, gotData);

//Outputs Tweet and Sentiment Analysis
function gotData(err, data, response) {
    var tweets = data.statuses;
    var sentiment = new Sentiment();
    for (var i=0; i<tweets.length; i++) {
        console.log(tweets[i].text);
        var result = sentiment.analyze(tweets[i].text);
        console.dir(result);
    }
}
