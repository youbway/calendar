import React from 'react';
import Day from './Day';

function Month({month}) {
    // console.log(month);
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
        {month.map((row, index) => {
            return (
              <React.Fragment key={index}>
                {row.map((day, i) => (
                  <Day key={i} day={day} rowIndex={index}></Day>
                ))}
              </React.Fragment>
            );
        })}
    </div>
  )
}

export default Month