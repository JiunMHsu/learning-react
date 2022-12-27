import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
   const [displayForm, setDisplayForm] = useState(false);

   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
      switchDisplayHandler();
   };

   const switchDisplayHandler = () => {
      setDisplayForm(!displayForm);
   };

   return (
      <div className="new-expense">
         {displayForm ? (
            <ExpenseForm
               onSaveExpenseData={saveExpenseDataHandler}
               onSwitchDisplay={switchDisplayHandler}
            />
         ) : (
            <button onClick={switchDisplayHandler}>Add New Expense</button>
         )}
      </div>
   );
};

export default NewExpense;
