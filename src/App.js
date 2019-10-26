import React from 'react';
import './App.css';
import WordCloud from './components/WordCloud';
import Header from './components/Header';
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
        <WordCloud></WordCloud>
      </section>
      <Info></Info>
      
    </div>
  );
}

export default App;
