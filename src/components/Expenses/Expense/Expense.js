import React, { useState } from 'react';
import './Expense.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';
import NewExpense from '../NewExpense/NewExpense';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseChart from '../ExpenseChart/ExpenseChart';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Bike Insurance',
    amount: 95.34,
    date: new Date(2021, 12, 12),
  },
  {
    id: 'e2',
    title: 'Book',
    amount: 25.34,
    date: new Date(2021, 10, 22),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 295.34,
    date: new Date(2021, 5, 9),
  },
  {
    id: 'e4',
    title: 'Subscription',
    amount: 295.34,
    date: new Date(2021, 4, 3),
  },
]

const Expense = () => {
  const [expenses, setexpenses] = useState(INITIAL_EXPENSES);

  const onSavedNewExpenseDataHandler = (userData) => {
    const submittedData = {
      ...userData,
      id: new Date(),
    }

    setexpenses(prevExpenses => {
      return [submittedData, ...prevExpenses];
    })

  }

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let validatedExpense = <div className='d-flex justify-content-center'><p className='text-white'>No Data Found</p></div>;

  if(filteredExpenses.length > 0){
    validatedExpense = filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />);
  }

  return (
    <div>
      <NewExpense onSavedNewExpenseData={onSavedNewExpenseDataHandler}></NewExpense>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}/>
        {validatedExpense}

      </Card>
    </div>
  );
}

export default Expense;