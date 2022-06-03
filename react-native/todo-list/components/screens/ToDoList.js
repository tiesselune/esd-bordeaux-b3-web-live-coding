import {useState,  useEffect} from "react";
import {StyleSheet, View, ScrollView, TextInput, Button, Image} from "react-native";
import Todo from "../Todo.js";
import { saveFile,loadFile } from "../../utils/SaveLoad.js";

export default ({navigation, route}) => {
    const [todos, setTodos] = useState([]);
    const loadTodos = async () => {
        const loadedTodos = await loadFile();
        setTodos(loadedTodos);
    };
    useEffect(loadTodos,[]);
    
    const [currentTodo,setCurrentTodo] = useState("");

    const addTodo = () => {
        if(currentTodo.trim() !== ""){
            setTodos([...todos,{text : currentTodo, done : false, description : ""}]);
            setCurrentTodo("");
            saveFile(todos);
        }
    };

    return (
        <View style={{flex : 1, padding : 10}}>
            <ScrollView>
                {todos.map((elem,index) => 
                    <Todo 
                    key={index} 
                    done={elem.done} 
                    text={elem.text}
                    onLongPress={() => {
                        navigation.navigate("Details", {todo : elem, updateTodo : (todo) => {
                            todos[index] = todo;
                            setTodos([...todos]);
                            saveFile(todos);
                        }});
                    }} 
                    onToggle={() => {
                        elem.done = !elem.done;
                        setTodos([...todos]);
                        saveFile(todos);
                    }
                    } />
                )}
            </ScrollView>
            <View>
                <TextInput value={currentTodo} onChangeText={setCurrentTodo} style={styles.todoInput}></TextInput><Button title="+" onPress={addTodo}></Button>
            </View>
            <Image source={require("../../assets/icon.png")} style={{width : 100, height : 100, left : 100}}/>
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

