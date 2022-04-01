import react, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)
    const showFormHandler = () => {
        console.log("im clicked")
        showForm == false ? setShowForm(true) : setShowForm(false);
        //console.log(showForm)
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return <div className="new-expense">
        {showForm ?
        <ExpenseForm changeShowForm={showFormHandler} onSaveExpenseData={saveExpenseDataHandler}/> :
        <div>
            <button type="button" onClick={showFormHandler}>New Expense</button>
        </div> }
    </div>

}

export default NewExpense;