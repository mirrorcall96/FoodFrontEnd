import CategoryRoutes from "./routes/CategoryRoutes";
import IngredientRoutes from "./routes/IngredientRoutes";
import RecipeRoutes from "./routes/RecipeRoutes";
import NavList from "./components/NavList";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router";
function App() {
  return (
    <>
      <NavList />
      <CategoryRoutes />
      <IngredientRoutes />
      <RecipeRoutes />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
