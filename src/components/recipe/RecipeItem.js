import { Link } from "react-router-dom";
const RecipeItem = (props) => {
  return (
    <>
      <div className="col mb-4">
        <div className="card" style={{ width: "20rem" }}>
          <Link to={`/recipes/${props.recipe.slug}`}>
            <img
              className="card-img-top"
              width="50px"
              src={props.recipe.image}
              alt={props.recipe.name}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{props.recipe.name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecipeItem;
