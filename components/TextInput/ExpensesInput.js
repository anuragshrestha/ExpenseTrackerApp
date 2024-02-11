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
        }}
      />
      <Input
        children="Amount"
        inputConfig={{
         maxLength : 10,
          onChangeText: amountchangeHandler,
          KeyboardType: 'number-pad'
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
