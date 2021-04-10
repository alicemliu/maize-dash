import React from "react";
import { useState , useEffect } from 'react'

import '../css/App.css';
import '../css/qotd.css';

export default function QOTD() {
  var [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://quotes.rest/qod", { 'method': 'GET'})
    .then((response) => {
      if(!response.ok) throw Error(response.statusText);
         return response.json();
    })
    .then((data) => {
          setQuote(data.contents.quotes[0])
          //data.contents.quotes[0].quote + " - " + data.contents.quotes[0].author
    })
    .catch((error) => console.log(error));
  });

  return (
    <div >
      <h2 id='qotd'>Quote of the Day</h2>
      <h2 id='quote'>{quote.quote + " - " + quote.author}</h2>
    </div>
  )
}