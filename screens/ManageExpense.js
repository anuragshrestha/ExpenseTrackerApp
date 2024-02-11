import { useContext, useLayoutEffect } from 'react';
import {Text, View , StyleSheet}from 'react-native'
 import IconButton from '../UI/IconButton'
import Button from '../UI/Button';
import { ExpensesContext } from '../store/expenses-contextAPI';
import ExpensesInput from '../components/TextInput/ExpensesInput';
 

 
function ManageExpense({route, navigation}){

    const editExpense = route.params?.expensesId;
    const hasId = !!editExpense;
     const expenseContext = useContext(ExpensesContext);

      useLayoutEffect(() => {
        navigation.setOptions({
            title: hasId? 'Edit Expense' : 'Add Expense',
        });
      }, [navigation, hasId]);

      function deleteExpensehandler(){
        expenseContext.deleteExpense(editExpense);
        navigation.goBack();
      }

      function cancelExpenseHandler(){
         navigation.goBack();
      }

      function editExpenseHandler(){

        if(hasId){
          expenseContext.updateExpense(editExpense, {
            description: 'test',
            amount: 29.3,
            date: new Date('2024-02-8')
          });
        } else{
          expenseContext.addExpense({
            description: 'hello',
            amount: 33.3,
            date: new Date('2024-02-9')
          })
        }

         navigation.goBack();
       
      }


   return(
        <View style = {styles.container}>
          <ExpensesInput/>
          <View style = {styles.button}>
          <Button  style = {styles.buttons}   onPress={cancelExpenseHandler}>
             Cancel
            </Button>
          <Button style ={styles.buttons}  onPress={editExpenseHandler} >
           {hasId? 'Update' : 'Add'}
            </Button>

          </View>
          {hasId && (
            <View style = {styles.deletecontainer}>
              <IconButton icon='trash' color= "maroon" size = {30} onPress={deleteExpensehandler}   />
              </View>
          )}
        </View>
   )
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      padding: 24,
      backgroundColor: "#2d0689",
      
    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    buttons:{
      minWidth: 120,
      marginHorizontal: 12,
    },
     deletecontainer:{
      marginTop: 2,
      marginBottom: 5,
      paddingTop: 10,
      borderTopWidth: 3,
      minWidth: 300,
      borderTopColor: "black",
      alignItems : 'center'
     }
  })

 export default ManageExpense;