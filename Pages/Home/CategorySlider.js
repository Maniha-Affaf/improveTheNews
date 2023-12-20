

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Color from "../Shared/Color";
import { useNavigation } from "@react-navigation/native";
import { useCategory } from "./CategoryContext";

export default function CategorySlider() {
  const [active, setActive] = useState(1);
  const [categoryData, setCategoryData] = useState([]);
  const navigation = useNavigation();
  const { setCategoryData: setContextCategoryData } = useCategory();

  useEffect(() => {
    // Fetch parent1, parent2, and HTML data from the API
    fetch("https://v9nebsfxtb.execute-api.us-east-1.amazonaws.com/dev/items")
      .then((response) => response.json())
      .then((data) => {
        const mappedCategoryData = data.map((item) => ({
          title: item.parent1,
          items: [
            {
              content: item.parent2,
              subcontent: item.html
          
            },
          ],
        }));
        setCategoryData(mappedCategoryData);
        setContextCategoryData(mappedCategoryData[active - 1]?.items || []);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, [active, setContextCategoryData]);

  const onClickCategoryHandler = (id) => {
    setActive(id);
    setContextCategoryData(categoryData[id - 1]?.items || []);
    navigation.navigate("CategoryDetail", {
      categoryData: categoryData[id - 1]?.items || [],
    });
  };

  return (
    <View style={{ marginTop: 10,color:Color.white
     }}>
      <FlatList
        data={categoryData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onClickCategoryHandler(index + 1)}>
            <Text
              style={
                
                index + 1 === active
                  ? styles.selectedText
                  : styles.unselectedText
              }
            >
              {item?.title || "Default Title"}{" "}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Display content based on the selected category */}
      {active && (
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: Color.orange }}
          >
            {categoryData[active - 1]?.title || "Default Title"}{" "}
          </Text>
          {categoryData[active - 1]?.items.map((item, index) => (
            <View key={index}>
              <Text style={{ fontSize: 16, color: Color.white }}>
                {item.content}
              </Text>
              <Text style={{ fontSize: 14, color: Color.gray }}>
                {item.subcontent}
              </Text>
             
            </View>
          ))}
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  unselectedText: {
    marginRight: 15,
    fontSize: 17,
    fontWeight: "700",
    color: Color.white,
  },
  selectedText: {
    marginRight: 15,
    fontSize: 17,
    fontWeight: "800",
    color: Color.orange,
  },
});
