import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
   const expenses = props.expenses;
   const [filter, setFilter] = useState('2019');

   const setFilterHandler = (yearFilter) => {
      setFilter(yearFilter);
   };

   const expensesContent = expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filter;
   });

   return (
      <Card className="expenses">
         <ExpensesFilter selected={filter} onSetFilter={setFilterHandler} />
         <ExpensesList expenses={expensesContent} />
      </Card>
   );
};

export default Expenses;
