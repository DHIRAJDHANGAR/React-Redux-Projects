import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../features/Homepage/Homepage.Layout";
import SearchUser from "../features/SearchUser/SearchUser.Layout";
import RepoDetails from "../features/RepoDetails/RepoDetails.Layout";
import Followers from "../features/Followers/Follower.Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search/:id",
    element: <SearchUser />,
  },
  {
    path: "/reposDetails/:repoName",
    element: <RepoDetails />,
  },
  {
    path: "/followers/:url",
    element: <Followers />,
  },
  {
    path: "*",
    element: <div>404 Page Not Found</div>,
  },
]);

const Navigations = () => {
  return <RouterProvider router={router} />;
};
export default Navigations;
