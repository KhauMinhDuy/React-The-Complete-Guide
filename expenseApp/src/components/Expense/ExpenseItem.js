import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import {useState} from "react";

const ExpenseItem = ({expense}) => {

    const [title, setTitle] = useState(expense.title);

    const clickHandler = () => {
        setTitle("Updated");
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={expense.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${expense.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title
                </button>
            </Card>
        </li>
    );
};

export default ExpenseItem;
