import { View, Text, FlatList } from "react-native";

 function renderExpensesItem(itemData){
   return(
    <Text>{itemData.item.description}</Text>
   )
 }

function ExpensesList({expenses}){
    return(
      <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderExpensesItem} />
    )
}

export default ExpensesList;