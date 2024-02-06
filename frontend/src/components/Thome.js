import React, { useState } from 'react'
import AuthUser from './AuthUser';
import axios from 'axios';




function Thome() {

    const{http, token, user} = AuthUser(); 


            const [habit, setHabit]= useState("")
            const [bool, setBool]= useState("")



        const handleHabitChange= (e)=> {
            setHabit(e.target.value)
        }
        const handleBoolChange= (e)=> {

            if(e.target.checked){
            setBool("turu")
            }else{
                setBool("flase")
            }
        }




        const handleSubmit =(e)=>{
            e.preventDefault();

                const habitData = {
                    email: user.email ,
                    habitName:habit,
                    date: "12-12-2025", 
                    completed:bool
                }
                console.log(habitData)
              
                http.post("/habits", 
                {habit:habitData}
                )
                .then(response=>{
                  console.log(response.data);
                })
                .catch (error=>{
                  console.log(error.response);
                })



        }


  return (
    <div>
        
        <div>
               <form onSubmit={handleSubmit}>
                <input placeholder ="habit" onChange={handleHabitChange}/>
                <input placeholder='date' />
                <input type='checkbox' onChange={handleBoolChange}/>
                <button>Submit</button>
               </form>

                
        </div>

          
    </div>
  )
}

export default Thome