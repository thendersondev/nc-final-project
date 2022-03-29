import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sentMessage: {
    textAlign: 'right',
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messages: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendWrapper: {
    width: '80%',
    height: 50,
    flex: 1,
    flexDirection: 'row',
  },
  form: {
    padding: 20,
  },
  chatbox: {
    width: 260,
    height: 50,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  messages: {
    margin: 20,
    marginBottom: 0,
    width: '80%',
    height: 450,
    backgroundColor: 'lightgrey',
  },
  send: {
    backgroundColor: '#694fad',
    borderRadius: 10,
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    marginHorizontal: 5,
    height: 50,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#694fad',
    borderRadius: 10,
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    marginHorizontal: 5,
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
    position: 'relative',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 42,
  },
});

export default styles;
