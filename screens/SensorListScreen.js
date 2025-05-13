import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import SensorItem from '../components/SensorItem';
import sensorsData from '../mock/sensors.json';

export default function SensorListScreen({ navigation }) {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    // Simulando fetch local
    setSensors(sensorsData);
  }, []);

  return (
    <View>
      {sensors.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
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
        />
      )}
    </View>
  );
}
