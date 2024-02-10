import { Pressable, View,StyleSheet,Text } from "react-native";

function Button({children, onPress, mode, style,  }){
    return(
        <View style = {style}>
            <Pressable onPress={onPress} style = {({pressed}) => pressed && styles.pressed}>
                <View style = {styles.button}>
                    <Text style = {styles.text}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    button:{
        borderRadius: 6,
        backgroundColor: 'black',
        margin: 10,
        padding: 7,
      
    },
     text:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
     },
     pressed:{
        opacity: 0.7
     }
})


 export default  Button;

