import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadRepoList, searchUserDetails } from "./SearchUser.Api";
import { RotatingLines } from "react-loader-spinner";
import { themeContext } from "../../../App";

const SearchUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [repo, setRepo] = useState([]);
  const theme = useContext(themeContext);

  const themeStyles = {
    color: theme ? "black" : "white",
    backgroundColor: theme
      ? "rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))"
      : "black ",
    textDecoration: "none",
  };

  const themeStylesCard = {
    color: theme ? "black" : "white",
    backgroundColor: theme ? "white" : "black",
    border: theme
      ? "var(--bs-card-border-width) solid var(--bs-card-border-color)"
      : "1px solid white",
  };

  useEffect(() => {
    searchUserDetails(id).then((data) => setDetails(data));
    loadRepoList(id).then((list) => setRepo(list));
  }, [id]);

  const onGetFollowers = (userID) => {
    navigate(`/followers/${userID}`);
  };

  const onGetRepoDetails = (repoName) => {
    navigate(`/reposDetails/${repoName}`);
  };

  const goToHomePage = () => {
    navigate(`/`);
  };
  // console.log(details);

  return repo.length === 0 ? (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  ) : (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 p-3 mb-2">
            <div className="card" style={themeStylesCard}>
              <img
                src={details.avatar_url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{details.name}</h5>
                <p className="card-text">{id}</p>
                <p className="card-text"> {details.bio}</p>
                <button
                  type="button"
                  className="btn btn-link"
                  style={{ textDecoration: "none" }}
                  onClick={() => onGetFollowers(id)}
                >
                  {details.followers} Followers
                </button>
                <button
                  type="button"
                  className="btn btn-link"
                  style={{ textDecoration: "none" }}
                >
                  {details.following} Following
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-9 p-3" style={themeStyles}>
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid" style={themeStyles}>
                <a className="navbar-brand" style={themeStyles}>
                  {details.name} Repositories
                </a>

                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  onClick={() => goToHomePage()}
                >
                  HomePage
                </button>
              </div>
            </nav>
            <ol className="list-group list-group-numbered">
              {repo.map((elem) => {
                return (
                  <li
                    style={themeStyles}
                    className="list-group-item d-flex justify-content-between align-items-start"
                    key={elem.id}
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        <button
                          type="button"
                          className="btn btn-link"
                          style={themeStyles}
                          onClick={() => onGetRepoDetails(elem.name)}
                        >
                          {elem.name}
                        </button>
                      </div>
                    </div>
                    <span className="badge bg-primary rounded-pill">
                      {elem.visibility}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchUser;
