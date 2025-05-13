import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import SensorItem from '../components/SensorItem';
import sensorsData from '../mock/sensors.json';

export default function SensorListScreen({ navigation }) {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    // Simulando carregamento de dados mockados
    setTimeout(() => {
      setSensors(sensorsData);
    }, 1000); // pequena simulação de delay
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensores Pneumáticos</Text>
      {sensors.length === 0 ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={sensors}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SensorItem
              sensor={item}
              onPress={() => navigation.navigate('SensorDetail', { sensor: item })}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
});
