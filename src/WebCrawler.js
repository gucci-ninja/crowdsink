// // const request = require('request');
// // const cheerio = require('cheerio');

// const crawlers = [
//     {
//         source: 'Twitter',
//         url: 'https://twitter.com/hashtag/jetblue?src=hash',
//         parentCrawl: 'li.stream-item',
//         childCrawl: 'p.tweet-text'
//     },
//     {
//         source: 'AirlineQuality',
//         url: 'https://www.airlinequality.com/airline-reviews/jetblue-airways/',
//         parentCrawl: 'article.list-item',
//         childCrawl: 'div.text_content'
//     },
//     // {
//     //     source: 'Yelp',
//     //     url: '',
//     //     parentCrawl: '',
//     //     childCrawl: ''
//     // }
// ]

// function crawl(URL, parent, child) {
//     return new Promise(function (resolve, reject) {
//         var texts = [];
//         request(URL, function (err, res, body) {
//             if (err) {
//                 console.log("an error occured : " + err);
//                 reject();
//             }
//             else {
//                 let $ = cheerio.load(body); //loading content of HTML body
//                 $(parent).each(function (index) {
//                     var text = $(this).find(child).text();
//                     texts.push(text);
//                 });

//                 nlp(texts);
//                 resolve();
//             }
//         });

//     })
// }

// async function nlp(texts) {
//     // Imports the Google Cloud client library
//     const language = require('@google-cloud/language');

//     // Instantiates a client
//     const client = new language.LanguageServiceClient();

//     for (text of texts) {
//         const document = {
//             content: text,
//             type: 'PLAIN_TEXT',
//         };

//         // Detects the sentiment of the text
//         const [result] = await client.analyzeSentiment({ document: document });
//         const sentiment = result.documentSentiment;

//         console.log(`Text: ${text}`);
//         console.log(`Sentiment score: ${sentiment.score}`);
//         console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
//         console.log('\n');

//         // post to firebase?
//     }
// }

// async function main(){
//     for (crawler of crawlers) {
//         let res = await crawl(crawler.url, crawler.parentCrawl, crawler.childCrawl);
//     }
// }

// main();
