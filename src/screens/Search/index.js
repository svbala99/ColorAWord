/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Strings from '../../constants';
import globalStyles, { theme } from '../../styles';
import styles from './Styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  render() {
    const { searchQuery } = this.state;
    const { lightgray, white } = theme.colors;
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>{Strings.color}</Text>
        <Text style={styles.text2}>{Strings.word}</Text>
        <View style={styles.searchBarContainer}>
          <TextInput
            autoFocus
            autoCapitalize="words"
            style={styles.input}
            placeholderTextColor={lightgray}
            onChangeText={(text) => { this.setState({ searchQuery: text }); }}
            value={searchQuery}
            placeholder="Search"
          />
          <View style={styles.searchButtonIcon}>
            <Icon name="search" size={globalStyles.size.searchIcon} color={white} />
          </View>
        </View>
      </View>
    );
  }
}

export default Search;
