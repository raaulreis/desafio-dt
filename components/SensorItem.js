import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SensorItem({ sensor, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.title}>{sensor.nome}</Text>
      <Text>Valor: {sensor.valor}</Text>
      <Text>Status: {sensor.status}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  title: {
    fontWeight: 'bold'
  }
});
