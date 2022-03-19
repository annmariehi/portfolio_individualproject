import './App.css';
import React from 'react';
import { HearQuoteButton } from './components/HearQuoteButton';
import { quotes } from './components/quoteList';


function App() {

  const genNewQuote = () => {
    
    //generates random number
    const min = 0;
    const max = quotes.length - 1;
    let currentInt = Math.floor(Math.random() * (max - min + 1) + min);
    const currentQuote = quotes[currentInt];

    //sets currentQuote to a JSON object so it can be passed to controller.mjs
    const sendQuote = {squote: currentQuote};

    //sets the div called "quote-goes-here" to the currentQuote
    document.getElementById("quote-goes-here").innerHTML = localStorage.getItem('quote');
    
    //stores the quote in the browser's local storage so when the page is 
    //refreshed because the audio.mp3 file is updated in the public file by the
    //text_to_speech microservice, the same quote is still displayed on the page
    localStorage.setItem('quote', currentQuote);
    console.log(currentQuote);
    
    //passing currentQuote to the controller.mjs file to be saved to the local text file
    const response = fetch('/', {
      method: 'POST',
      body: JSON.stringify(sendQuote),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };


  return (
    <div className="App">
      <header>
          <h1>Inspirational Quote Generator</h1>
      </header>
        <main>
          <div id="quote-goes-here">{localStorage.getItem('quote')}</div>
            <button className ="new-quote-button" onClick={genNewQuote}>New Quote</button>
            <HearQuoteButton />
        </main>
      <footer>CS 361 Portfolio Project &copy; 2022 Ann Marie Hicks</footer>

    </div>
  );
}

export default App;
