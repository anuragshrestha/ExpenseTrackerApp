import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-contextAPI";
import { getDate } from "../util/date";
import { fetchExpenses } from "../util/http";
import OverLoading from "../util/OverLoading";
import ErrorLoading from "../util/ErrorOverLay";

function RecentExpenses() {

   const [isfetching, setFetching] =  useState([true]);
   const[error, setError] = useState();
   const expenseContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setFetching(true);
      try{
        const expenses = await fetchExpenses();
        expenseContext.setExpenses(expenses);
      }catch(error){
        setError('Could not fetch Expenses.')
      }
     
      setFetching(false);
          
    }
    getExpenses();
  }, []);

   function errorHandling(){
    setError(null);
   }

  if(error && !isfetching){
    <ErrorLoading message={error}  onConfirm = {errorHandling}  />
  }
   if(isfetching){
    return <OverLoading/>
   }
  const recentExpenses = expenseContext.expenses.filter((expense) => {
    const today = new Date();
    const sevenDays = getDate(today, 7);

    return expense.date >= sevenDays && expense.date <= today;
  });
  return <ExpensesOutput expenses={recentExpenses} periodName="Last 7 days " />;
}

export default RecentExpenses;
