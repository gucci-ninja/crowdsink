import React from "react";
import WordCloudd from "react-d3-cloud";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import db from '../config';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as WebCrawler from '../WebCrawler.js';

// import * as utils from './utils.js'; 
import FadeIn from 'react-fade-in';
const data = [
  { text: "Hey", value: 1000 },
  { text: "lol", value: 200 },
  { text: "first impression", value: 800 },
  { text: "very cool", value: 1000000 },
  { text: "Heys", value: 1000},
  { text: "losl", value: 200 },
  { text: "fisrst impression", value: 800 },
  { text: "versy cool", value: 1000000 },
  { text: "Hewy", value: 1000},
  { text: "lowl", value: 200 },
  { text: "first wimpression", value: 800 },
  { text: "very coowl", value: 1000000 },
  { text: "duck", value: 10 }
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
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Thing"
            aria-label="company"
            aria-describedby="basic-addon2"
            size="lg"
          />
          <InputGroup.Append>
            <Button variant="primary" size="lg" onClick={this.doStuff}>Go</Button>
          </InputGroup.Append>
        </InputGroup>
        <FadeIn>
          <div><WordCloudd data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} /></div>
        </FadeIn>

      </div>
    )
  }
}

export default WordCloud;