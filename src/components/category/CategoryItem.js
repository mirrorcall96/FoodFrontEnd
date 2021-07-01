import { Link } from "react-router-dom";
const CatagoryItem = (props) => {
  return (
    <>
      <div className="col mb-4">
        <div className="card" style={{ width: "20rem" }}>
          <Link to={`/categories/${props.catagory.slug}`}>
            <img
              className="card-img-top"
              src={props.catagory.image}
              alt={props.catagory.name}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{props.catagory.name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default CatagoryItem;
