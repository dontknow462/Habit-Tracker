import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser';
import axios from 'axios';




function Thome() {

    const{http, token, user} = AuthUser(); 


            const [habit, setHabit]= useState("")
            const [bool, setBool]= useState("")
            const [getHabs, seGetHabs] =useState([])    //stores the fetched habits from backend



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

        useEffect(()=>{
            fetchHabits();
        }, []);

        const fetchHabits = ()=>{
            http.get('/users/2/habits').then(response=>{
                console.log(response.data);
                seGetHabs(response.data)
            })
            .catch(error =>{
                console.log("Error fetching data:", error);
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
            <div>
                <h1> List of habits Habits</h1>
                {getHabs.map(item => (
                   <div> 
                    
                    <h2 key={item.id}>Habit:{item.habitName}</h2>
                    <button>Edit</button>
                    <button>Delete</button>
                    {item.logs.map(log=>(
                            <div> 
                        <li key={log.id}>Completed: {log.completed}}</li>
                        <input type="checkbox"/>
                        <li key={log.id}>Completed: {log.date}</li>
                        


                            </div>                        
                    ))}
                    
                   
                   
                   
                    </div>
                    
                ))}
            </div>
          
    </div>
  )
}

export default Thome