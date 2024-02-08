import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import {Ionicons} from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ScreensOverView() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#3e04c3'},
      headerTintColor: 'white',
      tabBarStyle: {backgroundColor: '#3e04c3' },
      tabBarActiveTintColor: '#f7bc0c',
      headerTitleAlign: 'center'
    }}>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => (
          <Ionicons name = "hourglass" color = {color} size = {size} />
        )
      }}/>
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses' ,
        tabBarIcon: ({color, size}) => (
          <Ionicons name = "calendar" color = {color} size = {size} />
        )
      }}/>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverView" component={ScreensOverView} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="ManageExpense" component={ManageExpense} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
