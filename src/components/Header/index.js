/* eslint-disable react/jsx-filename-extension */
// library imports
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

// styles
import globalStyles, { theme } from '../../styles';
import styles from './Styles';

// constants
import Strings from '../../constants';

const { black } = theme.colors;

/**
 * @function Header
 * @param {searchQuery, onBackPress} props
 * @returns {JSX}
 */
const Header = (props) => {
  const { onBackPress, searchQuery } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.rowContainer}>
        <Icon name="md-arrow-back" size={globalStyles.size.backIcon} color={black} />
        <Text style={styles.text2}>{Strings.back}</Text>
      </TouchableOpacity>
      <View style={styles.columnContainer}>
        <Text style={styles.text1}>{Strings.color}</Text>
        <Text style={styles.text2}>{searchQuery.toUpperCase()}</Text>
      </View>
    </View>
  );
};

/**
 * Prop types for this functional component
 */
Header.propTypes = {
  searchQuery: PropTypes.string,
  onBackPress: PropTypes.func,
};

/**
 * Default props for this functional component
 */
Header.defaultProps = {
  searchQuery: null,
  onBackPress: Function.prototype,
};

export default Header;
