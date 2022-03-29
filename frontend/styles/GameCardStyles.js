import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: 'white',
    width: '95%',
    margin: '2%',
    borderColor: '#694fad',
  },
  image: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    width: 100,
    height: 100,
  },
  cardLeft: {
    flexDirection: 'row',
  },
  cardRight: {
    flexDirection: 'column',
    flexShrink: 1,
  },
  cardRightTop: {
    flexShrink: 1,
  },
  cardRightBottom: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#7b5dc7',
    borderRadius: 10,
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    marginHorizontal: 5,
    height: 50,
    padding: 10,
  },
  best: {
    backgroundColor: '#694fad',
    borderWidth: 2,
    borderColor: '#9acd32',
    height: 55,
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
