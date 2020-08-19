import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios'
import DisplayQuote from "./DisplayQuote";

function App() {
  const[quoteList, setQuoteList] = useState([]);
  const[rand, setRand]=useState("")
  
  useEffect(() => {
    const fetchData = async ()=>{
      const response = await axios
      .get('https://type.fit/api/quotes')
      setQuoteList(response.data)
    }
    fetchData()
  },[]);

  const handleClick = () => {
    setRand(Math.floor(Math.random() * (quoteList.length  + 1)))
  };

  return (
    <div className="App" id="quote-box">
     <DisplayQuote quoteList={quoteList} rand={rand}/>
     <button className="button" id="new-quote" onClick={handleClick} >Next</button>
    </div>
  );
}

export default App;