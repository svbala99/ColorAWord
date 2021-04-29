/* eslint-disable react/jsx-filename-extension */
// library imports
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

// styles
import styles from './Styles';

/**
 * @function ColorCard
 * @param {color} props
 * @returns {JSX}
 */
const ColorCard = ({ color }) => (
  <View style={styles.container}>
    <View style={[styles.tileBackground, { backgroundColor: color }]} />
    <Text style={styles.centerText}>{color.toUpperCase()}</Text>
  </View>
);

/**
 * Prop types for this functional component
 */
ColorCard.propTypes = {
  color: PropTypes.string,
};

/**
 * Default props for this functional component
 */
ColorCard.defaultProps = {
  color: null,
};

export default ColorCard;
