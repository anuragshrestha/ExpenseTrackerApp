import { Keyboard, View ,TextInput} from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpensesInput() {

 const[inputValue, setInputValue] = useState({
  amount : '',
  date: '',
  description: ''
 })

  function amountchangeHandler(identifier, enteredValue) {
    
    setInputValue((value) => {
      return{
        ...value, 
        [identifier] : enteredValue
      };
    });


  }
  return (
    <View>
      <Input
        children="Description"
        inputConfig={{
          autoCorrect :  false,
          multiline: true,
          onChangeText: amountchangeHandler.bind(this,'description'),
          value : inputValue.description,
        }}
      />
      <Input
        children="Amount"
        inputConfig={{
         maxLength : 10,
          onChangeText: amountchangeHandler.bind(this,'amount'),
          value : inputValue.amount,
          keyboardType: 'number-pad',
        
        }}
      />
      <Input children="Date" inputConfig={{
        KeyboardType: 'default',
        onChangeText: amountchangeHandler.bind(this,'date'),
        value : inputValue.date,
      }}/>
    </View>
  );
}

export default ExpensesInput;
