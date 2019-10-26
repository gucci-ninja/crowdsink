const request = require('request');
const cheerio = require('cheerio');

var URL = "https://twitter.com/hashtag/jetblue?src=hash";
var count = 0;
request(URL, function (err, res, body) {
   if(err){
      console.log("an error occured : " + err);
   }
   else{
    let $ = cheerio.load(body);  //loading content of HTML body
    $('li.stream-item').each(function(index){
       var tweet = $(this).find('p.tweet-text').text();
       count++;
       console.log('tweet : ' + tweet);   //tweet content
    });
   }
   console.log("count: "+ count + "\n");
});
