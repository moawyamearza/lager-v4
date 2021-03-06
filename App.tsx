import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import StockList from './components/stock';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={{padding: 12}}>
        <Text style={{ color: '#33c', fontSize: 42 }}>Lager-Appen</Text>
        <Image source={warehouse} style={{ width: 320, height: 240 }} />
        <StockList />
        <StatusBar style="auto" />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
