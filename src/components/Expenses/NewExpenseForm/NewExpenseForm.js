import React, { useState } from 'react';

const NewExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState(0.0);
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setuserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    // Another Approach of using useState

    const changeTitleHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // new approach
        // although this is another approach, it have problem regarding scheduling the state so function method is preffered.
        // setuserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // Another new approach which is efficient.
        setuserInput((prevState) => {
            // this ... spread operator will extract out all the element of the array and then override next parameter
            return { ...prevState, enteredTitle: event.target.value }
        })
    }
    const changeAmountHandler = (event) => {
        // setEnteredAmount(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        setuserInput((prevState) => {
            // this ... spread operator will extract out all the element of the array and then override next parameter
            return { ...prevState, enteredAmount: event.target.value }
        })
    }
    const changeDateHandler = (event) => {
        // setEnteredDate(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        setuserInput((prevState) => {
            // this ... spread operator will extract out all the element of the array and then override next parameter
            return { ...prevState, enteredDate: event.target.value }
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const userInputData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        }
        console.log(userInputData);
        props.onSavedNewExpenseData(userInputData);
        setuserInput(()=>{
            return {
                enteredAmount:'',
                enteredTitle:'',
                enteredDate:'',
            }
        });

    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control bg-dark text-white" placeholder="Title" aria-label="Title" onChange={changeTitleHandler} value={userInput.enteredTitle} />
                    </div>
                    <div className="col">
                        <input type="number" min={0.01} step={0.01} className="form-control bg-dark text-white" placeholder="Amount" aria-label="Amount" onChange={changeAmountHandler} value={userInput.enteredAmount} />
                    </div>
                    <div className="col">
                        <input type="date" min="2019-01-01" max="2022-12-31" className="form-control bg-dark text-white" placeholder="Date" aria-label="Date" onChange={changeDateHandler} value={userInput.enteredDate} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">

                    <button type="submit" className="btn btn-success mt-3 px-5 text-white">Add</button>
                </div>

            </form>
        </div>
    )
}

export default NewExpenseForm;