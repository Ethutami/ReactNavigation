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
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/SimpleLineIcons'




import Index from './app/index'
import Login from './sanberApp/Login'
import Home from './sanberApp/HomeScreen'
import Signup from './sanberApp/Register'



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' tabBarOptions ={{activeTintColor :'orange', inactiveTintColor : 'black'}} >
      <Tab.Screen name="Home" component={Home} options = {{tabBarIcon : ({focused})=> 
        <Icon1 name= 'home'size = {25} color ={focused ? 'orange':'black'}/>
      }} />
      <Tab.Screen name="Cart" component={Home} options = {{tabBarIcon : ({focused})=> 
        <Icon1 name= 'shoppingcart'size = {25} color ={focused ? 'orange':'black'}/>
      }} />
      <Tab.Screen name="Mail" component={Home} options = {{tabBarIcon : ({focused})=> 
        <Icon2 name= 'email'size = {25} color ={focused ? 'orange':'black'}/>
      }} />
      <Tab.Screen name="User" component={Home} options = {{tabBarIcon : ({focused})=> 
        <Icon3 name= 'user'size = {25} color ={focused ? 'orange':'black'}/>
      }} />
    </Tab.Navigator>
  );
}


const App = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Index/> */}
      {/* <View>
        <Text>h</Text>
      </View> */}


      <NavigationContainer >
            <Stack.Navigator>
            {/* /<Stack.Screen name="NamaRute" component={NamaRuteComponent} /> */}
                <Stack.Screen name="Login" component={Login} options ={{headerShown :false}} />
                {/* <Stack.Screen name="Home" component={Home} options ={{headerShown :false}} /> */}
                <Stack.Screen name="Signup" component={Signup} options ={{headerShown :false}} />
                {/* <Stack.Screen name="Skill" component={Skil} options ={{headerShown :false}} />
                <Stack.Screen name="About" component={About} options ={{headerShown :false}} />
                <Stack.Screen name="Project" component={Project} options ={{headerShown :false}} />
                <Stack.Screen name="Add" component={Add} options ={{headerShown :false}} />

                

               */}
               <Stack.Screen name="Home" component={MyTabs} options ={{headerShown :false}} />
            </Stack.Navigator>
            </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
