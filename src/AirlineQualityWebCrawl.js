const request = require('request');
const cheerio = require('cheerio');

var URL = "https://www.airlinequality.com/airline-reviews/jetblue-airways/";
var count = 0;
request(URL, function (err, res, body) {
   if(err){
      console.log("an error occured : " + err);
   }
   else{
    let $ = cheerio.load(body);  //loading content of HTML body
    $('article.list-item').each(function(index){
       var review = $(this).find('div.text_content').text();
       count++;
       console.log('review : ' + review + '\n');   //tweet content
    });
   }
   console.log("count: "+ count + "\n");
});
