/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
      </View>
    );
  }
}

export default Search;
