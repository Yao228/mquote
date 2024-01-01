import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './components/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Adrianna-Regular': require('./assets/fonts/Adrianna-Regular.ttf'),
    'Adrianna-Bold': require('./assets/fonts/Adrianna-Bold.ttf'),
    'TestDomaineText-Medium': require('./assets/fonts/TestDomaineText-Medium.otf'),
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openSearchForm = () => {
      /**setIsModalVisible(true);*/
      alert("Open search form");
  }
  const onModalClose = () => {
      setIsModalVisible(false);
  };
  const openSideMenu = () => {
      /**aaaaa */
  }
  
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
