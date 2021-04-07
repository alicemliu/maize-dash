import React from "react";
import { useState , useEffect } from 'react'

import '../css/App.css';
import '../css/date.css';

export default function TimeDate() {
  var [date, setDate] = useState(new Date());

  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  
  useEffect(() => {
      var timer = setInterval(() => setDate(new Date()), 1000)
      return function() {
          clearInterval(timer)
      }
  });

  return (
    <div>
      <h1 id='date'>{ date.toLocaleDateString(undefined, options) }</h1>
      <h2 id='time'>{ date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }</h2>
    </div>
  )
}