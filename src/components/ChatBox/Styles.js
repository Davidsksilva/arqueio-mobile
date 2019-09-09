import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  touchableConatinerStyle: {
    flexDirection:"row", 
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    height: 75
  },
  profileImageStyle: {
    height: 50, 
    width: 50, 
    borderRadius: 400/ 2,
    marginLeft: 20
  },
  profileNameStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  rightSideStyle: {
    alignItems: 'center',
    marginRight: 20
  },
  alertStyle: {
    height:20, 
    width: 20, 
    borderRadius:20, 
    backgroundColor: 'red', 
    alignItems: 'center',
  }
});

export default Styles;