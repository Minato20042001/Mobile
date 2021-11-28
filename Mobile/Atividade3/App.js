import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IMCApp from './src/Atv3/IMCApp';


/* 
import Cabecalho from './src/Cabecalho';
import Corpo from './src/Corpo';
import Disciplina from './src/disciplina';
*/


export default function App() {
  return (
    <View style={styles.container}>
    <IMCApp></IMCApp>
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
