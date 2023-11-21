import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import React from 'react';
import Color from '../Shared/Color';
import { useNavigation } from '@react-navigation/native';

export default function TopHeadlineSlider({ blogList }) {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={blogList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.bloglist} onPress={() => navigation.navigate("ReadNews", { news: item })}>
            <Image source={{ uri: item.urlToImage }} style={styles.BlogHeadline} />
            <View style={styles.textContainer}>
              <Text style={{  color: Color.orange }}>{item?.source?.name}</Text>
              <Text numberOfLines={3} style={styles.titleText}>
                {item.title}
              </Text>
              <Text style={{ marginTop:3, color: Color.white }}>publishedAt: {item.publishedAt}</Text>
            </View>
          
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BlogHeadline: {
    height: Dimensions.get("screen").width * 0.64,

  },
  bloglist: {
    width: Dimensions.get("screen").width * 0.94,
  
    overflow: 'hidden', // Clip child elements that overflow the container
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Adjust the color and opacity based on your design
    elevation:15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: Color.white,
  },
});
