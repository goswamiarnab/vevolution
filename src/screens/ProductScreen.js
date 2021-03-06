import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen(props) {
  const product = data.products.find(
    (x) => x._id === parseInt(props.match.params.id)
  );
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      {/* <Link to="/">Back to the result</Link> */}
      <div className="row top">
        <div className="col-2">
          <img className="ps" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Pirce : € {product.price}</li>
            <li>
              Food Type:<p>{product.category}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">€ {product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.stockCount > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Sold Out</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
