import { FlatList, View, Text, StyleSheet } from "react-native";
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
 },
 {
 id: 'e4',
 description: 'A pair of shoes',
 amount : 89.29,
 date : new Date('2022-01-05')
},
{
 id: 'e5',
 description: 'A pair of bags',
 amount : 80.22,
 date : new Date('2022-02-05')
},
{
 id: 'e6',
 description: 'A pair of shocks',
 amount : 78.23,
 date : new Date('2022-01-07')
},
{
id: 'e7',
description: 'A pair of shoes',
amount : 89.29,
date : new Date('2022-01-05')
},
{
id: 'e8',
description: 'A pair of bags',
amount : 80.22,
date : new Date('2022-02-05')
},
{
id: 'e9',
description: 'A pair of shocks',
amount : 78.235,
date : new Date('2022-11-07')
}
 
]

 function ExpensesOutput({expenses, periodName }){
    return(
        <View style = {styles.conatiner}>
         <ExpensesSummary  expenses = {DUMMY_EXPENSES}  periodName={periodName}/>
         <ExpensesList expenses =  {DUMMY_EXPENSES}/>   
        </View>
    )
 }

 const styles = StyleSheet.create({
   conatiner:{
      flex: 1,
      backgroundColor: '#2d0689',

   }
 })
 export default ExpensesOutput;