import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    borderColor: '#694fad',
  },
  image: {
    width: 110,
    height: 110,
    left: 5,
  },

  cardLeft: {
    flexDirection: 'row',
  },
  cardRight: {
    flexDirection: 'row',
  },
  cardRightTop: {
    flexShrink: 1,
  },
  cardRightBottom: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#694fad',
    borderRadius: 10,
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 50,
    padding: 10,
  },
  text: {
    color: '#F0EDF6',
    fontWeight: '500',
    fontSize: 16,
  },
  gameTitle: {
    color: '#694FAD',
    fontWeight: '700',
    fontSize: 16,
    paddingBottom: 10,
    flexShrink: 1,
  },
});
export default styles;
