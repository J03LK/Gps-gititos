import React from 'react';
import { View, StyleSheet } from 'react-native';
import GPSTrackerApp from './GPSTrackerApp';

const App = () => {
  return (
    <View style={styles.container}>

      // Aquí va el componente GPSTrackerApp
      <GPSTrackerApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // Equivalente a bg-gray-100
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16, // Equivalente a p-4
  },
});

export default App;
