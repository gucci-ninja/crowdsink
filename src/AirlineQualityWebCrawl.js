const request = require('request');
const cheerio = require('cheerio');

var URL = "https://www.kayak.com/JetBlue.B6.airline.html";
var count = 0;

function testCrawl() {
   request(URL, function (err, res, body) {
      if (err) {
         console.log("an error occured : " + err);
      }
      else {
         let $ = cheerio.load(body);  //loading content of HTML body
         $('li.reviews-ALL').each(function (index) {
            var review = $(this).find('p').text();
            count++;
            console.log('review : ' + review + '\n');   //tweet content
         });
      }
      console.log("count: " + count + "\n");
   });
}

testCrawl();