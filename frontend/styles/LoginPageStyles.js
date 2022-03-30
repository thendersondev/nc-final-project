import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    marginBottom: 100,
  },
  mainLogo: {
    height: '60%',
    width: '60%',
    alignSelf: 'center',
    marginBottom: -10,
    marginLeft: -20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: -10,
    marginTop: 30,
  },
  input: {
    color: '#694fad',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#694fad',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: -20,
    marginTop: -5,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#694fad',
    fontWeight: '700',
    fontSize: 16,
  },
  registerPrompt: {
    marginTop: 20,
    padding: 10,
    color: '#694fad',
  },
});

export default styles;
