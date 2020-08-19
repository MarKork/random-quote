import React from 'react';
import './App.css';

const DisplayQuote = (props) => {
    let newRand=""
    if(props.rand===""){
      newRand=Math.floor(Math.random() * (props.quoteList.length  + 1))
    }else(
      newRand=props.rand
    )
  
    let quote=props.quoteList.filter((item,i) =>i===newRand)
    .map((item)=>item.text)
    
    let author=props.quoteList.filter((item,i) =>i===newRand)
    .map((item)=>item.author)
    
    if(author[0]===null){
      author="Unknown"
    }
  
    const quoteText = document.getElementById("quote")
    if(quote.length>0){
      quoteText.style.fontSize="30px"
      quote[0]='"'+quote[0]+'"'
      if(quote[0].length>100){
        quoteText.style.fontSize="25px"
      }
    }
  
    return(
      <div>
        <p id="quote">{quote}</p>
        <p id="author">{author}</p>
      </div>
    )
  }

  export default DisplayQuote;