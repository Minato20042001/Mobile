import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cabecalho from './src/Cabecalho';
import Corpo from './src/Corpo';
import Disciplina from './src/disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome ='Matuê' curso ='Design Digital'/>
      <Corpo/>
      <Disciplina nome = 'PIDM'/>
      <Disciplina nome = 'SCT'/>
      <Disciplina nome = 'Pj4'/>

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
