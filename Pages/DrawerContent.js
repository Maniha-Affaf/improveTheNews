
import React from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { TouchableOpacity, Text } from "react-native";

const CloseButton = ({ navigation }) => (
  <TouchableOpacity
    style={{ margin: 16 }}
    onPress={() => navigation.closeDrawer()}
  >
    <Text style={{ color: "blue" }}>Close</Text>
  </TouchableOpacity>
);

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <CloseButton navigation={props.navigation} />
      <DrawerItemList {...props} />
      {/* Add additional DrawerItems as needed */}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
