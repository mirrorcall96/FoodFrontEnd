import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import { addRecipe, updateRecipe } from "../../store/action/recipeActions";
import MultiSelect from "react-multi-select-component";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const history = useHistory();
  let recipeSlug = useParams().recipeSlug;
  let myRecipe;
  if (recipeSlug) {
    myRecipe = recipes.find((recipe) => recipe.slug === recipeSlug);
  } else {
    myRecipe = {
      name: "",
      image: "",
      ingredients: "",
    };
  }
  const [recipe, setRecipe] = useState(myRecipe);
  const [image, setImage] = useState(myRecipe.image);
  const options = ingredients.map((ingredient) => ({
    label: ingredient.name,
    value: ingredient.id,
  }));
  let myMap = {};
  ingredients.forEach((ingredient) => (myMap[ingredient.id] = ingredient.name));
  if (!myRecipe) return <Redirect to="/recipes" />;

  const handelChange = (event) => {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
    });
  };
  const handelChangeImage = (event) => {
    setRecipe({
      ...recipe,
      image: event.target.files[0],
    });
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const handelChangeSelect = (event) => {
    setRecipe({
      ...recipe,
      ingredients: event

        .map((a) => +a.value)
        .filter((a) => +a !== 0)
        .join(","),
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    if (!recipeSlug) dispatch(addRecipe(recipe));
    else dispatch(updateRecipe(recipe));
    handelRest();
    history.push("/recipes");
  };
  const handelRest = () => {
    setRecipe({ name: "", image: "" });
  };
  console.log(myMap);
  return (
    <div className="d-lg-flex p-4 justify-content-lg-center">
      <div className="jumbotron">
        <form onSubmit={handelSubmit}>
          {image ? (
            <img
              className="mx-auto d-block"
              width="250px"
              style={{ paddingBottom: "20px" }}
              src={image}
              alt={recipe.name}
            />
          ) : (
            ""
          )}
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text">Name</span>
              <input
                value={recipe.name}
                name="name"
                type="text"
                className="form-control"
                onChange={handelChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text">Image</span>
              <input
                name="image"
                type="file"
                className="form-control"
                onChange={handelChangeImage}
              />
            </div>
          </div>
          <MultiSelect
            options={options}
            value={recipe.ingredients.split(",").map((a) => ({
              label: !a ? a : myMap[+a],
              value: a,
            }))}
            onChange={handelChangeSelect}
            hasSelectAll={false}
          />
          <button type="submit" className="btn btn-primary">
            {recipeSlug ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default RecipeForm;
