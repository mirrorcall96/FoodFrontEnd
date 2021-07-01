import { useParams, Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import IngredientList from "../ingredient/IngredientList";
const RecipeDetail = (props) => {
  let recipeSlug = useParams().recipeSlug;
  let recipes = useSelector((state) => {
    return state.recipes.recipes;
  });
  let ingredients = useSelector((state) => {
    return state.ingredients.ingredients;
  });
  let thisRecipe = recipes.find((recipe) => recipe.slug === recipeSlug);

  if (!thisRecipe) {
    return <Redirect to="/recipes" />;
  }
  let thisRecipeIngredients = thisRecipe.Ingredients.map((a) => {
    console.log(a);
    return a.id;
  });
  console.log(thisRecipeIngredients);
  return (
    <>
      <Helmet>
        <title>{thisRecipe.name}</title>
      </Helmet>

      <Link to="/recipes/">back</Link>
      <div className="col mb-4">
        <div className="card" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={thisRecipe.image}
            alt={thisRecipe.name}
          />
          <div className="card-body">
            <h5 className="card-title">{thisRecipe.name}</h5>
          </div>
        </div>
      </div>
      {thisRecipeIngredients ? (
        <IngredientList
          ingredients={ingredients.filter((a) =>
            thisRecipeIngredients.includes(a.id)
          )}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default RecipeDetail;
