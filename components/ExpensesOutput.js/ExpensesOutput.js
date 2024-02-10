import { FlatList, View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";



 
 


 function ExpensesOutput({expenses, periodName }){
    return(
        <View style = {styles.conatiner}>
         <ExpensesSummary  expenses = {expenses}  periodName={periodName}/>
         <ExpensesList expenses =  {expenses}/>   
        </View>
    )
 }

 const styles = StyleSheet.create({
   conatiner:{
      flex: 1,
      backgroundColor: 'white',

   }
 })
 export default ExpensesOutput;