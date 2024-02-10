import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [{

    id: 'e1',
    description: 'A pair of shoes',
    amount : 89.29,
    date : new Date('2024-02-08')
 },
 {
    id: 'e2',
    description: 'A pair of bags',
    amount : 80.22,
    date : new Date('2022-02-05')
 },
 {
    id: 'e3',
    description: 'A pair of shocks',
    amount : 78.23,
    date : new Date('2022-01-07')
 },
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description,amount, date }) => {},
});

function expensesReducer( state, action ) {
  switch (action.type) {

 
    case "ADD":
        const id = new Date().toString() + Math.random().toString();
        return [{...action.payload, id: id}, ...state]
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData){
    dispatch({type: 'ADD', payload : expenseData})
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
        updateExpense: updateExpenses,
        deleteExpense: deleteExpenses
    }
    
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
