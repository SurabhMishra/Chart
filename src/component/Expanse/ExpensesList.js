import React from "react";

import ExpanseItem from './ExpanseItem';
import './ExpensesList.css';



const ExpensesList = props =>{
    
    if(props.items.length === 0){
        return <h2 className="expenses_list_fallback">Found no expenses</h2>;
    }

    return (
        <ul className="expenses_list">
    {props.items.map((expense) => (
            <ExpanseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>
    );
};




export default ExpensesList;