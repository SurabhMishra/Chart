import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import './Expanse.css';

const Expanse = (props) => {
    // filter
    const [filterYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <>
            <div className="expanses">
                <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses}/>
            </div>
        </>
    );
}
export default Expanse;