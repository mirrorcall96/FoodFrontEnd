import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import {
  addCatagory,
  updateCatagory,
} from "../../store/action/categoryActions";

const CatagoryForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const history = useHistory();
  let categorySlug = useParams().categorySlug;
  let myCategory;
  if (categorySlug) {
    myCategory = categories.find((category) => category.slug === categorySlug);
  } else {
    myCategory = {
      name: "",
      image: "",
    };
  }
  const [catagory, setCatagory] = useState(myCategory);
  const [image, setImage] = useState(myCategory.image);

  if (!myCategory) return <Redirect to="/catagories" />;

  const handelChange = (event) => {
    setCatagory({
      ...catagory,
      [event.target.name]: event.target.value,
    });
  };
  const handelChangeImage = (event) => {
    setCatagory({
      ...catagory,
      image: event.target.files[0],
    });
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    if (!categorySlug) dispatch(addCatagory(catagory));
    else dispatch(updateCatagory(catagory));
    handelRest();
    history.push("/categories");
  };
  const handelRest = () => {
    setCatagory({ name: "", image: "" });
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
              alt={catagory.name}
            />
          ) : (
            ""
          )}
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text">Name</span>
              <input
                value={catagory.name}
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
            {categorySlug ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default CatagoryForm;
