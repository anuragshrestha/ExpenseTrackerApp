import { createContext, useReducer } from "react";


export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description,amount, date }) => {},
});

function expensesReducer( state, action ) {
  switch (action.type) {

 
    case "ADD":
        const id = new Date().toString() + Math.random().toString();
        return [{...action.payload, id: id}, ...state]
    case "SET" : 
    return action.payload;    
    case "UPDATE":
        const expenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
        const expenseItem = state[expenseIndex];
        const updatedItem = {...expenseItem, ...action.payload.data};
        const updatedExpense = [...state];
        updatedExpense[expenseIndex] = updatedItem;
        return updatedExpense;
    case "DELETE":
        return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  } 
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData){
    dispatch({type: 'ADD', payload : expenseData})
  }

   function setExpenses(expenses){
    dispatch({type : 'SET', payload: expenses});
   }

   function updateExpenses(id, expenseData){
    dispatch({type : 'UPDATE', payload : {id : id, data : expenseData}});
   }

   function deleteExpenses(id){
    dispatch({type: 'DELETE', payload: id});
   }

    const value = {
        expenses : expensesState,
        addExpense : addExpense,
        setExpenses: setExpenses,
        updateExpense: updateExpenses,
        deleteExpense: deleteExpenses
    }
    
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
