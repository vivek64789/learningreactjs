import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from '../../UI/Card/Card';

const ExpenseItem = (props)  => {
    // const [title, setTitle] = useState(props.expense.title);

    return (
        <Card className="expense-item">
            <ExpenseDate expense = {props.expense}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">$ {props.expense.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;
