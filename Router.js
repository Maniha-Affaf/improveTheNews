// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import DrawerContent from "./Pages/DrawerContent";
// import MainCategories from "./Pages/MainCategories";
// // import Home from "./Pages/Home/HeadlineList";
// import Home from "./Pages/Home/Home";
// const Drawer = createDrawerNavigator();

// const CloseButton = ({ navigation }) => (
//   <TouchableOpacity
//     style={{ marginRight: 10 }}
//     onPress={() => navigation.closeDrawer()}
//   >
//     <Text style={{ color: "white" }}>Close</Text>
//   </TouchableOpacity>
// );

// export default function Router() {
//   return (
//     <View style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator
//           initialRouteName="Home"
//           screenOptions={{
//             headerShown: true,
//             headerStyle: { backgroundColor: "blue" },
//             headerTintColor: "white",
//           }}
//         >
//           <Drawer.Screen
//             name="Home"
//             component={Home}
//             options={({ navigation }) => ({
//               headerRight: () => <CloseButton navigation={navigation} />,
//             })}
//           />
//           <Drawer.Screen name="MainCategories" component={MainCategories} />
//           <Drawer.Screen name="DrawerContent" component={DrawerContent} />
//         </Drawer.Navigator>
//         <Text>Dummy Component</Text>
//       </NavigationContainer>
//     </View>
//   );
// }



// Router.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import DrawerContent from "./Pages/DrawerContent";
import MainCategories from "./Pages/MainCategories";
import Home from "./Pages/Home/Home";


import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";

const CloseButton = ({ navigation }) => (
  <TouchableOpacity
    style={{ margin: 16 }}
    onPress={() => navigation.closeDrawer()}
  >
    <Text style={{ color: "blue" }}>Close</Text>
  </TouchableOpacity>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <CloseButton navigation={props.navigation} />
      <DrawerItemList {...props} />
      {/* Add additional DrawerItems as needed */}
    </DrawerContentScrollView>
  );
};





const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="MainCategories" component={MainCategories} />
          {/* Add additional screens as needed */}
        </Drawer.Navigator>
        <Text>Dummy Component</Text>
      </NavigationContainer>
    </View>
  );
}
