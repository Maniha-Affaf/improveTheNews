

import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategorySlider from './CategorySlider';
import Color from '../Shared/Color';
import TopHeadlineSlider from './TopHeadlineSlider';
import HeadlineList from './HeadlineList';
import FakeApi from '../Api/FakeApi';
import { ScrollView } from 'react-native';

export default function Home({ route }) {
  const [blogList, setBlogList] = useState([]);
  const [subcontent, setSubcontent] = useState('');

  useEffect(() => {
    getTopHeadline();
  }, []);

  useEffect(() => {
    // Access the subcontent parameter from the route
    const { subcontent } = route.params || {};
    if (subcontent) {
      console.log('Subcontent:', subcontent);
      // Handle the subcontent as needed
      setSubcontent(subcontent); // Set subcontent to the state variable
    }
    console.log('nohome');
  }, [route.params]);

  const getTopHeadline = () => {
    FakeApi.getTopHeadline()
      .then((result) => {
        if (result && result.articles) {
          setBlogList(result.articles);
        } else {
          console.error('Error fetching data: Invalid response format');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <ScrollView style={styles.HomeName}>
      <Text style={{color:Color.white ,fontSize:16}}> {subcontent}</Text>
      <CategorySlider />
      <TopHeadlineSlider blogList={blogList} />
      <HeadlineList blogList={blogList} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  HomeName: {
    flex: 1,
    backgroundColor: Color.slate,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
