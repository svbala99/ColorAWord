import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
class App extends React.Component {
  render() {
    return (
      <View style={styles.centeredText}>
        <Text>Hello world</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default App;
