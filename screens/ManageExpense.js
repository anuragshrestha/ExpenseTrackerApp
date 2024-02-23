import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { ExpensesContext } from "../store/expenses-contextAPI";
import ExpensesInput from "../components/TextInput/ExpensesInput";
import { deleteExpenses, storeExpenses, updateExepnses } from "../util/http";

function ManageExpense({ route, navigation }) {
  const editExpense = route.params?.expensesId;
  const hasId = !!editExpense;
  const expenseContext = useContext(ExpensesContext);

  const selectedMeal = expenseContext.expenses.find(
    (expense) => expense.id === editExpense
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: hasId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, hasId]);

  async function deleteExpensehandler() {
    expenseContext.deleteExpense(editExpense);
    await deleteExpenses(editExpense);
    navigation.goBack();
  }

  function cancelExpenseHandler() {
    navigation.goBack();
  }

  async function editExpenseHandler(expenseData) {
    if (hasId) {
      expenseContext.updateExpense(editExpense, expenseData);
      await updateExepnses(editExpense, expenseData);
    } else {
      const id = await storeExpenses(expenseData);
      expenseContext.addExpense({ ...expenseData, id: id });
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpensesInput
        hasId={hasId ? "Update" : "Add"}
        oncancel={cancelExpenseHandler}
        submit={editExpenseHandler}
        defaultValue={selectedMeal}
      />

      {hasId && (
        <View style={styles.deletecontainer}>
          <IconButton
            icon="trash"
            color="maroon"
            size={30}
            onPress={deleteExpensehandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#2d0689",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttons: {
    minWidth: 120,
    marginHorizontal: 12,
  },
  deletecontainer: {
    marginTop: 2,
    marginBottom: 5,
    paddingTop: 10,
    borderTopWidth: 3,
    minWidth: 300,
    borderTopColor: "black",
    alignItems: "center",
  },
});

export default ManageExpense;
