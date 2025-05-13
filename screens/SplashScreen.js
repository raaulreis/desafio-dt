import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/digital_twin_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Desafio Digital Twin</Text>
      <Button title="Começar" onPress={() => navigation.replace('SensorList')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
