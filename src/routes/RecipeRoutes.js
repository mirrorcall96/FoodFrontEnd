import { useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import RecipeList from "../components/recipe/RecipeList";
import RecipeForm from "../components/recipe/RecipeForm";
import RecipeDetails from "../components/recipe/RecipeDetails";
const RecipeRoutes = (props) => {
  let recipes = useSelector((state) => state.recipes.recipes);
  return recipes.length > 0 ? (
    <Switch>
      <Route exact path="/recipes/">
        <RecipeList recipes={recipes} />
      </Route>
      <Route exact path="/recipes/create">
        <RecipeForm />
      </Route>
      <Route exact path="/recipes/:recipeSlug/edit">
        <RecipeForm />
      </Route>
      <Route exact path="/recipes/:recipeSlug">
        <RecipeDetails />
      </Route>
    </Switch>
  ) : (
    "loading"
  );
};
export default RecipeRoutes;
