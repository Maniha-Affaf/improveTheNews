
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Color from '../Shared/Color';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useCategory } from './CategoryContext';

export default function CategorySlider() {
  const [active, setActive] = useState(1);

  const navigation = useNavigation();
  const { setCategoryData } = useCategory();

  const categoryList = [
    { id: 1, name: 'HEADLINES' },
    { id: 2, name: 'WORLD' },
    { id: 3, name: 'POLITICS' },
    { id: 4, name: 'HEALTH' },
    { id: 5, name: 'CRIME&JUSTICE' },
    { id: 6, name: 'SCIENCE & TECHNOLOGY' },
    { id: 7, name: 'SOCIAL ISSUES' },
  ];

  const generateSubContent = (category, index) => {
    return `https://example.com/${category.name.toLowerCase()}/${index + 1}`;
  };
  
  const categoryData = categoryList.map(category => {
    const arrayLength = 3; //this is just my dummy data
      return {
      title: `${category.name} Title`,
      items: Array.from({ length: arrayLength }, (_, index) => ({
        content: `${category.name}${index + 1}`,
        subcontent: generateSubContent(category, index),
      })),
    };
  });

  const onClickCategoryHandler = (id) => {
    setActive(id);
    const selectedCategoryData = categoryData[id - 1].items;
    setCategoryData(selectedCategoryData);
    navigation.navigate('CategoryDetail', { categoryData: selectedCategoryData });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onClickCategoryHandler(item.id)}>
            <Text style={item.id === active ? styles.selectedText : styles.unselectedText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Display content based on the selected category */}
      {active && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: Color.orange }}>
            {categoryData[active - 1].title}
          </Text>
          {categoryData[active - 1].items.map((item, index) => (
            <View key={index}>
            <Text style={{ fontSize: 16, color: Color.white }}>{item.content}</Text>
            <Text style={{ fontSize: 14, color: Color.gray }}>{item.subcontent}</Text>
          </View>
          ))}

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  unselectedText: { marginRight: 15, fontSize: 17, fontWeight: '700', color: Color.white },
  selectedText: { marginRight: 15, fontSize: 17, fontWeight: '800', color: Color.orange },
});





