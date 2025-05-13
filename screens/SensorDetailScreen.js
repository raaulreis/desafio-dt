import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function SensorDetailScreen({ route, navigation }) {
  const { sensor } = route.params;

  const atualizarDados = () => {
    // Aqui você poderia simular atualização de dados se quisesse.
    alert('Dados atualizados (mock)');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{sensor.nome}</Text>
      <Text>Valor atual: {sensor.valor}</Text>
      <Text>Status: {sensor.status}</Text>
      <Text style={{ marginTop: 16, fontWeight: 'bold' }}>Histórico:</Text>
      <FlatList
        data={sensor.historico}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button title="Atualizar" onPress={atualizarDados} />
    </View>
  );
}
