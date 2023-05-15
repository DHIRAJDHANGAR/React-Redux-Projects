import { useParams } from "react-router-dom";

const CartDetails = () => {
  const { id } = useParams();
  console.log({ id });
  return <div>I'm CartDetails</div>;
};
export default CartDetails;
