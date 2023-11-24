

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
import { CategoryProvider, useCategory } from './Pages/Home/CategoryContext';
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



const CustomHeader = ({ title, navigation,props }) => {
  return (
    <View style={styles.header} >
      <DrawerContentScrollView {...props}>
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

const onPressItem = (subcontent,navigation) => {
  // Navigate to the home screen and pass the subcontent
  navigation.navigate('Home', { subcontent });
};


const CustomDrawerContent = ({navigation, ...props}) => {
  const { selectedCategoryData } = useCategory(); // Use the useCategory hook to access the selected category data

  return (
    <DrawerContentScrollView {...props} style={{ flexDirection: "row", backgroundColor: Color.black }} >
      <View style={styles.drawerContent}>
        <CloseButton navigation={props.navigation} />

        {/* Render selected category data if available */}
        {selectedCategoryData && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: Color.orange }}>
              {selectedCategoryData.title}
            </Text>
            {selectedCategoryData.map((item, index) => (
              <TouchableOpacity  key={index} onPress={() => onPressItem(item.subcontent,navigation)}>

              <Text key={index} style={{ fontSize: 12,fontWeight:"bold",paddingLeft:"25%",paddingBottom:20, color: Color.white }}>{item.content}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Render other drawer items */}
        <DrawerItemList {...props} style={{ color: "white" }} />
      </View>
    </DrawerContentScrollView>
  );
};





const AppDrawer = () => {
  return (

    <Drawer.Navigator style={{flexDirection:"column",padding:20}}
    drawerContent={(props) => <CustomDrawerContent {...props}  navigation={props.navigation} style={{backgroundColor:Color.black }}/>}
      screenOptions={{
        header: ({ route, navigation }) => (
          <CustomHeader title={route.name} navigation={navigation} />
        ),
        drawerLabelStyle: { color: Color.white },
      }}
    >


<Drawer.Screen  options={{
    drawerIcon: ({ color, size }) => (
      <Feather name="news" size={24} color="white" />
    ),
  }}  name="Home" component={Home} />

<Drawer.Screen name="ReadNews" component={ReadNews}  options={{
    drawerIcon: ({ color, size }) => (
      <Entypo name="news" size={size} color="white" />
    ),
  }} />
  

</Drawer.Navigator>
);
};



const styles = StyleSheet.create({
  drawerContent: {
    flexDirection: 'column',
    // flexDirection:"column-reverse",
   
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.lightGray, 
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
    <CategoryProvider>
    <NavigationContainer >
      <AppDrawer  style={{backgroundColor:Color.black}}/>
    </NavigationContainer>
    </CategoryProvider>
  );
};


export default App;

























