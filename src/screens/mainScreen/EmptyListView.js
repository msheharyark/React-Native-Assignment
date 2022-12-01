import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import {color} from '../../components/colors/colors'
import {height} from '../../components/colors/colors';

function EmptyList() {
  return (
    <View style={styles.emptyDatacontainer}>
      <Lottie
        source={require('../../assets/emptyAnimation.json')}
        style={styles.animationStyle}
        autoPlay
      />
      <Text style={styles.emptyDataText}>Data not found!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  emptyDatacontainer: {
    height: (75 / 100) * height,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyDataText: {
    fontWeight: '700',
    fontSize: 17,
    letterSpacing: 0.4,
    lineHeight: 21.09,
    bottom: 15,
    color:color.black
  },
  animationStyle: {
    width: 223,
    height: 226,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default EmptyList;
