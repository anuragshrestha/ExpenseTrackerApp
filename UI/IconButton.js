import { Pressable, StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({icon, color, size, onPress}){
    return(
        <Pressable onPress={onPress} style = {({pressed}) => pressed && styles.pressed}>
            <View style = {styles.constainer}>
                <Ionicons name= {icon} size={ size} color={color}/>
            </View>
        </Pressable>
    )
}

 const styles = StyleSheet.create({
 constainer:{
    borderRadius: 10,
   
    marginHorizontal: 12,
    marginVertical: 2,
    // borderColor: 'black',
    // //height: 45,
  //borderWidth: 3
 },
  pressed:{
    opacity: 0.5
  }
 })

export default IconButton;