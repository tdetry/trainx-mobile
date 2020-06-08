import React from 'react';
import {
  Animated,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {connect} from 'react-redux';
import {signin} from './../store/actions';

// https://github.com/facebook/react-native-fbsdk

const {width, height} = Dimensions.get('window');

function SignInScreen(props) {
  const imageRunning = require('../images/running.jpg');
  const imageCycling = require('../images/cycling.jpg');
  const imageSwimming = require('../images/swimming.jpg');

  async function onLogin(error, result) {
    if (error) {
      console.log('login has error: ' + error);
    } else if (result.isCancelled) {
      console.log('login is cancelled.');
    } else {
      console.log(result);
      AccessToken.getCurrentAccessToken().then(async (data) => {
        const response = await fetch(
          `https://graph.facebook.com/me?fields=email,name&access_token=${data.accessToken}`,
        );

        const resp = await response.json();
        console.log(resp);
        props.signinUser({
          auth: true,
          accessToken: data.accessToken,
          name: resp.name,
          email: resp.email,
        });
      });
    }
  }

  function handleFacebookLogin() {
    LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]).then((result, error) => onLogin(error, result));
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView pagingEnabled scrollEventThrottle={16} horizontal>
        <Image source={imageCycling} style={styles.image} />
        <Image source={imageRunning} style={styles.image} />
        <Image source={imageSwimming} style={styles.image} />
      </Animated.ScrollView>
      <View style={styles.button}>
        <Button
          onPress={handleFacebookLogin}
          title="Continue with facebook"
          color="#4267B2"
        />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: width,
    height: '40%',
    justifyContent: 'center',
    position: 'absolute',
  },
  image: {
    flex: 1,
    width: width,
    height: null,
    resizeMode: 'cover',
    alignContent: 'center',
  },
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    width: '100%',
  },
  smallHeadline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    width: '100%',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
