import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  viewWrapper: {
    flex: 1,
  },
  viewForm: {
    flex: 2,
    padding: 10,
  },
  viewData: {
    flex: 4,
  },
  textInput: {
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#CCCCC',
    marginBottom: 10,
    backgroundColor: '#dedede',
  },
  viewList: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  textListNama: {
    flex: 3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textListEdit: {
    color: 'blue',
    marginRight: 20,
  },
  textListDelete: {
    color: 'red',
  },
});
