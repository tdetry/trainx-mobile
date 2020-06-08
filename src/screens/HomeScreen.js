import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TrainingCard from './../components/TrainingCard';

const activities = [
  {
    _id: 1,
    name: 'Tempo',
    description: "do this and you'll be stronger than Hulk",
  },
  {_id: 2, name: 'Hills', description: "do this cauz it ain't no mountains"},
  {_id: 3, name: 'Cadence', description: 'do this to run like Bolt'},
];

export default function HomeScreen() {
  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        {activities.map((activity) => (
          <TrainingCard key={activity._id} activity={activity} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
});
