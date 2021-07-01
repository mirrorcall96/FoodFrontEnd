import { useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import CatagoryList from "../components/category/CategoryList";
import CategoryForm from "../components/category/CategoryForm";
import CategoryDetails from "../components/category/CategoryDetails";
const CatagoryRoutes = (props) => {
  let categories = useSelector((state) => state.categories.categories);
  return categories.length > 0 ? (
    <Switch>
      <Route exact path="/categories/">
        <CatagoryList categories={categories} />
      </Route>
      <Route exact path="/categories/create">
        <CategoryForm />
      </Route>
      <Route exact path="/categories/:categorySlug/edit">
        <CategoryForm />
      </Route>
      <Route exact path="/categories/:categorySlug">
        <CategoryDetails />
      </Route>
    </Switch>
  ) : (
    "loading"
  );
};
export default CatagoryRoutes;
