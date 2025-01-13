import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState("")
  const [lowest, setLowest] = useState(0)
  const [highest, setHighest] = useState(0)

  const calculate = () => {
    const resultForLowest = (220 - age) * 0.65
    const resultForHighest = (220 - age) * 0.85
    setLowest(resultForLowest.toFixed(0))
    setHighest(resultForHighest.toFixed(0))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age:</Text>
      <TextInput
      style={styles.field}
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />
      <Text style={styles.field}> Limits </Text>
      <Text style={styles.field}>{lowest}</Text>
      <Text style={styles.field}>{highest}</Text>

      <Button title="Calculate" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    padding:20,
  },
  field: {
    marginBottom: 10,
    fontSize: 20,
  },
});
