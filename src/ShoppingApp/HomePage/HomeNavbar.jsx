import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCard, showList } from "../Reducer/ShoppingAppSlice";

const HomeNavbar = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((response) => {
        //handle response
        return response.json();
      })
      .then((data) => {
        //handle data
        setProductList(data);
      })
      .catch((error) => {
        //handle error
        console.log(error);
      });
  }, []);
  if (productList.length !== 0) {
    dispatch(showList(productList));
  }

  const onCartList = () => {
    navigate(`/cartlist`);
  };
  const onPaymentList = () => {
    navigate(`/payment`);
  };
  const onGoCardDetails = (id) => {
    navigate(`/cartdetails/${id}`);
  };
  const addToCart = (id) => {
    const cartItem = productList.filter((item) => item.id === id);
    dispatch(addToCard(cartItem));
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">ShoppingApp</a>
          <div className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={onCartList}
            >
              CartList
            </button>
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={onPaymentList}
            >
              Payment
            </button>
          </div>
        </div>
      </nav>
      <div>
        {productList.map((item) => {
          return (
            <div key={item.id}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      width="100px"
                      height="auto"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"> {item.title}</h5>
                      <p className="card-text">Price : {item.price}</p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => addToCart(item.id)}
                    >
                      AddToCart
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => onGoCardDetails(item.id)}
                    >
                      CardDetails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default HomeNavbar;
