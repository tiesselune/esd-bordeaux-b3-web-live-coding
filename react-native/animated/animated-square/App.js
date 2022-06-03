import { StatusBar } from 'expo-status-bar';
import { useRef,  useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Pressable } from 'react-native';

export default function App() {
  const value = useRef(new Animated.Value(0)).current;
  const radius = value.interpolate({
    inputRange : [0,1],
    outputRange : [0,25]
  });
  const color = value.interpolate({
    inputRange : [0,1],
    outputRange : ["rgb(5,5,200)","rgb(170,0,170)"]
  });
  const launchAnimation = () => {
      Animated.sequence([
        Animated.timing(value,{toValue : 1, duration : 1000, useNativeDriver : false}),
        Animated.timing(value,{toValue : 0, duration : 1000, useNativeDriver : false})
      ]).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.square, borderRadius :radius, backgroundColor : color}}>
        <Pressable style={{width : 100, height : 100}} onPress={launchAnimation}></Pressable>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square : {
    width : 100,
    height : 100,
    backgroundColor : "blue",
  }
});
