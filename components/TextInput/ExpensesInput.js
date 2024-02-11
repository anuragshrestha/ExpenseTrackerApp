import { Keyboard, View ,TextInput} from "react-native";
import Input from "./Input";

function ExpensesInput() {
  function amountchangeHandler() {}
  return (
    <View>
      <Input
        children="Description"
        inputConfig={{
          autoCorrect :  false,
          multiline: true,
        }}
      />
      <Input
        children="Amount"
        inputConfig={{
         maxLength : 10,
          onChangeText: amountchangeHandler,
          keyboardType: 'number-pad'
        }}
      />
      <Input children="Date" inputConfig={{
        KeyboardType: 'default',
        onChangeText: () => {}
      }}/>
    </View>
  );
}

export default ExpensesInput;
