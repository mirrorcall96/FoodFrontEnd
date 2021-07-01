import { useState } from "react";
import { Helmet } from "react-helmet";
import RecipeItem from "./RecipeItem.js";
//import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const RecipeList = (props) => {
  let recipes = props.recipes;
  const [query, setQuery] = useState("");
  let recipesList = recipes.map((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase()) ? (
      <RecipeItem recipe={recipe} key={recipe.id} />
    ) : (
      ""
    )
  );
  return (
    <>
      <Helmet>
        <title>All Recipes</title>
      </Helmet>
      <input
        value={query}
        className="form-control"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="row">{recipesList}</div>
      <br />
      <Link to="recipes/create">
        <button className="btn btn-dark"> Add Recipe</button>
      </Link>
    </>
  );
};
export default RecipeList;
