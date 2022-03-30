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
    width: 80,
    height: 80,
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
    padding: 4,
    marginBottom: 2,
  },
  flatlist: {
    width: '95%',
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
    marginRight: 15,
    marginBottom: -7,
  },
});

export default styles;
