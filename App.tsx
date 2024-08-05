import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FetchButton from './apps/packages/ui/src/ButtonHeader';
import CreatePost from './apps/packages/layout/src/CreatePost';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Open up App.tsx to start working on your app!</Text>
        <View style={styles.containerPost}>
          <CreatePost />
        </View>
        <View style={styles.containerForm}>
          <FetchButton />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Ensures the wrapper takes up the full height of the screen
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#421D86', // Background color for the entire scrollable content
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
});