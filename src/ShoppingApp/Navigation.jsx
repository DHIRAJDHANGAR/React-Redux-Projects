import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CartPage from "./CartPage/CartPage";
import CartDetails from "./CartDetails/cartDetails";
import Payment from "./Payment/Payment";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cartlist",
      element: <CartPage />,
    },
    {
      path: "/cartdetails/:id",
      element: <CartDetails />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "*",
      element: <div> 404 Page Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Navigation;
