# TwitterSentimentAnalysis

Used to query tweets and analyze the sentiment of given tweets.

Input: Specific queries for tweet(s).
Outputs: Tweet(s) text as well as sentiment analysis of text.

# Installation Requirements

(1) Node.js
https://nodejs.org/en/

(2) Twit
Twitter API Client for node
https://www.npmjs.com/package/twit
To Install: npm install Twit

(3) sentiment  
AFINN-based sentiment analysis for Node.js
https://www.npmjs.com/package/sentiment
To Install: npm install sentiment


# Twitter API

Twitter API Information
1. Create Twitter Developer account.
2. Create new application.
3. Add personal consumer_keys, consumer_secret, access_token and access_token_secret
to config.js.

Parameters
To change the parameters for TwitterSEntimentAnalysis, in bot.js modify or change parameters in var params.
For more parameters: https://developer.twitter.com/en/docs/api-reference-index.

# Running TwitterSEntimentAnalysis

Run node bot.js in terminal.
