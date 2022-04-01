import react, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [selectedYear, setselectedYear] = useState('');
    const yearChangeHandler = (theYear) => {
        console.log("we are calling this")
        console.log(theYear)
        setselectedYear(theYear);
    }
    const exps = !selectedYear ? props.expenses : props.expenses.filter(item => item.date.getFullYear() == selectedYear)
    return(
        <div className='expenses'>
            
            <ExpenseFilter year={yearChangeHandler}/> 
            
                <ExpensesList expenses={exps} />
            
        </div>
    )


}

export default Expenses