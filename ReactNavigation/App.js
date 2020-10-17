/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {

  Colors,

} from 'react-native/Libraries/NewAppScreen';

import Index from './app/index'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Index/>
      
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
