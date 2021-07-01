import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import {
  addIngredient,
  updateIngredient,
} from "../../store/action/ingredientActions";

const IngredientForm = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  let categorySlug = useParams().categorySlug;
  let categories = useSelector((state) => state.categories.categories);
  let categoryId = categories.find(
    (category) => category.slug === categorySlug
  ).id;
  const history = useHistory();
  let ingredientSlug = useParams().ingredientSlug;
  let myIngredient;
  if (ingredientSlug) {
    myIngredient = ingredients.find(
      (ingredient) => ingredient.slug === ingredientSlug
    );
  } else {
    myIngredient = {
      name: "",
      image: "",
    };
  }

  const [ingredient, setingredient] = useState({
    ...myIngredient,
    categoryId: +categoryId,
  });
  const [image, setImage] = useState(myIngredient.image);

  if (!myIngredient) return <Redirect to="/catagories" />;

  const handelChange = (event) => {
    setingredient({
      ...ingredient,
      [event.target.name]: event.target.value,
    });
  };
  const handelChangeImage = (event) => {
    setingredient({
      ...ingredient,
      image: event.target.files[0],
    });
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    if (!ingredientSlug) dispatch(addIngredient(ingredient));
    else dispatch(updateIngredient(ingredient));
    handelRest();
    history.push("/ingredients");
  };
  const handelRest = () => {
    setingredient({ name: "", image: "" });
  };
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
              alt={ingredient.name}
            />
          ) : (
            ""
          )}
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text">Name</span>
              <input
                value={ingredient.name}
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
          <button type="submit" className="btn btn-primary">
            {ingredientSlug ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default IngredientForm;
