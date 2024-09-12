import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [tri, setTri] = useState(0);
  const [tor, setTor] = useState(0);
  const [esc, setEsc] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title} >REMÉDIOS</Text>
      <View style={styles.containerRemedios} >
        <Text style={styles.textNome} >Trileptal</Text>
        <Text style={styles.textNome} >Torval</Text>
        <Text style={styles.textNome} >ESC</Text>
      </View>
      <View style={styles.navegacao} >

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B0000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginTop: 30
  },
  containerRemedios: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'blue',
    flexDirection: 'row',
    width:'80%'
  },
  textNome: {
    color: "#fff",
    padding:30,
    fontSize:18
  }
});