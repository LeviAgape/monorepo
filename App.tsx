import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import GetPosts from './packages/layout/src/GetPosts';
import GetMembers from './packages/layout/src/GetMembers';
export default function App() {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Veja as nossas listas!</Text>
      
        <View style={styles.containerForm}>
          <GetPosts />
        </View>
        <View style={styles.containerMembers}>
          <GetMembers/>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#421D86',
    padding: 16,
  },
  containerPost: {
    width: '30%'
  },
  containerForm: {
    marginTop: 16,
  },
  headerText: {
    marginBottom: 16,
  },
  containerMembers: {
    flex: 1,
    width: '30%'
  }
});