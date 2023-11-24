import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainCategories = ({ navigation }) => {
  // Dummy data for main categories (replace with API call later)
  const mainCategories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Main Categories</Text>
      {mainCategories.map(category => (
        <TouchableOpacity
          key={category.id}
          onPress={() => navigation.navigate('SubCategories', { category })}
          style={styles.categoryItem}
        >
          <Text>{category.name}</Text>
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

export default MainCategories;
