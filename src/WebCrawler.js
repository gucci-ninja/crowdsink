const request = require('request');
const cheerio = require('cheerio');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const nlu = new NaturalLanguageUnderstandingV1({
    version: '2019-07-12',
    authenticator: new IamAuthenticator({
        apikey: APIKEY
    }),
    url: 'https://gateway-wdc.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2019-07-12'
});

export const crawlers = [
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

export async function crawl(URL, parent, child) {
    return new Promise(function (resolve, reject) {
        var texts = [];
        request(URL, async function (err, res, body) {
            if (err) {
                alert('fsdfsd');
                console.log("an error occured : " + err);
                reject();
            }
            else {
                let $ = cheerio.load(body); //loading content of HTML body
                $(parent).each(function (index) {
                    var text = $(this).find(child).text();
                    texts.push(text);
                });

                // googleNlp(texts);
                var reviews = await watsonNlp(texts);
                console.log('sdklfdkfjklj');
                await setTimeout(() => {
                    // console
                    resolve(reviews)
                }, 3000);


            }
        });

    })
}

async function googleNlp(texts) {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Instantiates a client
    const client = new language.LanguageServiceClient();

    for (let text of texts) {
        const document = {
            content: text,
            type: 'PLAIN_TEXT',
        };

        // Detects the sentiment of the text
        const [result] = await client.analyzeSentiment({ document: document });
        const sentiment = result.documentSentiment;

        // console.log(`Text: ${text}`);
        // console.log(`Sentiment score: ${sentiment.score}`);
        // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
        // console.log('\n');

        // post to firebase?
    }
}

function watsonNlp(texts) {
    var reviews = [];
    var count = 0;
    for (let text of texts) {
        if (count > 5) break;
        count++;
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
                for (let keyword of keywordResults) {
                    var relevance = keyword.relevance;
                    if (relevance > 0.45) {
                        keywords.push(keyword.text);
                    }
                }

                var emotion = result.emotion.document.emotion;
                var analyzed_text = result.analyzed_text;

                let review = {
                    sentiment: sentiment,
                    keywords: keywords,
                    emotion: emotion,
                    text: analyzed_text
                };
                reviews.push(review);

                // console.log(JSON.stringify(review, null, 2));
                // console.log('\n');

            })
            .catch(err => {
                console.log('error: ', err);
            });
        return reviews;
    }
}

function main() {

    for (let crawler of crawlers) {
        crawl(crawler.url, crawler.parentCrawl, crawler.childCrawl).then(response => {
            // console.log(response)
            return response;
        });
        // await setTimeout(()=>console.log(res), 3000);
        // resolve(res);

    }
}


// console.log(main());