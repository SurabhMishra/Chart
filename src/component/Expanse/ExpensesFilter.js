import React from "react";

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeFilter = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expense_filter">
            <div className="expense_filter_control">
              <label htmlFor="">Filter by year</label>
              <select  value={props.selected} omChange={dropdownChangeFilter}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
        </div>
    );
};
export default ExpensesFilter;