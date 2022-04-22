import { View, Text } from "react-native";
import CheckBox from "react-native-check-box";

export default ({text,done,onToggle}) => {
    
    return (
        <View>
            <Text><CheckBox isChecked={done} onClick={onToggle}/><Text>{text}</Text></Text>
        </View>
    );
};