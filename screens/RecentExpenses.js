import {Text }from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput.js/ExpensesOutput'
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-contextAPI';
import { getDate } from '../util/date';
 
 

 
function RecentExpenses(){


   const expenseContext = useContext(ExpensesContext);
   const recentExpenses = expenseContext.expenses.filter((expense) => {
     const today =  new Date();
     const sevenDays = getDate(today, 7);

     return (expense.date >= sevenDays) && (expense.date() <= today);
   })
   return(
      <ExpensesOutput expenses={recentExpenses} periodName= "Last 7 days "/>
   )
}

 export default RecentExpenses;