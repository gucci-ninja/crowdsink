import React from "react";
import WordCloudd from "react-d3-cloud";
import db from '../config';
import 'firebase/auth';
import 'firebase/firestore';
import * as WebCrawler from '../WebCrawler.js';

// import * as utils from './utils.js'; 
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
    this.doStuff = this.doStuff.bind(this);
  }
  doStuff() {
    console.log('stufff');
    window.location.reload();
    // this is where we will write to the database ussing db object and WebCrawler object

  }

  // get data of a company collection
  getData = async (company) => {
    db.collection('companies')
      .doc(company)
      .collection('reviews')
      .onSnapshot((snap) => {
        // console.log(snap.docs); //querysnapshot of array
        // snap.forEach((s) => {
        //   console.log(s.get('sentiment'), s.get('text'), s.get('emotion'), s.get('keywords'));
        // })
      });
  }

  // add array [[,],[,],[,],[,],..] of reviews to a company collection [{,},{,},{,},..]
  addData = async (company, obj) => {
    db.collection('companies')
      .doc(company)
      .collection('reviews')
      .add(obj)
    this.getData('JetBlue');
  }

  componentDidMount() {
    for (let crawler of WebCrawler.crawlers) {
      let res = WebCrawler.crawl(crawler.url, crawler.parentCrawl, crawler.childCrawl).then(response =>{
        console.log(response);
      });
      console.log(res);
      // await setTimeout(() => {
      // }, 3000);
    }
    console.log("we good");

    this.addData('JetBlue', {
      sentiment: 0.2,
      text: 'akfnaoicdhwopfjqoiwf',
      emotion: { 'happiness': 1.2, 'sadness': 0.3 },
      keywords: 'keyword,1,2,3'
    });
    this.getData('JetBlue');
    
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