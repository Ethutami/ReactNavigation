import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import {SignIn, CreateAccount, Profile, Home} from './Screen'

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator ()
const HomeStack =createStackNavigator()
const ProfileStack = createStackNavigator()


const HomeStackScreen = () =>{
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component= {Profile}/>
  </HomeStack.Navigator>
}

const ProfileStackScreen = () =>{
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Profile' component= {Profile}/>
  </ProfileStack.Navigator>
}

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name ='Home' component={HomeStackScreen}/>
          <Tabs.Screen name ='Profile' component={ProfileStackScreen}/>

        </Tabs.Navigator>
        {/* <AuthStack.Navigator>
          <AuthStack.Screen name='SignIn' component = {SignIn} options ={{title : 'SignIn'}} />
          <AuthStack.Screen name='CreateAccount' component = {CreateAccount}/>
        </AuthStack.Navigator> */}
      </NavigationContainer>
  );
}
