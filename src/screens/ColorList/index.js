/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

// library imports
import React, { useState } from 'react';
import { StackActions } from '@react-navigation/native';
import PropTypes, { any } from 'prop-types';
import { FlatList, View } from 'react-native';

// custom UI components
import Header from '../../components/Header';
import ColorCard from '../../components/ColorCard';
import SearchBar from '../../components/SearchBar';

// styles
import styles from './Styles';

/**
 * @function ColorList
 * @param {navigation} props
 * @returns {JSX}
 */
const ColorList = ({ navigation, route }) => {
  /**
   * 20 Colors for all the cards - stored in local app state - non-persistent
   */
  const [colors, setColors] = useState([
    '#e6194b',
    '#3cb44b',
    '#ffe119',
    '#4363d8',
    '#f58231',
    '#911eb4',
    '#46f0f0',
    '#f032e6',
    '#bcf60c',
    '#fabebe',
    '#008080',
    '#e6beff',
    '#9a6324',
    '#fffaac',
    '#800000',
    '#aaffc3',
    '#808000',
    '#ffd8b1',
    '#000075',
    '#808080',
    '#ff343f',
    '#000000',
  ]);

  /**
   * @function renderColorCard
   * @param {item} color code
   * @returns {JSX}
   * @description Renders each color card
   */
  const renderColorCard = ({ item }) => <ColorCard color={item} />;
  return (
    <View style={styles.container}>
      <Header
        searchQuery={route.params.searchQuery}
        onBackPress={() => navigation.dispatch(StackActions.pop())}
      />
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        horizontal={false}
        numColumns={2}
        data={colors}
        renderItem={renderColorCard}
        keyExtractor={(item) => item}
        ListFooterComponent={<View />}
      />
      <View style={styles.searchBarContainer}>
        <SearchBar onPress={(searchQuery) => navigation.dispatch(
          StackActions.replace('ColorList', { searchQuery }),
        )}
        />
      </View>
    </View>
  );
};

/**
 * Prop types for this functional component
 */
ColorList.propTypes = {
  navigation: PropTypes.func,
  route: PropTypes.objectOf(PropTypes.any),
};

/**
 * Default props for this functional component
 */
ColorList.defaultProps = {
  navigation: Function.prototype,
  route: Object.prototype,
};

export default ColorList;
