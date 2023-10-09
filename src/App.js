import React, {useState} from 'react';

import NewExpense from './component/NewExpense/NewExpense';
import Expanse from './component/Expanse/Expanse';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    expanseItem: 'Expanse Item',
    title: 'Food',
    amount: 1000,
    date: new Date(2022, 2, 15),
    LocationOfExpenditure: 'Location:- Restaurant Fifty Five East',
  },
  {
    id: 'e2',
    expanseItem: 'Expanse Item',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
    LocationOfExpenditure: 'Location:- Allahabad',
  },
  {
    id: 'e3',
    expanseItem: 'Expanse Item',
    title: 'Toilet Paper',
    amount: 999,
    date: new Date(2022, 4, 4),
    LocationOfExpenditure: 'Location:- Bhadohi',
  },
  {
    id: 'e4',
    expanseItem: 'Expanse Item',
    title: 'Car Insurance',
    amount: 5000,
    date: new Date(2022, 9, 11),
    LocationOfExpenditure: 'Location:- Suriyawan',
  },
  {
    id: 'e5',
    expanseItem: 'Expanse Item',
    title: 'New TV',
    amount: 4000,
    date: new Date(2022, 6, 10),
    LocationOfExpenditure: 'Location:- Varanasi',
    expanseAmount: 'Expanse of Amount',
  },
  {
    id: 'e6',
    expanseItem: 'Expanse Item',
    title: 'Movie',
    amount: 700,
    date: new Date(2021, 8, 1),
    LocationOfExpenditure: 'Location:- Lucknow',
  },
  
];

// arrow functioms
const App = () =>{
  const [expanses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = expense =>{
  setExpenses((prevExpnses) =>{
    return [expense, ...prevExpnses]
  });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expanse, {items: expanses})
  // );

  return (
    <>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expanse items={expanses} />
      </div>
    </>
  );


 }

export default App;
