import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, FormGroup, Input } from "reactstrap";
import { themeContext } from "../../../App";
import styled from "styled-components";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const theme = useContext(themeContext);

  document.body.style.background = theme ? "white" : "black";

  const themeStyles = {
    color: theme ? "black" : "white",
  };

  const onSearchUser = () => {
    if (!search) {
      toast.error("🦄 Please enter a user name to search!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    navigate(`/search/${search}`);
  };

  return (
    <>
      <div>
        <FormGroup>
          <img
            src="https://github.githubassets.com/images/modules/open_graph/github-mark.png"
            width={"200px"}
          />
          <h1>GitHub</h1>
          <Input
            type="text"
            name="text"
            placeholder="Search your user here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={themeStyles}
          />
        </FormGroup>
        <Button color="primary" onClick={onSearchUser}>
          Search
        </Button>
      </div>
    </>
  );
};
export default HomePage;
