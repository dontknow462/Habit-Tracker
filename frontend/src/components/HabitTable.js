import React, { useState } from 'react';

const HabitForm = () => {




const [habit, setHabit]= useState(

  {
    email: "gilbert94@example.com", 
    name: "meditation",
    date: "12-12-2025", 
    completed: "Turu"
  })




  return(
    <div>
      <input placeholder='{habit}'/>
    </div>
  )





  // const [formFields, setFormFields] = useState([
  //   {
  //     email: '',
  //     year: '',
  //     month: '',
  //     habits: [
  //       { day: '', Habitname: '', value: '' },
  //     ],
  //   },
  // ]);

  // const handleInputChange = (index, field, value) => {
  //   const updatedFormFields = [...formFields];
  //   updatedFormFields[index][field] = value;
  //   setFormFields(updatedFormFields);
  // };

  // const handleHabitInputChange = (index, habitIndex, field, value) => {
  //   const updatedFormFields = [...formFields];
  //   updatedFormFields[index].habits[habitIndex][field] = value;
  //   setFormFields(updatedFormFields);
  // };

  // const handleAddForm = () => {
  //   setFormFields([...formFields, { email: '', year: '', month: '', habits: [{ day: '', name: '', value: '' }] }]);
  // };

  // const handleRemoveForm = (index) => {
  //   const updatedFormFields = [...formFields];
  //   updatedFormFields.splice(index, 1);
  //   setFormFields(updatedFormFields);
  // };

  // const handleFormSubmit = async (e, index) => {
  //   e.preventDefault();

  //   // try {
  //   //   const response = await fetch('your-backend-endpoint', {
  //   //     method: 'POST',
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     },
  //      console.log( JSON.stringify(formFields[index]))
  //     // });

  //   //   if (response.ok) {
  //   //     // Handle successful response
  //   //     console.log('Data sent successfully');
  //   //   } else {
  //   //     // Handle error response
  //   //     console.error('Error sending data');
  //   //   }
  //   // } catch (error) {
  //   //   // Handle fetch error
  //   //   console.error('Fetch error:', error);
  //   // }
  // };

  // return (
  //   <div>
  //     {formFields.map((form, index) => (
  //       <form key={index} onSubmit={(e) => handleFormSubmit(e, index)}>
  //         <label>Email:</label>
  //         <input
  //           type="text"
  //           value={form.email}
  //           onChange={(e) => handleInputChange(index, 'email', e.target.value)}
  //         />

  //         <label>Year:</label>
  //         <input
  //           type="text"
  //           value={form.year}
  //           onChange={(e) => handleInputChange(index, 'year', e.target.value)}
  //         />

  //         <label>Month:</label>
  //         <input
  //           type="text"
  //           value={form.month}
  //           onChange={(e) => handleInputChange(index, 'month', e.target.value)}
  //         />

  //         <label>Habits:</label>
  //         {form.habits.map((habit, habitIndex) => (
  //           <div key={habitIndex}>
  //             <input
  //               type="text"
  //               placeholder={`Day ${habit.day}`}
  //               value={habit.day}
  //               onChange={(e) => handleHabitInputChange(index, habitIndex, 'day', e.target.value)}
  //               />

  //             <input
  //               type="text"
  //               placeholder="Habit Name"
  //               value={habit.name}
  //               onChange={(e) => handleHabitInputChange(index, habitIndex, 'name', e.target.value)}
  //             />

  //             <input
  //               type="text"
  //               placeholder="Habit Value"
  //               value={habit.value}
  //               onChange={(e) => handleHabitInputChange(index, habitIndex, 'value', e.target.value)}
  //             />
  //           </div>
  //         ))}

  //         <button type="submit">Submit Form {index + 1}</button>
  //         <button type="button" onClick={() => handleRemoveForm(index)}>
  //           Remove Form {index + 1}
  //         </button>
  //       </form>
  //     ))}

  //     <button type="button" onClick={handleAddForm}>
  //       Add Form
  //     </button>
  //   </div>
  // );
};

export default HabitForm;
