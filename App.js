

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {  DrawerItemList } from "@react-navigation/drawer";
import { Entypo } from '@expo/vector-icons';
import Home from './Pages/Home/Home';
import Color from "./Pages/Shared/Color";
import ReadNews from './Pages/Home/ReadNews';
import { Feather } from '@expo/vector-icons';
 import { FontAwesome5 } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();


const CloseButton = ({ navigation }) => (
  <TouchableOpacity
  style={{ marginLeft: 225 }}
    onPress={() => navigation.closeDrawer()}
  >
    <Text style={{color:Color.white,fontSize: 20 }}>X</Text>
  </TouchableOpacity>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{flexDirection:"row",backgroundColor:Color.black}} >
       <View style={styles.drawerContent}>
      <DrawerItemList {...props} style={{color:"white"}} />
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

    <Drawer.Navigator style={{flexDirection:"column",padding:20}}
    drawerContent={(props) => <CustomDrawerContent {...props} style={{backgroundColor:Color.black }}/>}
      screenOptions={{
        header: ({ route, navigation }) => (
          <CustomHeader title={route.name} navigation={navigation} />
        ),
        drawerLabelStyle: { color: Color.white },
      }}
    >


{/* <Drawer.Screen     name="FakeNews" component={Home} options={{
 
          drawerIcon: ({ color, size }) => (
            <Entypo name="news" size={24} color="white" />
          ),
        }} /> */}


<Drawer.Screen name="ReadNews" component={ReadNews}  options={{
    drawerIcon: ({ color, size }) => (
      <Entypo name="news" size={size} color="white" />
    ),
  }} />

      <Drawer.Screen  options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="news" size={24} color="white" />
          ),
        }}  name="Home" component={Home} />


</Drawer.Navigator>
);
};




const styles = StyleSheet.create({
  drawerContent: {
    // flexDirection: 'column',
    flexDirection:"column-reverse",
   
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
    alignSelf:'center',
    justifyContent:'center'
    
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

  },

});

const App = () => {
  return (
    <NavigationContainer >
      <AppDrawer  style={{backgroundColor:Color.black}}/>
    </NavigationContainer>
  );
};


export default App;

























