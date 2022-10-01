import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Quote from './quoteBox/Quote';

const Map = () => {
   const [item, setItem] = useState("");

   const Effect = () => {
      fetch("  https://api.adviceslip.com/advice  ")
         .then(res => res.json())
         .then(
            (result) => {
               setItem(result.slip);
               console.log(result.slip.advice)
            },
         )
   }
   return (
      <div className='container' >
         <div className='data'>
            <Quote items={item} />
         </div>
         <div>
            <button
               onClick={Effect}
               className='click' >
               Click for a quote !</button>
         </div>

         {/* {item.advice}   this can also be used thats the easy ne */}
      </div>
   );
}

export default Map;
/*
        useEffect( () => {
           const fetchItem= async ()=>{
           const result = await axios(`  https://api.adviceslip.com/advice   `)
         
           setItem(result.data.slip)
           }
           fetchItem();
          }  , [ ]  )
          
          */