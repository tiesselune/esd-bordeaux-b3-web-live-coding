import { View, Text, StyleSheet } from "react-native";
import CheckBox from "react-native-check-box";

export default ({text,done,onToggle}) => {
    
    return (
        <View >
            <View style={styles.todo}><CheckBox isChecked={done} onClick={onToggle} checkBoxColor="#34d38e"/><Text style={{textDecorationLine : (done ? "line-through" : "none"), color : "black"}}>{text}</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    todo : {
        flexDirection : "row",
        alignItems : "center"
    }
})