/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

// library imports
import React from 'react';
import { Text, View } from 'react-native';

// UI components
import SearchBar from '../../components/SearchBar';

// constants
import Strings from '../../constants';

// styles
import styles from './Styles';

const onPress = () => {};

/**
 * @function Search
 * @description Search Screen implementation
 * @returns {JSX}
 */
const Search = () => (
  <View style={styles.container}>
    <Text style={styles.text1}>{Strings.color}</Text>
    <Text style={styles.text2}>{Strings.word}</Text>
    <SearchBar onPress={onPress} />
  </View>
);
export default Search;
