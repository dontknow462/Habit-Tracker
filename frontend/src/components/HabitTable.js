import React, { useState } from 'react';
import './HabitTable.css';

function HabitTable() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dateArray, setDateArray] = useState([]);
  const [dailyHabits, setDailyHabits] = useState([]);
  const [addHabit, setAddHabit] = useState('');
  const [habitpDate, setHabitpDate]=useState([]);
  const [habitValue, setHabitValue]=useState('')
  


  function addHabits() {
    if (addHabit.trim() !== '') {
      const updatedHabits = [...dailyHabits];
      updatedHabits.push(addHabit);
      setDailyHabits(updatedHabits);
      setAddHabit('');
    }
  }

  function getCorrectDates(month, year) {
    const numDays = new Date(year, month, 0).getDate();
    const daysArray = [];

    for (let i = 0; i < numDays; i++) {
      daysArray[i] = i + 1;
    }

    return daysArray;
  }

  function handleDates() {
    setDateArray(getCorrectDates(month, year));
  }

  function habitDetails(index, habit, value) {
    console.log(index + " " + habit + " " + value);
  }

  function handleHabitpDate(day, habit){

    const newHabitpDate = {day, habit, value:habitValue}
    
    setHabitpDate((preHabitpDate)=>[...preHabitpDate,newHabitpDate ])
    setHabitValue('');
    console.log(habitpDate);

  }


  return (
    <div>
      <div className='select-dates'>
        <input placeholder='month' onChange={(e) => setMonth(e.target.value)} />
        <input placeholder='year' onChange={(e) => setYear(e.target.value)} />
        <button onClick={handleDates}>Submit</button>
      </div>

      <div>

        <div>
          <input placeholder='add habit' value={addHabit} onChange={(e) => setAddHabit(e.target.value)} />
          <button onClick={addHabits}>Add</button>
        </div>

        <div className='days'>
          <div className='daysCont'><h1>Days</h1>
            {dailyHabits.map((e) => (<h2 className='headers'>{e}</h2>))}</div>
          {dateArray.map((day) => (
            <div key={day} className='habNbtn'>
              <input disabled placeholder={day} />
              {dailyHabits.map((habit, index) => (
                <div >  <input key={index} placeholder={habit} onChange={(e) => setHabitValue(e.target.value)} /> 
                <button onClick={()=>handleHabitpDate(day,habit)}>submit</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HabitTable;