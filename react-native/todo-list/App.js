import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import Constants from "expo-constants";
import Todo from "./components/Todo";
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    {text : "Faire la vaisselle", done : false},
    {text : "Passser le balai", done : true},
    {text : "Aller en cours", done : false},
  ]);
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
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 10,
    paddingTop : Constants.statusBarHeight,
  },
});
