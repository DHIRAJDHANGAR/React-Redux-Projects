import { useSelector } from "react-redux";

const CardList = () => {
  const productList = useSelector((state) => {
    state.listReducer.value;
  });
  console.log(productList);
  return <div>productList</div>;
};
export default CardList;
