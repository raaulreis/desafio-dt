import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
  source={require('./assets/digital_twin_logo.png')}
  style={{ width: 200, height: 200 }}
  resizeMode="contain"
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // pode trocar por azul escuro ou algo mais estilizado
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
