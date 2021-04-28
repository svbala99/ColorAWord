// library imports
import { StyleSheet } from 'react-native';

// styles
import globalStyles, { theme } from '../../styles';

// object destructurings
const { mini, small, medium } = globalStyles.fontSize;
const { variant3, variant2 } = globalStyles.letterSpacing;
const { light, bold } = globalStyles.fontWeight;
const { size1 } = globalStyles.size;
const { margin1 } = globalStyles.margin;
const { padding1, padding2 } = globalStyles.padding;
const {
  width, searchBarHeight, searchBarBorderRadius, exactCenter,
} = globalStyles;
const {
  gray, lightgray, black, blue,
} = theme.colors;

/**
 * Style Object
 */
const styles = StyleSheet.create({
  container: {
    height: searchBarHeight,
    padding: padding1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: margin1,
  },
  text1: {
    letterSpacing: variant2,
  },
  text2: {
    fontWeight: bold,
    fontSize: mini,
    letterSpacing: variant3,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export default styles;
