import { Keyboard, View, TextInput, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../../UI/Button";
import { formatDate } from "../../util/date";


function ExpensesInput({hasId, oncancel, submit, defaultValue}) {
  const [inputValue, setInputValue] = useState({
    amount: defaultValue?  defaultValue.amount.toString() : "",
    date: defaultValue? formatDate(defaultValue.date):  "",
    description:  defaultValue? defaultValue.description : "",
  });


  const [amountValid, setIsAmountValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  function amountchangeHandler(identifier, enteredValue) {
    setInputValue((value) => {
      return {
        ...value,
        [identifier]: enteredValue,
      };
    });
  }


   function submitHandler(){
    const expenseData = {
      amount : +inputValue.amount,
      description : inputValue.description,
      date : new Date(inputValue.date),
    };

      const amountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
      const isDescriptionValid = expenseData.description.trim().length > 0;
      const isDateValid = expenseData.date.toString() !== 'Invalid Date';


       // Update validation flags based on the current input
    setIsAmountValid(amountValid);
    setIsDescriptionValid(isDescriptionValid);
    setIsDateValid(isDateValid);

      if(!amountValid || !isDescriptionValid || !isDateValid){
        Alert.alert('Invalid input', "Please enter a valid value");
        return;
      }

      submit(expenseData);
   }
  return (
    <View>
      <Input
        children="Description"
        inputConfig={{
          autoCorrect: false,
          multiline: true,
          onChangeText: amountchangeHandler.bind(this, "description"),
          value: inputValue.description,
        }}
        invalid= {!isDescriptionValid}
      />
      <Input
        children="Amount"
        invalid={!amountValid}
        inputConfig={{
          maxLength: 10,
          onChangeText: amountchangeHandler.bind(this, "amount"),
          value: inputValue.amount,
          keyboardType: "number-pad",
        }}
      />
      <Input
        children="Date"
        invalid={!isDateValid}
        inputConfig={{
          KeyboardType: "default",
          placeholder: 'YYYY-MM-DD',
          onChangeText: amountchangeHandler.bind(this, "date"),
          value: inputValue.date,
        }}
      />

      <View style={styles.button}>
        <Button style={styles.buttons} onPress={oncancel}>
          Cancel
        </Button>
        <Button style={styles.buttons} onPress={submitHandler}>
          {hasId}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttons:{
    minWidth: 120,
    marginHorizontal: 12,
  },
});
export default ExpensesInput;
