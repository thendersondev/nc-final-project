import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
  },
  form: {
    padding: 20,
  },
  textInputBox: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    borderColor: '#694FAD',
    backgroundColor: '#F0EDF6',
    marginBottom: 8,
  },
  inputAlert: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    borderColor: 'red',
  },
  pageTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: '#694FAD',
    paddingTop: 45,
  },
  postItemTitle: {
    color: '#694FAD',
    fontSize: 15,
  },
  inputTitle: {
    fontWeight: '200',
    fontSize: 15,
    paddingLeft: 4,
    color: '#694FAD',
    borderRadius: 5,
    borderWidth: 2,
  },
  textAlert: {
    color: 'red',
    textAlign: 'right',
  },
  postItem: {
    textAlign: 'center',
    padding: 10,
  },
  postItemBody: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
    color: '#694fad',
  },
  button: {
    backgroundColor: '#694fad',
    borderRadius: 10,
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    marginHorizontal: 20,
    height: 30,
    padding: 10,
    width: 150,
    alignSelf: 'center',
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    color: '#F0EDF6',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
