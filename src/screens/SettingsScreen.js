import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {LoginManager} from 'react-native-fbsdk';
import {signout} from './../store/actions';

function SettingsScreen(props) {
  function logout() {
    LoginManager.logOut();
    props.signout(props.user);
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Text>{props.user.name}</Text>
      <Text>{props.user.email}</Text>
      <Button title="logout" onPress={logout} color="#f4511e" />
    </View>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signout: (user) => dispatch(signout(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
