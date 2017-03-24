import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginScreen } from '@screens'

const SimpleApp = StackNavigator({
  Login: { screen: LoginScreen },
});

export default SimpleApp