import { Dimensions } from 'react-native';

const globalStyles = {
  fontSize: {
    tiny: 20,
    small: 28,
    medium: 32,
  },
  letterSpacing: {
    variant1: 20,
    variant2: 16,
  },
  fontWeight: {
    light: '100',
    bold: 'bold',
  },
  size: {
    size1: 96,
    size2: 48,
    searchIcon: 24,
  },
  margin: {
    margin1: 16,
  },
  padding: {
    padding1: 8,
    padding2: 16,
  },
  exactCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarHeight: 64,
  searchBarBorderRadius: 48,
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export const theme = {
  colors: {
    white: 'white',
    black: 'black',
    gray: 'gray',
    lightgray: 'lightgray',
    blue: 'blue',
  },
};

export default globalStyles;
