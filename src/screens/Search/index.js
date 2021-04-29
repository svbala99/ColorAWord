/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

// library imports
import React from 'react';
import { Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import PropTypes from 'prop-types';

// UI components
import SearchBar from '../../components/SearchBar';

// constants
import Strings from '../../constants';

// styles
import styles from './Styles';

/**
 * @function Search
 * @description Search Screen implementation
 * @returns {JSX}
 */
const Search = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text1}>{Strings.color}</Text>
    <Text style={styles.text2}>{Strings.word}</Text>
    <SearchBar
      onPress={(searchQuery) => {
        if (searchQuery) {
          navigation.dispatch(
            StackActions.push('ColorList', { searchQuery }),
          );
        }
      }}
    />
  </View>
);

/**
 * Prop types for this functional component
 */
Search.propTypes = {
  navigation: PropTypes.func,
};

/**
 * Default props for this functional component
 */
Search.defaultProps = {
  navigation: Function.prototype,
};

export default Search;
