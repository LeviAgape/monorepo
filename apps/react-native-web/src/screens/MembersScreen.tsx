import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MembersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Membros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
  },
  text: {
    fontSize: 24,
    color: '#421D86',
  },
});
