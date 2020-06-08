import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {Button, Linking} from 'react-native';

import TabNavigator from './TabNavigator.js';
import SettingsScreen from './../screens/SettingsScreen';
import SignInScreen from './../screens/SignInScreen';

const Stack = createStackNavigator();

const prefix = 'trainx://';

function SettingsJumper() {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Settings"
      color="#f4511e"
    />
  );
}

function AppNavigation({user}) {
  console.log('navigation', user);

  async function handleDeepLink(e) {
    const route = e.url.replace(/.*?:\/\//g, '');
    console.log(e, route);
  }

  React.useEffect(() => {
    Linking.addEventListener('url', handleDeepLink);
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  });

  return (
    <NavigationContainer enableURLHandling={false}>
      <Stack.Navigator>
        {user.auth === true ? (
          <>
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{
                title: 'TrainX',
                animationEnabled: false,
                headerRight: () => <SettingsJumper />,
                headerRightContainerStyle: {
                  width: 100,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}
            />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        ) : (
          <Stack.Screen
            name="Log in"
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
            component={SignInScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AppNavigation);
