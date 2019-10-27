const fs = require('fs');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');

const nlu = new NaturalLanguageUnderstandingV1({
    version: '2018-04-05',
    url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/'
});

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
                // console.log(`sentiment: ${JSON.stringify(sentiment)}`);

                var keywordResults = result.keywords;
                var keywords = [];
                for (keyword of keywordResults) {
                    var relevance = keyword.relevance;
                    if (relevance > 0.45) {
                        keywords.push(keyword.text);
                    }
                }
                // console.log(`keywords: ${keywords}`);

                var emotion = result.emotion.document.emotion;
                var analyzed_text = result.analyzed_text;
                // console.log(`emotion: ${JSON.stringify(emotion)}`);
                // console.log(`analyzed text: ${result.analyzed_text}`);

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

var sample = [
    "jetblue sucks!",
    "jetblue is awesome",
    "JetBlue has so many delays I wanna die"
]

watsonNlp(sample);