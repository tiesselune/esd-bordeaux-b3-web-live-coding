import { View, Text, StyleSheet, Pressable } from "react-native";
import CheckBox from "react-native-check-box";

export default ({text,done,onToggle, onLongPress}) => {
    if(!onLongPress){
        onLongPress = () => {};
    }
    return (
        <Pressable style={styles.todo} onPress={onToggle} onLongPress={onLongPress}>
            <View style={styles.todo}><CheckBox isChecked={done} onClick={onToggle} checkBoxColor="#34d38e"/><Text style={{textDecorationLine : (done ? "line-through" : "none"), color : "black"}}>{text}</Text></View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    todo : {
        flexDirection : "row",
        alignItems : "center"
    }
})