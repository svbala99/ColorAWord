// library imports
import { StyleSheet } from 'react-native';

// styles
import globalStyles, { theme } from '../../styles';

// destructuring
const { height, searchBarHeight } = globalStyles;
const { margin2 } = globalStyles.margin;

/**
 * Style object
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    height: height - searchBarHeight,
  },
  flatListContainer: {
    alignItems: 'center',
  },
  searchBarContainer: {
    position: 'relative',
    bottom: margin2,
    width: globalStyles.width,
    alignItems: 'center',
  },
});

export default styles;
