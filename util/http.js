
import axios from "axios";

export function storeExpenses(expenseData){
    axios.post("https://reactnative-expense-app-default-rtdb.firebaseio.com/expenses.json", expenseData);
}


export async function fetchExpenses(){
  const response = await  axios.get("https://reactnative-expense-app-default-rtdb.firebaseio.com/expenses.json");


    const expenses = [ ];


    for(const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            description : response.data[key].description,
            date : new Date(response.data[key].date),
        };

        expenses.push(expenseObj);
    }

     return expenses;
}