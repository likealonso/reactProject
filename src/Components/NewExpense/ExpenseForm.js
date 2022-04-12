import React, { useState, useReducer, useEffect } from "react";
import "./ExpenseForm.css";
import Button from "./Button";
//import { useReducer } from "react/cjs/react.production.min";

const titleReducer = (state, action) => {
  if (action.type === "TITLE_INPUT") {
    return {value: action.val, isValid: action.val.trim().length > 0}
  }
  return {value: "", isValid: null}
}

const amountReducer = (state, action) => {
  if (action.type === "AMOUNT_INPUT") {
    return {value: action.val, isValid: action.val.trim().length > 0}
  }
  return {value: "", isValid: null}
}

const dateReducer = (state, action) => {
  if (action.type === "DATE_INPUT") {
    return {value: action.val, isValid: action.val.trim().length > 0}
  }
  return {value: "", isValid: null}
}

const ExpenseForm = (props) => {
  
  const [enteredTitle, dispatchTitle] = useReducer(titleReducer, {value: "", isValid: null});
  const [enteredAmount, dispatchAmount] = useReducer(amountReducer, {value: "", isValid: null});
  const [enteredDate, dispatchDate] = useReducer(dateReducer, {value: "", isValid: null});
  const [formIsValid, setFormIsValid] = useState(false);
  console.log(enteredTitle.value)
  console.log(enteredAmount.value)
  console.log(enteredDate.value)

  const {isValid : titleIsValid} = enteredTitle;
  const {isValid : amountIsVaid} = enteredAmount;
  const {isValid : dateIsValid} = enteredDate;

  useEffect( () => {
    setFormIsValid(titleIsValid && amountIsVaid && dateIsValid)
  }, [titleIsValid, amountIsVaid, dateIsValid])


  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);
    dispatchTitle({type: "TITLE_INPUT", val: event.target.value})
  };
  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);\
    dispatchAmount({type: "AMOUNT_INPUT", val: event.target.value})
  };

  const dateChangeHandler = (event) => {
    dispatchDate({type: "DATE_INPUT", val: event.target.value})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle.value,
      amount: +enteredAmount.value,
      date: new Date(enteredDate.value),
    };
    // if (enteredTitle.isValid && enteredAmount.isValid && enteredDate.isValid){
      props.onSaveExpenseData(expenseData);

    // } 
    // else {
    //   props.handleError();
    // }
  //  console.log(expenseData)
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle.value}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount.value}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate.value}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.changeShowForm}>
          Cancel
        </button>
        <Button type="submit" disabled={!formIsValid}>Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
