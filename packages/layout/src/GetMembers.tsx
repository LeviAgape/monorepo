import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

interface Member {
  id: string;
  user: string;
  age: number;
}

const GetMembers: React.FC = () => {
  const [data, setData] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Member[]>('http://localhost:3000/members');
      setData(response.data);
    } catch (error) {
      setError('Erro ao buscar dados');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Atualizar members" onPress={fetchData} />
      </View>
      {loading && <Text>Carregando...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>User: {item.user}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 30,
    width: '100%',
  },
  post: {
    marginTop: 24,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFFF',
    borderRadius: 8,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 16,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default GetMembers;
