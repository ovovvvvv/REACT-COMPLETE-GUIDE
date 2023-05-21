import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // 세 번의 state 대신 state 한번으로 바꾸는법!
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    };
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    };
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })
    };

     return (
     <form>
         <div className='new-expense__controls'>
             <div className='new-expense__control'>
                 <label>Title</label>
                 <input type="text" onChange={titleChangeHandler} />
             </div>
             <div className='new-expense__control'>
                 <label>Amount</label>
                 <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
             </div>
             <div className='new-expense__control'>
                 <label>Date</label>
                 <input type='date' min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
         </div>
         <div className='new-expense__actions'>
             <button type='submit'>Add Expense</button>
         </div>
     </form>
     );
};

export default ExpenseForm;