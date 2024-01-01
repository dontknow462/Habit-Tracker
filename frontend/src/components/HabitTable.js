import React, { useState } from 'react'
import './HabitTable.css'

function HabitTable() {

  const today = new Date();
  const todayDate = today.getDate();
  const daysArray = [];

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dateArray, setDateArray] = useState([])


  function getCorrectDates(month, year) {
    const numDays = new Date(year, month, 0).getDate();

    for (let i = 0; i < numDays; i++) {
      daysArray[i] = i + 1;
    }

    return daysArray;
  };

  function handleDates(){
      setDateArray(getCorrectDates(month, year))
  }



  return (
    <div>

      <div className='select-dates'>
          <input placeholder='month' onChange={(e)=>setMonth(e.target.value)} />
          <input placeholder='year'onChange={(e)=>setYear(e.target.value)}/>
          <button onClick={handleDates}>Submit</button>
      </div>

      <div>
        <h1>Days</h1>
        <div className='days'>
          {dateArray.map(item => (

            <input disabled placeholder={item} />
          ))}
        </div>

      </div>


      { }
    </div>
  )
}

export default HabitTable