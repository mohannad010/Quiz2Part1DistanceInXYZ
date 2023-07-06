import react, { useState } from "react";
import {Text, TextInput, View, TouchableOpacity } from "react-native";
import CalcDistance from "./components/CalcDistance";
import styles from './styles/Style'

export default function App() {
  
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const [z,setZ] = useState(0);
  const [result, setResult] = useState(0);

  return (
  <View style={styles.container}>
    <Text style={styles.header}>Distance of (x,y,z) from (0,0,0)</Text>
    <Text>Write the code for this app which calculates d = Math.sqrt(x*x+y*y+z*z)</Text>
    <View >
      <TextInput onChangeText={text => {
        setX(text);
      }} />
    </View>
    <View>
      <TextInput onChangeText={text => {
        setY(text);
      }} />
    </View>
    <View >
      <TextInput onChangeText={text => {
        setZ(text);
      }} />
    </View>
    <TouchableOpacity 
    style={styles.TouchableOpacity}
    onPress={() => {
      setResult(CalcDistance(x,y,z))}}>
      <Text 
      style={styles.TouchableOpacityText}>CALCULATE DISTANCE</Text>
    </TouchableOpacity>
    <Text>distance to ({x},{y},{z}) is d = {result}</Text>
  </View>
  );
}


