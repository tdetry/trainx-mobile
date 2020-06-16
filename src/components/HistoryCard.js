import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function HistoryCard({activity}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{activity.name}</Text>
      <Text style={styles.cardText}>
        {activity.activity_type} - {activity.distance}m -{' '}
        {activity.average_speed}m/s - {activity.total_elevation_gain}elevation
      </Text>
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
    padding: 2,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },

  cardTitle: {
    fontSize: 20,
  },
});
