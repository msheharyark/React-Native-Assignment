import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {color} from '../colors/colors';
import ImageLoad from 'react-native-image-placeholder';
import moment from 'moment';
import Lottie from 'lottie-react-native';

const imagePlaceholder = require('../../assets/imagePlaceholder.png');

function ImageCard({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <ImageLoad
          borderRadius={1}
          loadingStyle={styles.imageLoadingStyle}
          source={{
            uri: item.urls.full,
          }}
          placeholderSource={imagePlaceholder}
          placeholderStyle={styles.avatar}
          style={styles.avatar}
          resizeMode="contain"
        />
      </View>
      <View style={styles.timeTextContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.nameTextStyle}>{item.user.name}</Text>
          {item.user.bio && (
            <Text numberOfLines={2} style={styles.bioTextStyle}>
              {item.user.bio}
            </Text>
          )}
          <Text style={styles.dateTextStyle}>
            {moment.utc(item.created_at).format('YYYY-MM-DD')}{' '}
            {moment(item.created_at).format('hh:mm A')}
          </Text>
        </View>

        <View style={styles.likeContainer}>
          <View style={styles.likeAnimationStyle}>
            <Lottie
              source={require('../../assets/LikeAnimation.json')}
              style={styles.animationView}
              autoPlay
            />
          </View>
          <Text style={styles.likeTextStyle}>{item.likes}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 20,
    backgroundColor: color.whiteColor,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    alignSelf: 'center',
  },
  imageLoadingStyle: {
    size: 'small',
    color: color.redColor,
  },
  likeContainer: {
    width: '100%',
    backgroundColor: color.whiteColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  likeAnimationStyle: {
    width: 50,
    height: 50,
    bottom: 5,
  },
  timeTextContainer: {
    width: '100%',
    backgroundColor: color.whiteColor,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  nameTextStyle: {
    color: color.black,
  },
  bioTextStyle: {
    color: color.simpleGreyColor,
  },
  dateTextStyle: {
    color: color.simpleGreyColor,
    paddingTop: 9,
  },
  animationView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeTextStyle: {
    color: 'black',
  },
  imageView: {
    width: '100%',
    height: 180,
  },
});
export default ImageCard;
