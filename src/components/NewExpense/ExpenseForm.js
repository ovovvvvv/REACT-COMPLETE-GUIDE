import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // 세 번의 state 대신 state 한번으로 바꾸는법!
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // userInput은 useState 훅을 사용하여 초기값으로 빈 문자열을 갖는 객체를 설정한 것,
    // 이 객체는 사용자의 입력을 저장하는 데 사용된다.
    // ..을 사용하여 기존 userInput 객체를 복사하고, 변경된 제목을 포함한 새로운 객체를 생성
    // 변경된 제목을 포함한 새로운 객체는 setUserInput 함수를 호출하여 업데이트 된 후에 userInput상태에 저장된다.
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({  
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        };

     return (
     <form onSubmit= {submitHandler}>
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