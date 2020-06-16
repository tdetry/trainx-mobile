import React, {useEffect} from 'react';
import {View, Button, Linking, Text} from 'react-native';

import HistoryCard from './../components/HistoryCard';
import {connect} from 'react-redux';
import {signin} from './../store/actions';
import {ScrollView} from 'react-native-gesture-handler';

const STRAVA_CLIENT_ID = 49328;

//https://groups.google.com/forum/#!topic/strava-api/rjId5Ywo6r8

function HistoryScreen(props) {
  const DEEP_LINK_STRAVA = `http://5c91dba6bf5f.ngrok.io/api/v1/strava/token/${props.user.id}/`;
  const url = `http://www.strava.com/oauth/mobile/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${DEEP_LINK_STRAVA}&approval_prompt=force&scope=activity:read_all`;

  const [history, setHistory] = React.useState(null);

  // TODO: need event when back from strava apage
  const [loading, setLoading] = React.useState(false);

  // get history props if none fetch history backend if none propose strava

  async function fetchHistoryBackend(user) {
    console.log(user);
    const responseBackend = await fetch('http://10.0.2.2/api/v1/activities/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        'token-external-source': 'facebook',
      },
    });
    const respBackend = await responseBackend.json();
    return respBackend;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetchHistoryBackend(props.user);

      if (result.length > 0) {
        setHistory(result);
        setLoading(false);
      }
    };
    fetchData();
  }, [props.user, loading]);

  if (history) {
    return (
      <ScrollView>
        {history.map((hist) => (
          <HistoryCard key={hist.id} activity={hist} />
        ))}
      </ScrollView>
    );
  }

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={{marginTop: 10}}>
      <Button
        title="Access History Strava"
        onPress={() => {
          Linking.openURL(url);
          setLoading(true);
        }}
        color="#f4511e"
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signinUser: (user) => dispatch(signin(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
