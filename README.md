# TwitterSentimentAnalysis

Used to query tweets and analyze the sentiment of given tweets.

Input: Specific queries for tweet(s).
<br>Outputs: Tweet(s) text as well as sentiment analysis of text.

# Installation Requirements

(1) Node.js
<br>https://nodejs.org/en/

(2) Twit
<br>Twitter API Client for node
<br>https://www.npmjs.com/package/twit
<br>To Install: npm install Twit

(3) sentiment
<br>AFINN-based sentiment analysis for Node.js
<br>https://www.npmjs.com/package/sentiment
<br>To Install: npm install sentiment


# Twitter API

Twitter API Information
1. Create Twitter Developer account.
2. Create new application.
3. Add personal consumer_keys, consumer_secret, access_token and access_token_secret
to config.js.

Parameters
<br>To change the parameters for TwitterSentimentAnalysis, in bot.js modify or change parameters in var params.
<br>For more parameters: https://developer.twitter.com/en/docs/api-reference-index.

# Running TwitterSentimentAnalysis

Run node bot.js in terminal.
