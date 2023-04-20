import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RepoDetails = () => {
  const { url } = useParams();
  const [repoDetails, setRepoDetails] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${url}/repos`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setRepoDetails(data);
      });
  }, [url]);

  return (
    <p>
      RepoDetails Page :
      {repoDetails.map((item) => {
        return <li>{item.name}</li>;
      })}
    </p>
  );
};

export default RepoDetails;
