import React from 'react'
import 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationStack from './src/navigation/NavigationStack'
export default function App() {

  return (
    <View style={styles.container}>
      {/* Nous englobons la navigation dans un NavigationStack */}
      <NavigationStack />
    </View >
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
