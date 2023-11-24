
import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
function ReadNews() {
  const route = useRoute();
  const news = route.params?.news;

  useEffect(() => {
    if (news) {
      console.log(news);
    }
  }, [news]);

  if (!news) {
    // You can handle the case where news is undefined, for example, navigate back to the previous screen.
    return null;
  }

  return (
    <View style={{ backgroundColor: Color.black }}>
        <View style={{marginTop:10, marginBottom:10}}>
        <Ionicons name="arrow-back-outline" size={24} color="white" /><Text style={{color:Color.white}}>Back To Feed</Text>
        </View>

        <View style={{paddingLeft:15, paddingRight:10}}>

     
      <Image source={{ uri: news.urlToImage }} style={{ width: "100%", height: 300, borderRadius: 15 }} />
      <Text style={{marginTop:10,color:Color.orange}}>{news?.source?.name}</Text>
      <Text numberOfLines={3} style={{ marginTop: 20, fontSize: 20, fontWeight: 800, color: Color.white }}>
        {news.title}
      </Text>
      <Text style={{ marginTop: 5,fontSize:16, color: Color.lightGray,lineHeight:30 }}>{news.description}</Text>
      <Text style={{marginTop:10,color:Color.orange,fontSize:16, fontWeight:"bold",paddingBottom:20,paddingTop:5}}   onPress={news.url}>Read More</Text>
    </View> 
      </View>
  );
}

export default ReadNews;
