/* eslint-disable react/jsx-filename-extension */
// library imports
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import PropTypes from 'prop-types';

// styles
import styles from './Styles';
import { theme } from '../../styles';

const { lightgray, blue } = theme.colors;

/**
 * @function ColorCard
 * @param {color, isLoading} props
 * @returns {JSX}
 */
const ColorCard = ({ color, isLoading }) => (!isLoading && color ? (
  <View style={styles.container}>
    <View style={[styles.tileBackground, { backgroundColor: color }]} />
    <Text style={styles.centerText}>{color.toUpperCase()}</Text>
  </View>
) : (
  <View style={styles.container}>
    <View style={[styles.tileBackground, { backgroundColor: lightgray }]}>
      <ActivityIndicator size="small" color={blue} />
    </View>
    <View style={styles.centerText}>{}</View>
  </View>
));

/**
 * Prop types for this functional component
 */
ColorCard.propTypes = {
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};

/**
 * Default props for this functional component
 */
ColorCard.defaultProps = {
  color: null,
  isLoading: false,
};

export default ColorCard;
