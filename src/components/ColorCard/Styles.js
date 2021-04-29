// library imports
import { StyleSheet } from 'react-native';

// styles
import globalStyles, { theme } from '../../styles';

// object destructurings
const { micro } = globalStyles.fontSize;
const { margin2, margin3 } = globalStyles.margin;
const {
  width, colorCardBorderRadius, exactCenter,
} = globalStyles;

/**
 * Style Object
 */
const styles = StyleSheet.create({
  container: {
    width: (width / 2) - margin2,
    height: (width / 2) - (2 * margin2),
    borderRadius: colorCardBorderRadius,
    elevation: 8,
    shadowRadius: 8,
    margin: margin3,
  },
  tileBackground: {
    flex: 3,
    borderTopLeftRadius: colorCardBorderRadius,
    borderTopRightRadius: colorCardBorderRadius,
  },
  centerText: {
    fontSize: micro,
    ...exactCenter,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: theme.colors.white,
    borderBottomLeftRadius: colorCardBorderRadius,
    borderBottomRightRadius: colorCardBorderRadius,
  },
});

export default styles;
