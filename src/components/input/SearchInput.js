import React, {} from 'react';
import {StyleSheet, TextInput, View,TouchableOpacity} from 'react-native';
import {color} from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = function SearchInput({onChangeText, value,callSearch}) {
  const inputRef = React.useRef();

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={{
          ...styles.inputField,
        }}
        value={value}
        ref={inputRef}
        placeholder={'Search here'}
        placeholderTextColor={color.placeholderTextcolor}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoFocus={false}
        onEndEditing={callSearch}
        onFocus={() => {
          console.log('Textinput');
        }}
      />
      <TouchableOpacity
      activeOpacity={.7}
        style={styles.searchContainer}
        onPress={() => callSearch()}>
        <Icon
          name="search"
          color={color.redColor}
          size={20}
            
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.placeholderTextcolor,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 2,
    marginVertical: 20,
  },
  inputField: {
    
    height: 32,
    borderWidth: 0,
    lineHeight: 16.41,
    fontSize: 14,
    color: color.black,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    fontWeight: '400',
    letterSpacing: 0.5,
    paddingBottom: 6,
    width: '90%',
    paddingVertical: 5,
  },
  searchContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:color.borderColor_lightgray,
    height: 32,
    width:"10%",borderRadius:5
  }
 
});

export default SearchInput;
