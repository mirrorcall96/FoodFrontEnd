import { useParams, Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
const IngredientDetail = (props) => {
  let ingredientSlug = useParams().ingredientSlug;
  let ingredients = useSelector((state) => {
    return state.ingredients.ingredients;
  });
  let thisIngredient = ingredients.find(
    (ingredient) => ingredient.slug === ingredientSlug
  );

  let categories = useSelector((state) => state.categories.categories);
  let category = categories.find(
    (category) => +category.id === +thisIngredient.categoryId
  ) ?? { slug: "" };
  if (!thisIngredient) {
    return <Redirect to="/ingredients" />;
  }
  return (
    <>
      <Helmet>
        <title>{thisIngredient.name}</title>
      </Helmet>
      <Link to="/ingredients/">back</Link>
      <div className="col mb-4">
        <div className="card" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={thisIngredient.image}
            alt={thisIngredient.name}
          />
          <div className="card-body">
            <h5 className="card-title">{thisIngredient.name}</h5>
          </div>
          <Link
            className="btn btn-primary"
            to={`/categories/${category.slug}/ingredients/${thisIngredient.slug}/edit`}
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
};
export default IngredientDetail;
