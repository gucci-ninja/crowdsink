import React from "react";
import WordCloudd from "react-d3-cloud";
import db from '../config';
// import WebCrawler from '../WebCrawler.js';
import FadeIn from 'react-fade-in';

const data = [
  { text: "Hey", value: 1000 },
  { text: "lol", value: 200 },
  { text: "first impression", value: 800 },
  { text: "very cool", value: 1000000 },
  { text: "duck", value: 10 }
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = () => Math.random() > 0.5 ? 90 : 0;

class WordCloud extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div class="container">
        <FadeIn>
          <div><WordCloudd data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} /></div>
        </FadeIn>

      </div>
    )
  }
}

export default WordCloud;