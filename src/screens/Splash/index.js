/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Strings from '../../constants';
import styles from './Styles';

class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>{Strings.color}</Text>
        <Text style={styles.text2}>{Strings.word}</Text>
      </View>
    );
  }
}

export default Splash;
