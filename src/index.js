import React from 'react';
import { StackNavigator } from 'react-navigation';
import { 
	HomeScreen,
	LoginScreen,
	RepoScreen,
	CommitsScreen,
} from '@screens'
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Repo: { screen: RepoScreen },
  Commits: { screen: CommitsScreen },
});

export default SimpleApp