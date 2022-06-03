import {useState} from "react";
import {StyleSheet, View, ScrollView, TextInput, Button} from "react-native";
import Todo from "../Todo.js";

export default ({navigation, route}) => {
    const [todos, setTodos] = useState([
        {text : "Faire la vaisselle", done : false, description : ""},
        {text : "Passser le balai", done : true, description : "URGENT"},
    ]);
    const [currentTodo,setCurrentTodo] = useState("");
    const addTodo = () => {
        if(currentTodo.trim() !== ""){
            setTodos([...todos,{text : currentTodo, done : false, description : ""}]);
            setCurrentTodo("");
        }
    }
    return (
        <View style={{flex : 1, padding : 10}}>
            <ScrollView>
                {todos.map((elem,index) => 
                    <Todo 
                    key={index} 
                    done={elem.done} 
                    text={elem.text}
                    onLongPress={() => {
                        navigation.navigate("Details", {todo : elem});
                    }} 
                    onToggle={() => {
                        elem.done = !elem.done;
                        setTodos([...todos]);
                    }
                    } />
                )}
            </ScrollView>
            <View>
                <TextInput value={currentTodo} onChangeText={setCurrentTodo} style={styles.todoInput}></TextInput><Button title="+" onPress={addTodo}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    todoInput : {
        borderWidth : 1,
        borderColor : "#000000",
        borderRadius : 5,
        padding : 8,
        marginBottom : 5,
    }
});