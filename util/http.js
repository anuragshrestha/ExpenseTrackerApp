
import axios from "axios";

export function storeExpenses(expenseData){
    axios.post("https://reactnative-expense-app-default-rtdb.firebaseio.com/expenses.json", expenseData);
}


export async function fetchExpenses(){
  const response = await  axios.get("https://reactnative-expense-app-default-rtdb.firebaseio.com/expenses.json");

}