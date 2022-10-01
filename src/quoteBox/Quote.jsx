import React from 'react';
import './Quote.css';

const Quote = ({items }) => {
    return (
        <div className='quotebox'>
            <h1 className='quotebox-quote' >
                {items.advice}
                {!items && "Click the button to get a new Quote!"}
            </h1>
        </div>
    )    
}

 export default Quote;
 