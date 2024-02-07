import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser';
import axios from 'axios';




function Thome() {

    const { http, token, user } = AuthUser();


    const [habit, setHabit] = useState("")
    const [bool, setBool] = useState("false")
    const [getHabs, seGetHabs] = useState([])    //stores the fetched habits from backend



    const handleHabitChange = (e) => {
        setHabit(e.target.value)
    }
    const handleBoolChange = (e) => {

        setBool(e.target.checked ? "turu" : "false")
        console.log(bool)
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        const habitData = {
            email: user.email,
            habitName: habit,
            date: "12-12-2025",
            completed: bool
        }
        console.log(habitData)
        console.log(bool)

        http.post("/habits",
            { habit: habitData }
        )
            .then(response => {
                fetchHabits();

                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response);
            })
    }


    useEffect(() => {
        fetchHabits();
    }, []);
    useEffect(() => {
        console.log('Boolean value:', bool); // Log the boolean value whenever it changes
    }, [bool]);

    const fetchHabits = () => {/// Need to make this dynamic. Now this only gives userid 2 data. if anoither logged in it will not give anything
        http.get('/users/2/habits').then(response => {
            console.log(response.data);
            seGetHabs(response.data)
        })
            .catch(error => {
                console.log("Error fetching data:", error);
            })
    }

    const handleDelete = (habitId) => {
        console.log(habitId);
        http.delete(`/habits/${habitId}`).then(response => {
            console.log(response.data);
            fetchHabits();
        })
            .catch(error => {
                console.log("Error deleting habit:", error);
            })
    }

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="habit" onChange={handleHabitChange} />
                    <input placeholder='date' />
                    <input type='checkbox' onChange={handleBoolChange} />
                    <button>Submit</button>
                </form>


            </div>
            <div>
                <h1> List of habits Habits</h1>
                {getHabs.map(item => (
                    <div>

                        <h2 key={item.id}>Habit:{item.habitName}</h2>
                        <button>Edit</button>  {/* what I could do here is call back the form above <form/> or something instead of creating new forms
                        so thats its more dynamic 
                        */}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        {item.logs.map(log => (
                            <div>
                                <li key={log.id}>Completed: {log.completed}}</li>
                                <input type="checkbox" />
                                <li key={log.id}>Date: {log.date}</li>



                            </div>
                        ))}




                    </div>

                ))}
            </div>

        </div>
    )
}

export default Thome