import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let initialExpenses = [
   {
      id: 'ie',
      title: 'Alquiler',
      amount: 62224.67,
      date: new Date(2022, 9, 10),
   },
   {
      id: 'a9',
      title: 'Expensas',
      amount: 5245.3,
      date: new Date(2021, 9, 15),
   },
   {
      id: '0g',
      title: 'Gas Natural',
      amount: 1345.9,
      date: new Date(2022, 9, 11),
   },
   {
      id: 'k3',
      title: 'Obra Social',
      amount: 78345.9,
      date: new Date(2022, 9, 12),
   },
];

const App = () => {
   const [expenses, setExpenses] = useState(initialExpenses);

   const addExpensehandler = (newExpense) => {
      setExpenses((prevState) => {
         return [newExpense, ...prevState];
      });
   };

   return (
      <div className="App">
         <NewExpense onAddExpense={addExpensehandler} />
         <Expenses expenses={expenses} />
      </div>
   );
};

export default App;
