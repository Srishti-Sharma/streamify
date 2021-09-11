import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import AppTextCard from '../../components/AppTextCard';
import styles from './styles';
import CustomText from '../../components/CustomText';
import CapsuleButton from '../../components/CapsuleButton';
const {width} = Dimensions.get('window');
const Explore = ({navigation, setGenre, genreList}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView directionalLockEnabled>
        <View style={styles.genreHeading}>
          <CustomText bold>Genres</CustomText>
        </View>
        <View style={styles.genreContainer}>
          {genreList &&
            genreList.map((item, index) => {
              return (
                <View key={index} style={styles.cardContainer}>
                  <CapsuleButton
                    title={item?.name}
                    onPress={() => {
                      setGenre(item);
                      navigation.navigate('MovieList');
                    }}
                    width={width / 2 - 20}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
