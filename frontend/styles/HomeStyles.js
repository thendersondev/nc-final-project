import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mainLogo: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
    marginRight: 20,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 2,
    textAlign: 'center',
    color: '#694fad',
  },
  textCenter: {
    textAlign: 'center',
    color: '#694fad',
    fontSize: 16,
    padding: 6,
    fontWeight: '500',
  },
  text: {
    alignItems: 'center',
    color: '#694fad',
    fontSize: 16,
    padding: 10,
    lineHeight: 10,
    fontWeight: '500',
  },
  textIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 10,
  },
  wrapper: {
    backgroundColor: '#CBC3E3',
    paddingBottom: 1,
    borderRadius: 10,
    padding: 5,
    marginBottom: 2,
    marginTop: -25,
  },
  featured: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: -2,
    color: '#694fad',
  },
  flatlist: {
    flex: 1,
    width: 360,
    marginLeft: 1,
  },
});

export default styles;
