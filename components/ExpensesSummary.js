import { View, Text,StyleSheet } from "react-native";

function ExpensesSummary({ expenses, periodName }) {


  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  
  return (
    <View style = {styles.conatiner}>
      <Text style = {styles.period}>{periodName}</Text>
      <Text style = {styles.sum}> ${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

 const styles = StyleSheet.create({
  conatiner:{
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#e4d9fd',
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 10
  },
   period: {
    fontSize: 18,
    color: 'maroon',
    fontWeight: 'bold'
   },
   sum:{
    fontSize: 20,
    color: 'maroon',
    fontWeight: 'bold'
   }
 })

export default ExpensesSummary;
