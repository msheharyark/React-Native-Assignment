import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('screen');
const color = {
  primaryColor: '#D01830',
  whiteColor: 'white',
  black: 'black',
  placeholderTextcolor: '#414141',
  borderColor_lightgray: '#ECECEC',
  textInputBorderColor: '#E7E7E7',
  redColor: '#E03249',
  simpleGreyColor: 'grey',
};

const rootStyles = StyleSheet.create({
  topPadding: (StatusBar.currentHeight || (20 * height) / 667) + 10,
  height,
  width,
  scrollview: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: color.primaryColor,
  },
});

export {color, rootStyles, height, width};
