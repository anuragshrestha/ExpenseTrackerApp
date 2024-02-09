import { useLayoutEffect } from 'react';
import {Text }from 'react-native'
 
 

 
function ManageExpense({route, navigation}){

    const editExpense = route.params?.expensesId;
    const hasId = !!editExpense;


      useLayoutEffect(() => {
        navigation.setOptions({
            title: hasId? 'Edit Expense' : 'Add Expense',
        });
      }, [navigation, hasId]);
   return(
       <Text>All expenses</Text>
   )
}

 export default ManageExpense;