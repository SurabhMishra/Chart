import React from 'react';
import Expanse from './component/Expanse/Expanse';

// arrow functioms
const App = () =>{

  const expanses = [
    {
      id: 'e1',
      expanseItem: 'Expanse Item',
      title: 'Food',
      amount: 1000,
      date: new Date(2023, 2, 15),
      LocationOfExpenditure: 'Location:- Restaurant Fifty Five East',
    },
    {
      id: 'e2',
      expanseItem: 'Expanse Item',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 5, 12),
      LocationOfExpenditure: 'Location:- Allahabad',
    },
    {
      id: 'e3',
      expanseItem: 'Expanse Item',
      title: 'Toilet Paper',
      amount: 999,
      date: new Date(2023, 4, 4),
      LocationOfExpenditure: 'Location:- Bhadohi',
    },
    {
      id: 'e3',
      expanseItem: 'Expanse Item',
      title: 'Car Insurance',
      amount: 5000,
      date: new Date(2023, 9, 11),
      LocationOfExpenditure: 'Location:- Suriyawan',
    },
    {
      id: 'e4',
      expanseItem: 'Expanse Item',
      title: 'New TV',
      amount: 4000,
      date: new Date(2023, 6, 6),
      LocationOfExpenditure: 'Location:- Varanasi',
      expanseAmount: 'Expanse of Amount',
    },
    {
      id: 'e5',
      expanseItem: 'Expanse Item',
      title: 'Movie',
      amount: 700,
      date: new Date(2023, 8, 15),
      LocationOfExpenditure: 'Location:- Lucknow',
    },
    {
      id: 'e6',
      expanseItem: 'Expanse Item',
      title: 'Food',
      amount: 1000,
      date: new Date(2023, 7, 7),
      LocationOfExpenditure: 'Location:- Noida',
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expanse, {items: expanses})
  // );

  return (
    <>
      <div>
        <Expanse items={expanses} />
      </div>
    </>
  );


 }

export default App;
