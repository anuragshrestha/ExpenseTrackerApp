import axios from "axios";

export async function storeExpenses(expenseData) {
  const BACKEND_URL =
    "https://reactnative-expense-app-default-rtdb.firebaseio.com";
  const response = await axios.post(
    "https://reactnative-expense-app-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(
    "https://reactnative-expense-app-default-rtdb.firebaseiocom/expenses.json"
  );

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      date: new Date(response.data[key].date),
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export  function updateExepnses(id, expenseData) {
  return axios.put("https://reactnative-expense-app-default-rtdb.firebaseio.com" + `/expenses/${id}.json`, expenseData);
}

export  function deleteExpenses(id) {
  return axios.delete("https://reactnative-expense-app-default-rtdb.firebaseio.com" + `/expenses/${id}.json`);
}
