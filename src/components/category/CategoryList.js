import { useState } from "react";
import { Helmet } from "react-helmet";
import CategoryItem from "./CategoryItem.js";
//import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const CatagoryList = (props) => {
  let categories = props.categories;
  const [query, setQuery] = useState("");
  let categoriesList = categories.map((catagory) =>
    catagory.name.toLowerCase().includes(query.toLowerCase()) ? (
      <CategoryItem catagory={catagory} key={catagory.id} />
    ) : (
      ""
    )
  );
  return (
    <>
      <Helmet>
        <title>All Categories</title>
      </Helmet>
      <input
        value={query}
        className="form-control"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="row">{categoriesList}</div>
      <br />
      <Link to="categories/create">
        <button className="btn btn-dark"> Add Catagory</button>
      </Link>
    </>
  );
};
export default CatagoryList;
