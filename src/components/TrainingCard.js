import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

export default function TrainingCard({activity}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardText}>
        <Text style={styles.title}>{activity.name}</Text>
        <Text>{activity.description}</Text>
      </View>

      <Button color="#f4511e" title="Go!" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: 'white',
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'space-between',
  },

  cardText: {
    padding: 5,
    backgroundColor: 'white',
    margin: 10,
    flex: 1,
    flexDirection: 'column',
  },

  title: {
    fontSize: 24,
  },
});
