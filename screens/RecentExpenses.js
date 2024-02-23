import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-contextAPI";
import { getDate } from "../util/date";
import { fetchExpenses } from "../util/http";
import OverLoading from "../util/OverLoading";

function RecentExpenses() {

   const [isfetching, setFetching] =  useState([true]);
   const expenseContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setFetching(true);
      const expenses = await fetchExpenses();
      setFetching(false);
           expenseContext.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  
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
