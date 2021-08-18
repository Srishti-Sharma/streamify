import React, {useState} from 'react';
import {Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
import CustomText from '../CustomText';
import styles from './styles';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';
import FastImage from 'react-native-fast-image';

const HorizontalRow = ({title = '', contentList = [], loading}) => {
  return (
    <View style={styles.rowContainer}>
      <CustomText bold>{title}</CustomText>
      <View style={styles.ListContainer}>
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color={colorObj.primaryText} />
          </View>
        ) : (
          contentList &&
          contentList.length > 0 && (
            <FlatList
              data={contentList}
              horizontal
              keyExtractor={(item, index) => index}
              renderItem={item => (
                <View style={styles.imageWrapper} key={item.index}>
                  {item.item.backdrop_path !== null && (
                    <FastImage
                      style={styles.image}
                      source={{
                        uri: `${baseImgUrl}${item.item.backdrop_path}`,
                        priority: FastImage.priority.high,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                  )}
                </View>
              )}
            />
          )
        )}
      </View>
    </View>
  );
};

export default HorizontalRow;
