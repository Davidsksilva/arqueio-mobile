import React, { useState } from 'react';
import {View,StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';

const SearchBarTab = (props) => {

  return(
    <View>
        <SearchBar 
          lightTheme
          placeholder='Pesquisar'
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
          showLoadingIcon={true}/>
    </View>
  
  );

}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    height: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0
  },
  inputStyle: {
    height: 30
  },
  inputContainerStyle: {
    backgroundColor: '#F9F9F9',
  }
});


export default SearchBarTab;