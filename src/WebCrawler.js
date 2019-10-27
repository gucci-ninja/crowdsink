const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config();

const nlu = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: process.env.NATURAL_LANGUAGE_UNDERSTANDING_APIKEY,
  }),
  url: 'https://gateway-wdc.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2019-07-12'
});

const crawlers = [
    {
        source: 'Twitter',
        url: 'https://twitter.com/hashtag/jetblue?src=hash',
        parentCrawl: 'li.stream-item',
        childCrawl: 'p.tweet-text'
    },
    {
        source: 'AirlineQuality',
        url: 'https://www.airlinequality.com/airline-reviews/jetblue-airways/',
        parentCrawl: 'article.list-item',
        childCrawl: 'div.text_content'
    },
    // {
    //     source: 'Yelp',
    //     url: '',
    //     parentCrawl: '',
    //     childCrawl: ''
    // }
]

function crawl(URL, parent, child) {
    return new Promise(function (resolve, reject) {
        var texts = [];
        request(URL, function (err, res, body) {
            if (err) {
                console.log("an error occured : " + err);
                reject();
            }
            else {
                let $ = cheerio.load(body); //loading content of HTML body
                $(parent).each(function (index) {
                    var text = $(this).find(child).text();
                    texts.push(text);
                });

                // nlp(texts);
                watsonNlp(texts);
                resolve();
            }
        });

    })
}

async function nlp(texts) {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Instantiates a client
    const client = new language.LanguageServiceClient();

    for (var text of texts) {
        const document = {
            content: text,
            type: 'PLAIN_TEXT',
        };

        // Detects the sentiment of the text
        const [result] = await client.analyzeSentiment({ document: document });
        const sentiment = result.documentSentiment;

        console.log(`Text: ${text}`);
        console.log(`Sentiment score: ${sentiment.score}`);
        console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
        console.log('\n');

        // post to firebase?
    }
}

async function main(){
    for (crawler of crawlers) {
        let res = await crawl(crawler.url, crawler.parentCrawl, crawler.childCrawl);
    }
}

function watsonNlp(texts) {
    for (text of texts) {
        nlu.analyze(
            {
                text: text,
                features: {
                    keywords: {
                    },
                    emotion: {
                    },
                    sentiment: {
                    }
                },
                returnAnalyzedText: true,
            })
            .then(response => {
                var result = response.result;

                var sentiment = result.sentiment.document.score;

                var keywordResults = result.keywords;
                var keywords = [];
                for (keyword of keywordResults) {
                    var relevance = keyword.relevance;
                    if (relevance > 0.45) {
                        keywords.push(keyword.text);
                    }
                }

                var emotion = result.emotion.document.emotion;
                var analyzed_text = result.analyzed_text;

                let analysis = {
                    sentiment: sentiment,
                    keywords: keywords,
                    emotion: emotion,
                    analyzed_text: analyzed_text
                };

                console.log(JSON.stringify(analysis, null, 2));
                console.log('\n');
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }
}

main();
