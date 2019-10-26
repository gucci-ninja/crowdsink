// const request = require('request');
// const cheerio = require('cheerio');

// var url = "https://www.airlinequality.com/airline-reviews/jetblue-airways/";
// var rents = "article.list-item";
// var childs = "div.text_content";


// function crawl(URL, parent, child) {
//     var texts = [];
//     request(URL, function (err, res, body) {
//         if (err) {
//             console.log("an error occured : " + err);
//         }
//         else {
//             let $ = cheerio.load(body); //loading content of HTML body
//             $(parent).each(function (index) {
//                 var text = $(this).find(child).text();
                
//                 // call sentiment function?


//                 // replace with writing to database.

//                 texts.push(text);
//             });
//         }
//     });
//     return texts;
// }
