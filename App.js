import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './components/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'AdriannaDemibold': require('./assets/fonts/AdriannaDemibold.ttf'),
    'TestDomaineText-Regular': require('./assets/fonts/TestDomaineText-Regular.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header/>
      <Home/>
      <Footer/>
      <StatusBar style="light" />
    </View>
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
