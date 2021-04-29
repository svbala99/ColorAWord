import { StyleSheet } from 'react-native';
import globalStyles from '../../styles';

const { small, medium } = globalStyles.fontSize;
const { variant1 } = globalStyles.letterSpacing;
const { light, bold } = globalStyles.fontWeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: small,
    letterSpacing: variant1,
    fontWeight: light,
  },
  text2: {
    fontSize: medium,
    letterSpacing: variant1,
    fontWeight: bold,
  },
});

export default styles;
