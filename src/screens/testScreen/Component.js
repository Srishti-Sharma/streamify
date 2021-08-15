import React from 'react';
import {Button, Text, View} from 'react-native';
const Test = ({test, testAction}) => (
  <View>
    <Button
      onPress={() => {
        testAction(5);
      }}
      title="Click"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    <Text>{test}</Text>
  </View>
);

export default Test;
