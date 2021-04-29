/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

// library imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import PropTypes from 'prop-types';

// constants
import Strings from '../../constants';

// styles
import styles from './Styles';

class Splash extends Component {
  componentDidMount() {
    this.signInChecker();
  }

  signInChecker() {
    const { navigation } = this.props;
    // implement signin logic here
    // simulating the delay with setTimeout here for 2 secs here
    setTimeout(() => {
      navigation.dispatch(
        StackActions.push('Search'),
      );
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>{Strings.color}</Text>
        <Text style={styles.text2}>{Strings.word}</Text>
      </View>
    );
  }
}

/**
 * Prop types for this functional component
 */
Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

/**
 * Default props for this functional component
 */
Splash.defaultProps = {
  navigation: Function.prototype,
};

export default Splash;
