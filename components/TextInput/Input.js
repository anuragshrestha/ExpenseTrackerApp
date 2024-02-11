import { TextInput, View, Text, StyleSheet } from "react-native";

 function Input({children, inputConfig}){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{children}</Text>
            <TextInput style = {styles.textInput} {...inputConfig}/>
        </View>
    )
 }

  
const styles = StyleSheet.create({
    container:{
        marginHorizontal: 2,
        marginVertical: 10,
    },
    text:{
        fontSize: 17,
        color :'white',
        fontWeight: 'bold',
        marginBottom: 4,
        minWidth: 250,
        
    },
    textInput:{
        borderRadius: 8,
        backgroundColor: '#c6affc',
        fontSize: 18,
        color: '#2d0689',
        padding: 6,

    }
})

  export default Input;