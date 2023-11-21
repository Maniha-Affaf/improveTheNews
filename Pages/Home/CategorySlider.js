import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Color from '../Shared/Color';

export default function CategorySlider() {
  const [active,setActive]=useState(1)

  const categoryList = [
    { id: 1, name: 'HEADLINES' },
    { id: 2, name: 'WORLD' },
    { id: 3, name: 'POLITICS' },
    { id: 4, name: 'HEALTH' },
    { id: 5, name: 'CRIME&JUSTICE' },
    { id: 6, name: 'SCIENCE & TECHNOLOGY' },
    { id: 7, name: 'SOCIAL ISSUES' },
  ];



  const onClickCategoryHandler=(id)=>{

    setActive(id)
  } 
  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>onClickCategoryHandler(item.id)}>
            <Text style={ item.id==active? (styles.selectedText):(styles.unselectedText)}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}


const styles = StyleSheet.create({

  unselectedText:{marginRight:15,fontSize:17,fontWeight:"700",color:Color.white},
  selectedText:{marginRight:15,fontSize:17,fontWeight:"800",color:Color.orange}
})