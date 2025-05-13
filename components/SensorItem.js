import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SensorItem({ sensor, onPress }) {
  const statusColor = sensor.status === 'OK' ? '#28a745' : '#dc3545';

  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{sensor.nome}</Text>
        <Text style={[styles.status, { color: statusColor }]}>
          {sensor.status}
        </Text>
      </View>
      <Text style={styles.value}>Valor: {sensor.valor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    fontWeight: '600',
  },
  value: {
    color: '#555',
  },
});
