import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id:'e1',
      title: 'Bike Insurance',
      amount: 95.34,
      date: new Date(2021,12,12),
    },
    {
      id:'e2',
      title: 'Book',
      amount: 25.34,
      date: new Date(2021,10,22),
    },
    {
      id:'e3',
      title: 'Car Insurance',
      amount: 295.34,
      date: new Date(2021,5,9),
    },
    {
      id:'e4',
      title: 'Subscription',
      amount: 295.34,
      date: new Date(2021,4,3),
    },
  ]
  return (
    <div>
        <ExpenseItem expense = {expenses[0]}></ExpenseItem>
        <ExpenseItem expense = {expenses[1]}></ExpenseItem>
        <ExpenseItem expense = {expenses[2]}></ExpenseItem>
        <ExpenseItem expense = {expenses[3]}></ExpenseItem>
    </div>
  );
}

export default App;
