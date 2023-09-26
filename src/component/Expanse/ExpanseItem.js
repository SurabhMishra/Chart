
import React from 'react';
import ExpanseDate from './ExpanseDate';
import './ExpanseItem.css';

 const ExpanseItem=(props) =>{
    
    return (
        <div className=" expanse_item">
            <div>{props.expanseItem}</div>
           <ExpanseDate date={props.date}/>
            <div className="expanse_item_discription">
                <h2>{props.title}</h2>
                <div className="expanse_item_price">{props.LocationOfExpenditure}</div>
                <div className="expanse_item_price">Rs {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpanseItem;