import ExpanseItem from './ExpanseItem';
import './Expanse.css';
import React from 'react';

 const Expanse=(props) =>{

    return (
        <>
            <div className="expanses">
                <ExpanseItem expanseItem={props.items[0].expanseItem}
                    title={props.items[0].title}
                    date={props.items[0].date}
                    LocationOfExpenditure={props.items[0].LocationOfExpenditure}
                    amount={props.items[0].amount}
                />
                <ExpanseItem expanseItem={props.items[2].expanseItem}
                    title={props.items[2].title}
                    date={props.items[2].date}
                    LocationOfExpenditure={props.items[2].LocationOfExpenditure}
                    amount={props.items[2].amount}
                />
                <ExpanseItem expanseItem={props.items[2].expanseItem}
                    title={props.items[2].title}
                    date={props.items[2].date}
                    LocationOfExpenditure={props.items[2].LocationOfExpenditure}
                    amount={props.items[2].amount}
                />
                <ExpanseItem expanseItem={props.items[3].expanseItem}
                    title={props.items[3].title}
                    date={props.items[3].date}
                    LocationOfExpenditure={props.items[3].LocationOfExpenditure}
                    amount={props.items[3].amount}
                />
                <ExpanseItem expanseItem={props.items[4].expanseItem}
                    title={props.items[4].title}
                    date={props.items[4].date}
                    LocationOfExpenditure={props.items[4].LocationOfExpenditure}
                    amount={props.items[4].amount}
                />
                <ExpanseItem expanseItem={props.items[5].expanseItem}
                    title={props.items[5].title}
                    date={props.items[5].date}
                    LocationOfExpenditure={props.items[5].LocationOfExpenditure}
                    amount={props.items[5].amount}
                />
            </div>
        </>

    );
}
export default Expanse;