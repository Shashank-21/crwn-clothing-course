import { useNavigate } from "react-router-dom";

import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.js";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title}`);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
