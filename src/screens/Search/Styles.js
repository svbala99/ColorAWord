// library imports
import { StyleSheet } from 'react-native';

// styles
import globalStyles, { theme } from '../../styles';

// objects destructuring
const { tiny, small, medium } = globalStyles.fontSize;
const { variant1, variant2 } = globalStyles.letterSpacing;
const { light, bold } = globalStyles.fontWeight;
const { size1 } = globalStyles.size;
const { padding1, padding2 } = globalStyles.padding;
const {
  width, searchBarHeight, searchBarBorderRadius, exactCenter,
} = globalStyles;
const {
  gray, lightgray, black, blue,
} = theme.colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...exactCenter,
  },
  text1: {
    fontSize: small,
    letterSpacing: variant1,
    fontWeight: light,
  },
  text2: {
    fontSize: medium,
    letterSpacing: variant2,
    fontWeight: bold,
  },
  searchBarContainer: {
    marginTop: globalStyles.margin.margin1,
    width: width - size1,
    flexDirection: 'row',
  },
  input: {
    height: searchBarHeight,
    flex: 5,
    borderTopLeftRadius: searchBarBorderRadius,
    borderBottomLeftRadius: searchBarBorderRadius,
    padding: padding1,
    color: gray,
    paddingHorizontal: padding2,
    fontSize: tiny,
    borderColor: lightgray,
    shadowColor: black,
    shadowOpacity: 1,
    elevation: 2,
  },
  searchButtonIcon: {
    backgroundColor: blue,
    flex: 1.4,
    height: searchBarHeight,
    borderTopRightRadius: searchBarBorderRadius,
    borderBottomRightRadius: searchBarBorderRadius,
    ...exactCenter,
  },
});

export default styles;
