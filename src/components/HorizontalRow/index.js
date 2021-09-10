import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../CustomText';
import styles from './styles';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';
import FastImage from 'react-native-fast-image';
import ProgressiveImage from '../ProgressiveImage';

const HorizontalRow = ({title = '', contentList = [], loading, navigation}) => {
  let renderDataList;
  if (contentList && contentList.length > 0) {
    renderDataList = useCallback(
      item => (
        <TouchableOpacity
          style={styles.imageWrapper}
          key={item.index}
          onPress={() => {
            navigation.navigate('Details', {item: item.item});
          }}>
          {item.item.backdrop_path !== null && (
            <ProgressiveImage
              style={styles.image}
              source={{
                uri: `${baseImgUrl}${item.item.backdrop_path}`,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          )}
        </TouchableOpacity>
      ),
      [contentList],
    );
  }
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
              removeClippedSubviews
              initialNumToRender={4}
              data={contentList}
              horizontal
              keyExtractor={(item, index) => index}
              renderItem={renderDataList}
            />
          )
        )}
      </View>
    </View>
  );
};

export default React.memo(HorizontalRow);
