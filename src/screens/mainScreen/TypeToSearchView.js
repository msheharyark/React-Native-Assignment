import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import {height,color} from '../../components/colors/colors';

function TypeToSearch() {
  return (
    <View style={styles.emptyDatacontainer}>
      <Lottie
        source={require('../../assets/searchAnimation.json')}
        style={styles.animationStyle}
        autoPlay
      />
      <Text style={styles.emptyDataText}>Type any Keyword</Text>
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
    top: 10,
    color:color.black
  },
  animationStyle: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TypeToSearch;
