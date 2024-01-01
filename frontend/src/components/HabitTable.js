import React, { useState } from 'react'
import './HabitTable.css'

// Dont forget to put documentation on your code cuz I dont understand my own code LOLLLL

function HabitTable() {

  const today = new Date();
  const todayDate = today.getDate();
  const daysArray = [];

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dateArray, setDateArray] = useState([]);
  const [addHabit, setAddHabit]=useState('');


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
        <input placeholder='add habit' onChange={()}/>
        <div className='days'>
          {dateArray.map((key, item) => (
            <div>
            <input disabled key={key} placeholder={item} />
            <input disabled placeholder={key} />

            </div>

          ))}
        </div>

      </div>


      { }
    </div>
  )
}

export default HabitTable