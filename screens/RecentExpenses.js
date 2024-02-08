import {Text }from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput.js/ExpensesOutput'
 
 

 
function RecentExpenses(){
   return(
      <ExpensesOutput periodName= "Last 7 days "/>
   )
}

 export default RecentExpenses;