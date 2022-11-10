import React from "react";
import "./Directory.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
