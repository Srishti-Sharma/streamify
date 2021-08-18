import React, {useState} from 'react';
import {Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
import CustomText from '../CustomText';
import styles from './styles';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';

const HorizontalRow = ({title = '', contentList = [], loading}) => {
  // const [imageLoading, setImageLoading] = useState(false);
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
                  <Image
                    style={styles.image}
                    source={{uri: `${baseImgUrl}${item.item.backdrop_path}`}}
                    // onLoadStart={() => setImageLoading(true)}
                    // onLoadEnd={() => setImageLoading(false)}
                  />
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
