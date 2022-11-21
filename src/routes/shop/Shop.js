import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/FireBase";
import { setcategories } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryaArray = await getCategoriesAndDocuments("categories");
      dispatch(setcategories(categoryaArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
