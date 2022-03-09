import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Button = () => (
 <TouchableHighlight>
 <Text>Hello World</Text>
 </TouchableHighlight>
)
export default function App() {
  return (
    <View>
 <Text>Welcome to the Hello World Button!</Text>
 <Button />
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
});
