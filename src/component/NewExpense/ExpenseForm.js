import React from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleChangeHandler = (event) =>{
        console.log(event.target.value);
    };
    return (
        <form>
            <div className="new_expense_controls">
                <div className="new_expense_control">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new_expense_control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new_expense_control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2000-01-01" max="2027-12-31" />
                </div>
            </div>
            <div className="new_expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;