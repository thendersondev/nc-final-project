import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
  },
  pageTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: '#694FAD',
  },
  catagoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  catagoryButtonsGroup: {
    flexDirection: 'row',
  },
  catagoryButton: {
    backgroundColor: '#694fad',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  catagoryButtonText: {
    color: '#FFFFFF',
  },
  sortBy: {
    color: '#694FAD',
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: 5,
  },
  searchBar: {
    borderColor: '#694FAD',
    backgroundColor: '#F0EDF6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 5,
    borderWidth: 2,
  },
  Appbar: {
    backgroundColor: "#694fad",
  },
});

export default styles;
