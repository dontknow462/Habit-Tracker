import React, { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import axios from 'axios';





function ShowHabits() {  // Capitalized component name

  const{http, token, user} = AuthUser(); 


  const habit =

    {
      email: "krista.gutmann@example.com", 
      habitName: "meditation",
      date: "12-12-2025", 
      completed: "Turu"
    }
    const inputStyles = {
      width: '600px',  // Set the desired width (e.g., '300px')
      height: '40px'  // Set the desired height (e.g., '40px')
    };
  

    const handleSubmit =()=>{

      console.log(habit);
      http.post("/habits", 
      {habit:habit}
      )
      .then(response=>{
        console.log(response.data);
      })
      .catch (error=>{
        console.log(error.response);
      })

    }
  
  
  
    return(
      <div>
        <input placeholder={`email:${habit.email} name:${habit.habitName} date:${habit.date}  completed:${habit.completed}`} style={inputStyles}/>
        <button onClick={handleSubmit}>Click</button>
      </div>
    )


}

export default ShowHabits;  // Capitalized export name
