import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import AppTextCard from '../../components/AppTextCard';
import styles from './styles';
import CustomText from '../../components/CustomText';
import CapsuleButton from '../../components/CapsuleButton';

const Explore = ({navigation, setGenre, genreList}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView directionalLockEnabled>
        <View style={styles.genreHeading}>
          <CustomText bold>Genres</CustomText>
        </View>
        <View style={styles.genreContainer}>
          {genreList &&
            genreList
              // .filter(item => item.id % 2 === 0)
              .map((item, index) => {
                return (
                  <View key={index} style={styles.cardContainer}>
                    {/* <AppTextCard
                      title={item.name}
                      onPress={() => {
                        setGenre(item);
                        navigation.navigate('MovieList');
                      }}
                    /> */}
                    <CapsuleButton
                      title={item?.name}
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
