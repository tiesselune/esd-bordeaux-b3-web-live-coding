import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView} from 'react-native';
import Constants from "expo-constants";
import ToDoList from './components/screens/ToDoList.js';
import ToDoDetails from './components/screens/ToDoDetails.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <NavigationContainer>
        <Navigator>
          <Screen name='List' component={ToDoList}/>
          <Screen name='Details' component={ToDoDetails}/>
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
