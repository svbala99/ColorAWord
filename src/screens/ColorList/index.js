import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';
class ColorList extends React.Component {
  render() {
    return (
      <View styles={styles.centeredText}>
        <Text>Colors List Screen</Text>
      </View>
    );
  }
}

export default ColorList;
