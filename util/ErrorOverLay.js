import { View, StyleSheet,Text} from "react-native";


 function ErrorLoading({message}){
    return(
        <View style = {styles.conatiner}>
           <Text>An Error occured!</Text>
           <Text>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})

 export default ErrorLoading;