import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarsList';
import Header from './Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
