import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = () =>{
    return(
        <div className="new_expense">
        <ExpenseForm/>
    </div>
    );
};

export default NewExpense;