import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrap: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  messages: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    margin: 20,
    height: 580,
    marginBottom: 0,
    width: '80%',
    backgroundColor: 'lightgrey',
  },
  button: {
    backgroundColor: '#694fad',
    borderRadius: 10,
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 5,
    marginHorizontal: 25,
    width: 120,
    height: 50,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: '#F0EDF6',
    fontWeight: '500',
    fontSize: 16,
  },
  header: {
    marginTop: 10,
    position: 'relative',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 42,
  },
});

export default styles;
