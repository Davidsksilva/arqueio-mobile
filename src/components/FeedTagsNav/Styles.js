import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  containerStyle: {
    height: 25,
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#3398F4',
    width: 70,
    height: 25
  },
  selectedButtonStyle: {
    backgroundColor: '#3398F4'
  },
  textStyle: {
    color: '#3398F4',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  innerBorderStyle: {
    width: 0
  }
});

export default Styles;