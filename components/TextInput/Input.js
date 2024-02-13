import { TextInput, View, Text, StyleSheet } from "react-native";

 function Input({children,invalid, inputConfig}){

  const  textInputs = [styles.textInput]
  
if(inputConfig && inputConfig.multiline){
    textInputs.push(styles.inputMultiline);
}


    return(
        <View style = {styles.container}>
            <Text style = {[styles.text, invalid && styles.invalidLabel]}>{children}</Text>
            <TextInput style = {textInputs} {...inputConfig}/>
        </View>
    )
 }

  
const styles = StyleSheet.create({
    container:{
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
    },
    inputMultiline:{
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel:{
        color: "red"
    },
    invalidInput:{
        backgroundColor: 'red',
    }
})

  export default Input;