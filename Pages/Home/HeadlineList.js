import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Color from '../Shared/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const HeadlineList = ({ blogList }) => {
  const limitedBlogList1 = blogList.slice(0, 2);
  const limitedBlogList2 = blogList.slice(0, 3);
  return (
    <View style={{width:"98%"}}>
       <Text style={{color:Color.lightGray , padding:10}}>WORLD</Text>
      <FlatList
        data={limitedBlogList1}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={{ flexDirection: "row", padding: 5 }}>
              <Image source={{ uri: item.urlToImage }} style={{ width: 90, height: 70,marginTop:5}} />
              <View style={{ marginRight: 130, marginLeft: 10 }}>
                <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: "600", color: Color.white,width:"40%" }}>{item.title}</Text>
              
              <View style={{flexDirection:"row"}}>
              <MaterialCommunityIcons name="view-parallel-outline" size={24} color="yellow" />
                <Text style={{ marginTop: 6, color: Color.lightGray }}>{item?.source?.name}</Text>
              </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />

<FlatList
        data={limitedBlogList2}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <View >
                <Text numberOfLines={3} style={{ fontSize: 18, fontWeight: "600", color: Color.white, width:"90%",paddingTop:10, }}>{item.title}</Text>
               
                <View style={{flexDirection:"row"}}>
              <MaterialCommunityIcons name="view-parallel-outline" size={24} style={{ color:Color.orange}} />
                <Text style={{ marginTop: 6, color: Color.lightGray }}>{item?.source?.name}</Text>
              </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
  
  
};

export default HeadlineList;
