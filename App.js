import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [calchistory, setCalchistory] = useState([]);

  const addPressed = () => {
    const operation= (number1 + " + " + number2 + " = " + (parseInt(number1) + parseInt(number2)));
    const adding= [...calchistory,{key:operation}];
    setCalchistory(adding)
    setNumber1("")
    setNumber2("")

  };
  const minusPressed = () => {
    const operation= (number1 + " - " + number2 + " = " + (parseInt(number1) - parseInt(number2)));
    const minus= [...calchistory,{key:operation}];
    setCalchistory(minus)
    setNumber1("")
    setNumber2("")
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(number) => setNumber1(number)}
        value={number1}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(number) => setNumber2(number)}
        value={number2}
      />
      
      <View style={styles.operator}>
        <View style={styles.button}>
          <Button onPress={addPressed} title="+" />
        </View>
        <View style={styles.button}>
          <Button onPress={minusPressed} title="-" />
        </View>
      </View>
          
          <Text> History</Text>
      <FlatList style={styles.list} 
        data={calchistory}
        renderItem={({ item }) => 
          <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
       />    
        <StatusBar style="auto" />
    </View>
    </View>
      
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 100,
  },
    operator: {
    flexDirection: "row",
    },
    input: {
      margin: 5,
      width: 150,
      borderColor: "black",
      borderWidth: 1,
    },
    button: {
      width: 50,
      borderColor: "black",
      margin: 10,
    },
  });
