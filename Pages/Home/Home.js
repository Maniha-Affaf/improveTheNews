import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategorySlider from "./CategorySlider"
import Color from '../Shared/Color'
import TopHeadlineSlider from './TopHeadlineSlider';
import HeadlineList from './HeadlineList';
import FakeApi from '../Api/FakeApi';
import { ScrollView } from 'react-native';

export default function Home() {
  
const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    getTopHeadline();
  }, []);
  
 
  const getTopHeadline = () => {
    FakeApi.getTopHeadline()
      .then(result => {
        if (result && result.articles) {
          // console.log("result: ", result);
          // console.log("result.articles:", result.articles);
          setBlogList(result.articles);
        } else {
          console.error("Error fetching data: Invalid response format");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <ScrollView style={styles.HomeName}>

      <CategorySlider/>                
      <TopHeadlineSlider blogList={blogList}/>
      <HeadlineList blogList={blogList}/>
    </ScrollView>
  )
} 


const styles = StyleSheet.create({
  HomeName:{
flex:1,
     backgroundColor: Color.slate,
    paddingLeft:15,
    paddingRight:15
  }
  
})