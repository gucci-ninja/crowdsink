const request = require('request');
const cheerio = require('cheerio');

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
    {

    }
]

function crawl(URL, parent, child) {
    var texts = [];
    request(URL, function (err, res, body) {
        if (err) {
            console.log("an error occured : " + err);
        }
        else {
            let $ = cheerio.load(body); //loading content of HTML body
            $(parent).each(function (index) {
                var text = $(this).find(child).text();
                
                // call sentiment function?
                

                // replace with writing to database.

                texts.push(text);
            });
        }
    });
    return texts;
}