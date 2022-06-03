import { StatusBar } from 'expo-status-bar';
import { useRef,  useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Pressable } from 'react-native';

export default function App() {
  const value = useRef(new Animated.Value(0)).current;
  const radius = value.interpolate({
    inputRange : [0,1],
    outputRange : [0,50]
  });
  const color = value.interpolate({
    inputRange : [0,1],
    outputRange : ["rgb(5,5,200)","rgb(170,0,170)"]
  });
  const launchAnimationIn = () => {
        Animated.spring(value,{toValue : 1,friction : 3,tension : 20, useNativeDriver : false}).start();
  };
  const launchAnimationOut = () => {
      Animated.spring(value,{toValue : 0,friction : 5,tension : 40, useNativeDriver : false}).start();
};
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.square, borderRadius :radius, backgroundColor : color}}>
        <Pressable android_ripple={{color : "white"}} style={{width : 200, height : 200}} onPressIn={launchAnimationIn} onPressOut={launchAnimationOut}></Pressable>
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
    width : 200,
    height : 200,
    backgroundColor : "blue",
    overflow : "hidden",
  }
});
