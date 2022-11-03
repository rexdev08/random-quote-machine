import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteMachine from './components/QuoteMachine';



function App() {
  
const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  const [data, setData] = useState(null)
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => callQuotes, []);
  useEffect(()=>{
    const color = colors[Math.floor(Math.random()*colors.length)]
    document.body.style.backgroundColor = color;
    document.getElementById("text").style.color = color;
    document.getElementById("tweet-quote").style.backgroundColor = color;
    document.getElementById("tumblr-quote").style.backgroundColor = color;
    document.getElementById("new-quote").style.backgroundColor = color;
    document.getElementById("author").style.color = color;

  },[quote])
  
  const callQuotes = async () => {
    const response = await fetch(url);
    const info = await response.json();
    setData(info.quotes);
    const random = Math.round(Math.random() * info.quotes.length)
    setQuote(info.quotes[random].quote);
    setAuthor(info.quotes[random].author);
    
  }

  const newQuote = () => {
    const random = Math.floor(Math.random() * data.length);
    setQuote(data[random].quote);
    setAuthor(data[random].author);
  }

  return (
    <div className="App">
      <QuoteMachine text={quote} author={author} clickHandler={() => newQuote()} />
      <a className='link' rel="noreferrer" href='https://rexdev08.github.io/' target="_blank"><span>Hecho por Raimundo Rincon</span></a>
    </div>
  );
}

export default App;
