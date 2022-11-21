import { createAction } from "../../utils/reducer/Reducer";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setcategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
