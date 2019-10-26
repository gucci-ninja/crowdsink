import React from 'react';
import './App.css';
import WordCloud from './components/WordCloud';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <br></br>
      <br></br>
      <WordCloud></WordCloud>
    </div>
  );
}

export default App;
