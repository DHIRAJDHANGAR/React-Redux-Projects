import { useSelector } from "react-redux";
import CartList from "./CartList";
import CartNavbar from "./CartNavbar";

const CartPage = () => {
  const result = useSelector((state) => state.listReducer.result);
  console.log({ result });
  return (
    <>
      <CartNavbar />
      <CartList />
    </>
  );
};
export default CartPage;
