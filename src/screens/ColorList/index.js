/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

class ColorList extends React.Component {
  render() {
    return (
      <View style={styles.centeredText}>
        <Text>Colors List Screen</Text>
      </View>
    );
  }
}

export default ColorList;
