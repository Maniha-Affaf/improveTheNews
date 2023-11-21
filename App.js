

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {  DrawerItemList } from "@react-navigation/drawer";

import Home from './Pages/Home/Home';
import Color from "./Pages/Shared/Color";
import ReadNews from './Pages/Home/ReadNews';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();


const CloseButton = ({ navigation }) => (
  <TouchableOpacity
  style={{ marginRight: 16 }}
    onPress={() => navigation.closeDrawer()}
  >
    <Text style={{color:Color.gray,fontSize: 20 }}>X</Text>
  </TouchableOpacity>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{flexDirection:"row",margin:10}} >
       <View style={styles.drawerContent}>
      <DrawerItemList {...props} />
          <CloseButton navigation={props.navigation} />
       </View>
       
      {/* <DrawerItem label="HomeScreen" onPress={() => props.navigation.navigate('Home')} /> */}
      {/* <DrawerItem label="Main Categories" onPress={() => props.navigation.navigate('MainCategories')} /> */}
    </DrawerContentScrollView>
  );
};

const CustomHeader = ({ title, navigation,props }) => {
  return (
    <View style={styles.header} >
      <DrawerContentScrollView {...props}>
      {/* <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <MaterialCommunityIcons name="close" size={24} color="black" />
      </TouchableOpacity> */}
      <View style={styles.container} horizontal={true}> 
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <MaterialCommunityIcons name="menu" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <MaterialCommunityIcons name="magnify" size={24} color="white" />
      </TouchableOpacity> 
      </View>
      </DrawerContentScrollView>
    </View> 
    
  );
};

const AppDrawer = () => {
  return (

    <Drawer.Navigator style={{flexDirection:"vertical",padding:20,marginRight:10,marginLeft:10}}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: ({ route, navigation }) => (
          <CustomHeader title={route.name} navigation={navigation} />
        ),
      }}
    >
   
      <Drawer.Screen  name="Home" component={Home} />
      <Drawer.Screen  name="ReadNews" component={ReadNews} />
      {/* <Drawer.Screen name="MainCategories" component={MainCategories} /> */}

 

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.lightGray, // Replace with your desired color
  },
  titleContainer: {
     flex: 1,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
   paddingBottom:4,
   color:Color.white,
   alignSelf:'center',
   alignItems:'center',
   justifyContent:'center'
  },
  container:{
    padding:10,
    backgroundColor:Color.black,
    flexDirection:"row",

  }
});

const App = () => {
  return (
    <NavigationContainer >
      <AppDrawer />
    </NavigationContainer>
  );
};

export default App;
