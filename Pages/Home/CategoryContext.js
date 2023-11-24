import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  const setCategoryData = (data) => {
    setSelectedCategoryData(data);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategoryData, setCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};
