import { View, StyleSheet, ActivityIndicator } from "react-native";


 function OverLoading(){
    return(
        <View style = {styles.conatiner}>
            <ActivityIndicator size="large" color="white" />
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

 export default OverLoading;