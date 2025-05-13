import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao Desafio Digital Twin</Text>
      <Button title="Começar" onPress={() => navigation.navigate('SensorList')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  logo: {
    width: 120, height: 120, marginBottom: 20
  },
  title: {
    fontSize: 18, marginBottom: 20, textAlign: 'center'
  }
});
