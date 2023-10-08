import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from "./api/categoriesApi";
import { singleCategoryApi} from "./api/singleCategoryApi"
import { singleProductApi } from "./api/singleProductApi";

export default configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [singleCategoryApi.reducerPath]: singleCategoryApi.reducer,
    [singleProductApi.reducerPath]: singleProductApi.reducer 
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      categoriesApi.middleware, 
      singleCategoryApi.middleware, 
      singleProductApi.middleware
      );
  },
});
