import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    width: '100%',
    alignItems: 'center',
    marginTop: '30%',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
});

export default styles;
