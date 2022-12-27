import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
   const [formInput, setFormInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
   });

   const titleHandler = (event) => {
      setFormInput((prevState) => {
         return { ...prevState, enteredTitle: event.target.value };
      });
   };

   const amountHandler = (event) => {
      setFormInput((prevState) => {
         return { ...prevState, enteredAmount: event.target.value };
      });
   };

   const dateHandler = (event) => {
      setFormInput((prevState) => {
         return { ...prevState, enteredDate: event.target.value };
      });
   };

   const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
         title: formInput.enteredTitle,
         amount: Number(formInput.enteredAmount),
         date: new Date(formInput.enteredDate),
      };

      props.onSaveExpenseData(expenseData);

      setFormInput({
         enteredTitle: '',
         enteredAmount: '',
         enteredDate: '',
      });
   };

   const cancelButtonHandler = () => {
      setFormInput({
         enteredTitle: '',
         enteredAmount: '',
         enteredDate: '',
      });
      props.onSwitchDisplay();
   };

   return (
      <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input
                  type="text"
                  value={formInput.enteredTitle}
                  onChange={titleHandler}
               />
            </div>
         </div>

         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Amount</label>
               <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={formInput.enteredAmount}
                  onChange={amountHandler}
               />
            </div>
         </div>

         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Date</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  value={formInput.enteredDate}
                  onChange={dateHandler}
               />
            </div>
         </div>

         <div className="new-expense__actions">
            <button type="reset" onClick={cancelButtonHandler}>
               Cancel
            </button>
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
};

export default ExpenseForm;
