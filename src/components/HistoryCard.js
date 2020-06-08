import React from 'react';

import {View, Text, Button} from 'react-native';

export default function HistoryCard({activity}) {
  return (
    <View>
      <Text>{activity.name}</Text>
      <Button title="Details" />
    </View>
  );
}
