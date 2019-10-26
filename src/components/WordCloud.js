import React from "react";
import WordCloudd from "react-d3-cloud";


const data = [
  { text: "Hey", value: 1000},
  { text: "lol", value: 200 },
  { text: "first impression", value: 800 },
  { text: "very cool", value: 1000000 },
  { text: "duck", value: 10 }
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = () => Math.random() > 0.5 ? 90 : 0;

class WordCloud extends React.Component {
    render(){
        return(
            <WordCloudd data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} />
        )
    }
}

export default WordCloud;