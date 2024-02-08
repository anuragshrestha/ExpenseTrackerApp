import { FlatList, View, Text } from "react-native";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";



 const DUMMY_EXPENSES = [{

    id: 'e1',
    description: 'A pair of shoes',
    amount : 89.29,
    date : new Date('2022-01-05')
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
 }
 
]

 function ExpensesOutput({expenses, periodName }){
    return(
        <View>
         <ExpensesSummary  expenses = {DUMMY_EXPENSES}  periodName={periodName}/>
         <ExpensesList expenses =  {DUMMY_EXPENSES}/>   
        </View>
    )
 }

 export default ExpensesOutput;