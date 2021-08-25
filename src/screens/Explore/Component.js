import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import AppTextCard from '../../components/AppTextCard';
import styles from './styles';
import {genreList} from '../../app/constants';
import CustomText from '../../components/CustomText';
import CapsuleButton from '../../components/CapsuleButton';

const Explore = ({navigation, setGenre}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView directionalLockEnabled>
        <View style={styles.genreHeading}>
          <CustomText bold>Genres</CustomText>
        </View>
        <View style={styles.genreContainer}>
          {genreList.map((item, index) => {
            return (
              <View key={index} style={styles.cardContainer}>
                {/* <AppTextCard
                  title={item}
                  onPress={() => {
                    setGenre(item);
                    navigation.navigate('MovieList');
                  }}
                /> */}
                <CapsuleButton
                  title={item}
                  onPress={() => {
                    setGenre(item);
                    navigation.navigate('MovieList');
                  }}
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
