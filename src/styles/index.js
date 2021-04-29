import { Dimensions } from 'react-native';

const globalStyles = {
  fontSize: {
    micro: 14,
    mini: 16,
    tiny: 20,
    small: 28,
    medium: 32,
  },
  letterSpacing: {
    variant1: 20,
    variant2: 16,
    variant3: 4,
  },
  fontWeight: {
    light: '100',
    bold: 'bold',
  },
  size: {
    size1: 96,
    size2: 48,
    searchIcon: 24,
    backIcon: 24,
  },
  margin: {
    margin1: 16,
    margin2: 32,
    margin3: 10,
  },
  padding: {
    padding1: 8,
    padding2: 16,
    padding3: 12,
    padding4: 32,
  },
  exactCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarHeight: 64,
  searchBarBorderRadius: 48,
  colorCardBorderRadius: 16,
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
    surface: '#F5F5F5',
  },
};

export default globalStyles;
