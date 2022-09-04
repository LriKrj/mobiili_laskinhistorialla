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
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum);
   
    setCalchistory([...calchistory, [number1, " + ", number2, " = ", sum]]);
  };
  const minusPressed = () => {
    const minus = parseInt(number1) - parseInt(number2);
    setResult(minus);
    [
      ...calchistory,
      [number1, " - ", number2, " = ", minus],
    ];
    setCalchistory([
      ...calchistory,
      [number1, " - ", number2, " = ", minus],
    ]);
  };

  return (
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

      <Text>History:</Text>
      <FlatList
        data={calchistory}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100
  },
  operator: {
    flexDirection: 'row',
    
  },
  input: {
    margin: 5,
    width: 150, 
    borderColor: 'black', 
    borderWidth: 1,
  },
  button: {
    width: 50,
    borderColor: 'black',
    margin: 10
  }
});
