const request = require('request');
const cheerio = require('cheerio');

var url = "https://www.airlinequality.com/airline-reviews/jetblue-airways/";
var rents = "article.list-item";
var childs = "div.text_content";


async function crawl(URL, parent, child) {
    var texts = [];
    await request(URL, function (err, res, body) {
        if (err) {
            console.log("an error occured : " + err);
        }
        else {
            let $ = cheerio.load(body);  //loading content of HTML body
            $(parent).each(function (index) {
                var text = $(this).find(child).text();
                texts.push(text);
            });
        }
    });
    return texts;
}

crawl(url, rents, childs).then(function(results){
    console.log(results);
})

