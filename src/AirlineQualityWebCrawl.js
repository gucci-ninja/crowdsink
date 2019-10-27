// const request = require('request');
// const cheerio = require('cheerio');

var URL = "https://www.tripadvisor.com/Airline_Review-d8729099-Reviews-JetBlue";
var count = 0;

function testCrawl() {
   request(URL, function (err, res, body) {
      if (err) {
         console.log("an error occured : " + err);
      }
      else {
         let $ = cheerio.load(body);  //loading content of HTML body
         $('div.location-review-card-Card__ui_card--2Mri0').each(function (index) {
            var review = $(this).find('span').text();
            count++;
            console.log('review : ' + review + '\n');   //tweet content
         });
      }
      console.log("count: " + count + "\n");
   });
}

// testCrawl();
