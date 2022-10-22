import React from 'react';
import './Quote.css';

const Quote = ({quote }) => {
    return (
        <div className='quotebox'>
            <h1 className='quotebox-quote'>
                {quote}
            </h1>
        </div>
    )    
}

export default Quote;
 