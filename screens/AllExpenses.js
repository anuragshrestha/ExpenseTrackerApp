 import {Text }from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput.js/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-contextAPI';
 
 

 
 function AllExpenses(){

   const expensesContext = useContext(ExpensesContext);

    return(
     <ExpensesOutput expenses={expensesContext.expenses} periodName = "Total"  />
        )
 }

  export default AllExpenses;