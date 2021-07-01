import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
const IngredientItem = (props) => {
  //let dispatch = useDispatch();
  let categories = useSelector((state) => state.categories.categories);
  let category = categories.find(
    (category) => +category.id === +props.ingredient.categoryId
  ) ?? { slug: "" };
  return (
    <div className="col mb-4">
      <div className="card" style={{ width: "20rem" }}>
        <Link
          to={`/categories/${category.slug}/ingredients/${props.ingredient.slug}`}
        >
          <img
            className="card-img-top"
            src={props.ingredient.image}
            alt={props.ingredient.name}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.ingredient.name}</h5>
        </div>
      </div>
    </div>
  );
};
export default IngredientItem;
