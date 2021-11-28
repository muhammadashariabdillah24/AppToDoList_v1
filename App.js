/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/router/StackNavigator/StackNavigator';

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    )
  }
}

export default App;
