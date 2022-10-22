import './App.css';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Quote from './quoteBox/Quote';
 
const App = () => {
   
   const [item, setItem] = useState("");

   useEffect(() => {
      const fetchItem = async () => {
         const result = await axios(`https://api.adviceslip.com/advice`)
         setItem(result.data.slip);
      }
      fetchItem();
   },[]);

  return (
      <div className='container'>
        <div className='data'>
            <Quote items={item} />
        </div>

        <div>
            <button onClick={item} className='click'>click on me</button>
        </div>
   {/* {item.advice}   this can also be used thats the easy ne */}
      </div>
  );
}

export default App;
