import { Pressable, View, StyleSheet, Text } from "react-native";
import { formatDate } from "../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpensesItem({ id, description, amount, date }) {
  function expensesPressHandler() {
    navigation.navigate('ManageExpense', {
      expensesId: id,
    });
  }

  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.press}
      onPress={expensesPressHandler}
    >
      <View style={styles.conatiner}>
        <View>
          <Text style={[styles.color, styles.description]}>{description}</Text>
          <Text style={styles.color}>{formatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.text}> ${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    opacity: 0.65,
  },

  conatiner: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "green",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "#3e04c3",
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 5 },
  },

  color: {
    color: "white",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    fontWeight: "bold",
  },
  amountContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ExpensesItem;
