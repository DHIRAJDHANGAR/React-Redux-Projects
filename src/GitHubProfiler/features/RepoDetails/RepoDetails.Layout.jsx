import { useParams } from "react-router-dom";

const RepoDetails = () => {
  const { repoName } = useParams();

  return <p>RepoDetails Page : {repoName}</p>;
};

export default RepoDetails;
