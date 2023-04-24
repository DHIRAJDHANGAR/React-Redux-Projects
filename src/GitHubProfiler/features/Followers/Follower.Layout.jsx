import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFollowerList } from "./Follower.Api";
import { RotatingLines } from "react-loader-spinner";
import { themeContext } from "../../../App";

const Followers = () => {
  const { url } = useParams();
  const [followList, setFollowList] = useState([]);
  const navigate = useNavigate();
  const darkTheme = useContext(themeContext);

  const themeStyles = {
    maxWidth: "400px",
    color: darkTheme ? "black" : "white",
    backgroundColor: darkTheme
      ? "rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))"
      : "black ",
    border: darkTheme
      ? "var(--bs-card-border-width) solid var(--bs-card-border-color)"
      : "1px solid white",
  };

  useEffect(() => {
    getFollowerList(url).then((data) => setFollowList(data));
  }, [url]);

  const onGetUser = (path) => {
    console.log("path: ", path);
    navigate(`/search/${path}`);
  };

  // console.log(followList);

  return followList.length == 0 ? (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  ) : (
    <>
      <div className="card-group">
        {followList.map((item) => {
          return (
            <div key={item.id}>
              <div className="card mb-3" style={themeStyles}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.avatar_url}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"> {item.login}</h5>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => onGetUser(item.login)}
                    >
                      Details
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
export default Followers;
