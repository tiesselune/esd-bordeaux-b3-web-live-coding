import {View} from "react-native";
import Todo from "../Todo.js";
import {useState} from "react";

export default ({navigation, route}) => {
    if(!route || !route.params){
        navigation.navigate("List");
    }
    const [todo, setTodo] = useState(route.params.todo);
    const onToggle = () => {
        todo.done = !todo.done;
        setTodo({...todo});
    };
    return (
        <View>
            <Todo done={todo.done} text={todo.text} onToggle={onToggle}></Todo>
        </View>
    )
}