
import React from 'react';
import ExpanseDate from './ExpanseDate';
import './ExpanseItem.css';

const ExpanseItem = (props) => {
 // Change Title
    // const [title, setTitle] = useState(props.title);
    // console.log('ExpanseItem evaluated by React');
    // const clickHandler = () => {
    //     setTitle('Update');
    //     console.log(title);
    // }

// ************************************************************
    

    // Delete Expanse Item
    const handleDeleteClick = () => {
        // Perform the deletion logic here, remove the item from the DOM
        const itemToDelete = document.querySelector('.expanse_item');
        if (itemToDelete) {
            itemToDelete.remove();
        }
    };

    return (
        <li>
            <div className="expanse_item">
            <div>{props.expanseItem}</div>
            <ExpanseDate date={props.date} />
            <div className="expanse_item_discription">
                <h2>{props.title}</h2>
                <div className="expanse_item_price">{props.LocationOfExpenditure}</div>
                <div className="expanse_item_price">Rs {props.amount}</div>
            </div>
            {/* <button onClick = {clickHandler}>Change Title</button> */}
            <button onClick = {handleDeleteClick}>Delete Expense</button>
        </div>
        </li>
    );
}

export default ExpanseItem;