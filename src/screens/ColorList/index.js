/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

// library imports
import React, {useState, useEffect, Component} from 'react';
import {StackActions} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {FlatList, Text, View} from 'react-native';
import {getColorFromURL} from 'rn-dominant-color';

// custom UI components
import Header from '../../components/Header';
import ColorCard from '../../components/ColorCard';
import SearchBar from '../../components/SearchBar';

// styles
import styles from './Styles';

// constants
import {numberOfColorCards, URL} from '../../constants';

/**
 * @function ColorList
 * @param {navigation} props
 * @returns {JSX}
 */
class ColorList extends Component {
  state = {
    colors: [],
    isLoading:false
  };

  fetchDominantColors = async () => {
    let colorList = []
    for (let i = 1; i <= numberOfColorCards; i++) {
      try {
    this.setState({isLoading:true})
      let colorDetails = await getColorFromURL(`${URL.picsum}i`)
      colorList.push(colorDetails.secondary)
      }
    catch(e){e.message}  
    }
    this.setState({ colors:colorList, isLoading:false })
  }
  componentDidMount = () => {
    this.fetchDominantColors()
  };

  /**
   * @function renderColorCard
   * @param {item} color code
   * @returns {JSX}
   * @description Renders each color card
   */
  renderColorCard = ({ index }) => <ColorCard isLoading={this.state.isLoading} color={this.state.colors[index]}/>;

  render() {
    return (
      <View style={styles.container}>
        <Header
          searchQuery={this.props.route.params.searchQuery}
          onBackPress={() => this.props.navigation.dispatch(StackActions.pop())}
        />
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          horizontal={false}
          numColumns={2}
          data={Array(numberOfColorCards)
            .fill()
            .map((x, i) => i)}
          renderItem={this.renderColorCard}
          keyExtractor={item => item}
          ListFooterComponent={<View />}
        />
        <View style={styles.searchBarContainer}>
          <SearchBar
            onPress={searchQuery =>
              this.props.navigation.dispatch(StackActions.replace('ColorList', {searchQuery}))
            }
          />
        </View>
      </View>
    );
  }
}

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

// LOGIC TO FETCH IMAGES FROM GOOGLE SEARCH IMAGES API

// fetch(`${URL.googleImageSearch}&q=${this.props.route.params.searchQuery}`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     const imageList = [];
//     res.items.map(item => {
//       if (item.pagemap) {
//         if (item.pagemap.cse_image) {
//           const targetObj = item.pagemap.cse_image[0].src;
//           if (targetObj.endsWith('jpg') || targetObj.endsWith('JPG')) {
//             imageList.push(targetObj);
//           }
//         }
//       }
//     });
//     console.log(imageList);
//   })
//   .catch(e => e.message);
