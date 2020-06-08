import React from 'react';
import {View, Button, Linking} from 'react-native';

import HistoryCard from './../components/HistoryCard';

const STRAVA_CLIENT_ID = 49328;
const USER_ID = 1;
const DEEP_LINK_STRAVA = `http://3b2acf6248a4.ngrok.io/api/v1/strava/token/${USER_ID}/`;
const url = `http://www.strava.com/oauth/mobile/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${DEEP_LINK_STRAVA}&approval_prompt=force&scope=activity:read_all`;

//https://groups.google.com/forum/#!topic/strava-api/rjId5Ywo6r8

export default function HistoryScreen() {
  return (
    <View style={{marginTop: 10}}>
      <Button
        title="Access History Strava"
        onPress={() => Linking.openURL(url)}
        color="#f4511e"
      />
    </View>
  );
}
