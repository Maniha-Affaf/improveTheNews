import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Home/Home';


const Stack=createStackNavigator();
const HomeNavigator = () => {
  return (
<Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen/>
   
</Stack.Navigator>
  )
}

export default HomeNavigator