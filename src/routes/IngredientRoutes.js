import { useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import CatagoryList from "../components/ingredient/IngredientList";
import IngredientForm from "../components/ingredient/IngredientForm";
import IngredientDetails from "../components/ingredient/IngredientDetails";
const CatagoryRoutes = (props) => {
  let ingredients = useSelector((state) => state.ingredients.ingredients);
  return ingredients.length > 0 ? (
    <Switch>
      <Route exact path="/ingredients/">
        <CatagoryList ingredients={ingredients} />
      </Route>
      <Route exact path="/categories/:categorySlug/ingredients/create">
        <IngredientForm />
      </Route>
      <Route
        exact
        path="/categories/:categorySlug/ingredients/:ingredientSlug/edit"
      >
        <IngredientForm />
      </Route>
      <Route exact path="/categories/:categorySlug/ingredients/:ingredientSlug">
        <IngredientDetails />
      </Route>
    </Switch>
  ) : (
    "loading"
  );
};
export default CatagoryRoutes;
