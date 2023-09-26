import './ExpanseDate.css';
import React from 'react';

 const ExpanseDate =(props) =>{
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
        <>
            <div className="expanse_date">
                <div className="expanse_date_month">{month}</div>
                <div className="expanse_date_year">{year}</div>
                <div className="expanse_date_day">{day}</div>
            </div>
        </>

    );
}
export default ExpanseDate;