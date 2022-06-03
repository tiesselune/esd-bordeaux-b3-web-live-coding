import {TextInput, View, StyleSheet} from "react-native";
import Todo from "../Todo.js";
import {useState} from "react";

export default ({navigation, route}) => {
    if(!route || !route.params){
        navigation.navigate("List");
    }
    const [todo, setTodo] = useState(route.params.todo);
    const updateTodo = route.params.updateTodo;
    const onToggle = () => {
        todo.done = !todo.done;
        setTodo({...todo});
        updateTodo({...todo});
    };

    const onChangeDesc = (val) => {
        todo.description = val;
        setTodo({...todo});
        updateTodo({...todo});
    }
    return (
        <View style={{flex : 1, padding : 5}}>
            <Todo done={todo.done} text={todo.text} onToggle={onToggle}></Todo>
            <TextInput 
            style={styles.input} 
            multiline 
            onChangeText={onChangeDesc} 
            value={todo.description}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        flex : 1,
        borderColor : "grey",
        borderRadius : 5,
        borderWidth : 1,
        textAlignVertical: "top",
        padding : 5
    }
});