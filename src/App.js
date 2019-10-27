import React from 'react';
import './App.css';
import WordCloud from './components/WordCloud';
import Header from './components/Header';
import Hypothesis from './components/Hypothesis';
import Button from './components/InputForm';
import Chart from './components/Chart';
import Info from './components/Info';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
      <Header></Header>
      <br></br>
      <br></br>
      {/* <section id="hypothesis"><Hypothesis></Hypothesis></section> */}
      <section id="demo">
        <div class="container-fluid">
          <div class="row">
            <Button company="Delta Airlines"></Button>
            <Button company="Air Canada"></Button>
            <Button company="JetBlue"></Button>
            <Button company="West Jet"></Button>
          </div>
          <br></br>
          <WordCloud></WordCloud>
          <div class="row graphs">
            <Chart title="Sadness" val="320"></Chart>
            <Chart title="Joy" val="70"></Chart>
            <Chart title="Fear" val="40"></Chart>
            <Chart title="Disgust" val="30"></Chart>
            <Chart title="Anger" val="20"></Chart>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <Info></Info>

    </div>
  );
}

export default App;
