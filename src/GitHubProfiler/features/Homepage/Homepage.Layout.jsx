import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, FormGroup, Input } from "reactstrap";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

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
      <FormGroup>
        <h1>GitHub User Name</h1>
        <Input
          type="text"
          name="text"
          placeholder="Search your user here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormGroup>
      <Button onClick={onSearchUser}>Search</Button>
    </>
  );
};
export default HomePage;
