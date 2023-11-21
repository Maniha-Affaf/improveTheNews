import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubCategories = ({ navigation, route }) => {
  const { category } = route.params;

  // Dummy data for subcategories (replace with API call later)
  const subCategories = [
    { id: 1, name: 'Subcategory 1', categoryId: 1 },
    { id: 2, name: 'Subcategory 2', categoryId: 1 },
    { id: 3, name: 'Subcategory 3', categoryId: 2 },
  ];

  const filteredSubCategories = subCategories.filter(subCategory => subCategory.categoryId === category.id);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{category.name} Subcategories</Text>
      {filteredSubCategories.map(subCategory => (
        <TouchableOpacity
          key={subCategory.id}
          onPress={() => navigation.navigate('Article', { subCategory })}
          style={styles.categoryItem}
        >
          <Text>{subCategory.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

export default SubCategories;
