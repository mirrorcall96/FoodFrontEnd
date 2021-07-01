import { useParams, Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import IngredientList from "../ingredient/IngredientList";
const CatagoryDetail = (props) => {
  let categorySlug = useParams().categorySlug;
  let categories = useSelector((state) => {
    return state.categories.categories;
  });
  let thisCategory = categories.find(
    (catagory) => catagory.slug === categorySlug
  );

  let ingredients = useSelector((state) => state.ingredients.ingredients);
  ingredients = ingredients.filter(
    (ingredient) => +ingredient.categoryId === +thisCategory.id
  );
  if (!thisCategory) {
    return <Redirect to="/categories" />;
  }
  return (
    <>
      <Helmet>
        <title>{thisCategory.name}</title>
      </Helmet>

      <Link to="/categories/">back</Link>
      <div className="col mb-4">
        <div className="card" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={thisCategory.image}
            alt={thisCategory.name}
          />
          <div className="card-body">
            <h5 className="card-title">{thisCategory.name}</h5>
          </div>
          <Link
            className="btn btn-primary"
            to={`/categories/${thisCategory.slug}/edit`}
          >
            Edit
          </Link>
        </div>
      </div>
      <IngredientList ingredients={ingredients} />
      <Link to={"/categories/" + thisCategory.slug + "/ingredients/create"}>
        <button className="btn btn-dark"> Add Ingredient</button>
      </Link>
    </>
  );
};
export default CatagoryDetail;
