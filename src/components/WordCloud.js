import React from "react";
import WordCloudd from "react-d3-cloud";
import db from '../config';
// import WebCrawler from '../WebCrawler.js';
import FadeIn from 'react-fade-in';

const data = [
  { text: "Quick Service", value: 1000 },
  { text: "delay", value: 100000 },
  { text: "Comfort", value: 800 },
  { text: "courteous", value: 100000 },
  { text: "Rude", value: 500 },
  { text: "Airport", value: 10000 },
  { text: "cancel", value: 100000 },
  { text: "Customer Service", value: 100000 },
  { text: "Food", value: 1000 }
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