import { useState } from "react";
import { Helmet } from "react-helmet";
import IngredientItem from "./IngredientItem.js";
//import SearchBar from "./SearchBar";

const IngredientList = (props) => {
  let ingredients = props.ingredients;
  const [query, setQuery] = useState("");
  let ingredientsList = ingredients.map((ingredient) =>
    ingredient.name.toLowerCase().includes(query.toLowerCase()) ? (
      <IngredientItem ingredient={ingredient} key={ingredient.id} />
    ) : (
      ""
    )
  );
  return (
    <>
      <Helmet>
        <title>All Ingredients</title>
      </Helmet>
      <input
        value={query}
        className="form-control"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="row">{ingredientsList}</div>
      <br />
    </>
  );
};
export default IngredientList;
