/* eslint-disable react/jsx-filename-extension */
// library imports
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';

// styles
import globalStyles, { theme } from '../../styles';
import styles from './Styles';

const { lightgray, white } = theme.colors;

/**
 * @function SearchBar
 * @param {searchText, onChangeText} props
 * @returns {JSX}
 */
const SearchBar = ({ onPress }) => {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        autoCapitalize="words"
        style={styles.input}
        placeholderTextColor={lightgray}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search"
      />
      <TouchableOpacity onPress={() => onPress(text)} style={styles.searchButtonIcon}>
        <Icon name="search" size={globalStyles.size.searchIcon} color={white} />
      </TouchableOpacity>
    </View>
  );
};

/**
 * Prop types for this functional component
 */
SearchBar.propTypes = {
  onPress: PropTypes.func,
};

/**
 * Default props for this functional component
 */
SearchBar.defaultProps = {
  onPress: Function.prototype,
};

export default SearchBar;
