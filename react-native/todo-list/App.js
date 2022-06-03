import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TextInput, Button } from 'react-native';
import Constants from "expo-constants";
import Todo from "./components/Todo";
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    {text : "Faire la vaisselle", done : false},
    {text : "Passser le balai", done : true},
    {text : "Aller en cours", done : false},
  ]);
  const [currentTodo,setCurrentTodo] = useState("");

  const addTodo = () => {
    if(currentTodo.trim() !== ""){
      setTodos([...todos,{text : currentTodo, done : false}]);
      setCurrentTodo("");
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        {todos.map((elem,index) => 
        <Todo 
        key={index} 
        done={elem.done} 
        text={elem.text} 
        onToggle={() => {
          elem.done = !elem.done;
          setTodos([...todos]);
        }} />)}
      </ScrollView>
      <View>
        <TextInput value={currentTodo} onChangeText={setCurrentTodo} style={styles.todoInput}></TextInput><Button title="+" onPress={addTodo}></Button>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding : 10,
    paddingTop : Constants.statusBarHeight,
  },
  todoInput : {
    borderWidth : 1,
    borderColor : "#000000",
    borderRadius : 5,
    padding : 8,
    marginBottom : 5,
  }
});
