import React from 'react';
import NewExpenseForm from '../NewExpenseForm/NewExpenseForm';

const NewExpense = (props)=>{
    
    return (
        <div className='container shadow card m-auto bg-dark p-5'>
            <NewExpenseForm onSavedNewExpenseData= {props.onSavedNewExpenseData}></NewExpenseForm>
        </div>
    )
}

export default NewExpense;