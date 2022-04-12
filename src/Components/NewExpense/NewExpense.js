import react, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
import ErrorModal from "./ErrorModal";
const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)
    const [error, setError] = useState(false)
    const errorMessage = "All values must be filled out."

    const showFormHandler = () => {
        console.log("im clicked")
        showForm == false ? setShowForm(true) : setShowForm(false);
        //console.log(showForm)
    }

    const errorHandler = () => {
        console.log("Handle error")
        error == false ? setError(true) : setError(false);
    }

    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return <div className="new-expense">
        {error && <ErrorModal handleError={errorHandler} title="Error" message={errorMessage}/> }
        {showForm ?
        <ExpenseForm handleError = {errorHandler} changeShowForm={showFormHandler} onSaveExpenseData={saveExpenseDataHandler}/> :
        <div>
            <button type="button" onClick={showFormHandler}>New Expense</button>
        </div> }
    </div>

}

export default NewExpense;