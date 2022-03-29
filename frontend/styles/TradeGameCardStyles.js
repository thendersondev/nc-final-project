import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '95%',
    margin: '2%',
    borderColor: '#694fad',
  },
  image: {
    borderRadius: 20,
    width: 110,
    height: 110,
  },
  cardLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardRight: {
    flexDirection: 'column',
    flexShrink: 1,
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
    height: 40,
    padding: 10,
    marginLeft: 1,
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
  gameDetails: {
    color: '#694FAD',
    fontWeight: '700',
    fontSize: 14,
    paddingBottom: 10,
    flexShrink: 1,
  },
});

export default styles;
