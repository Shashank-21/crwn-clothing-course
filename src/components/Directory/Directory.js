import React from "react";
import { CategoriesContainer } from "./directory.styles";
import CategoryItem from "../directory-item/DirectoryItem";

const Directory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </CategoriesContainer>
  );
};

export default Directory;
