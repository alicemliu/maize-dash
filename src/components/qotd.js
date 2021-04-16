import React from "react";
import { useState , useEffect } from 'react'

import '../css/App.css';
import '../css/qotd.css';

export default function QOTD() {
  var [quote, setQuote] = useState({'fetched': false, 'data': {}});

  useEffect(() => {
    if(!quote.fetched){
      console.log("Quote Fetching")
      fetch("https://quotes.rest/qod", { 'method': 'GET'})
      .then((response) => {
        if(!response.ok) throw Error(response.statusText);
           return response.json();
      })
      .then((data) => {
            setQuote({'fetched': true, 'data': data.contents.quotes[0]})
            //data.contents.quotes[0].quote + " - " + data.contents.quotes[0].author
      })
      .catch((error) => console.log(error));
    }
  });

  return (
    <div >
      <h1 id='qotd'>Quote of the Day</h1>
      <h2 id='quote'>{quote.data.quote + " - " + quote.data.author}</h2>
    </div>
  )
}