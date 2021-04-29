// library imports
import { StyleSheet } from 'react-native';

// styles
import globalStyles from '../../styles';

// object destructurings
const { mini } = globalStyles.fontSize;
const { variant3, variant2 } = globalStyles.letterSpacing;
const { bold } = globalStyles.fontWeight;
const { margin1 } = globalStyles.margin;
const {
  padding1, padding3, padding4,
} = globalStyles.padding;
const {
  searchBarHeight,
} = globalStyles;

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
    paddingRight: padding4,
    paddingVertical: padding3,
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export default styles;
