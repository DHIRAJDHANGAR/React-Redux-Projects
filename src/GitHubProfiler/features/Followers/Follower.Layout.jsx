import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFollowerList } from "./Follower.Api";

const Followers = () => {
  const { url } = useParams();
  const [followList, setFollowList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFollowerList(url).then((data) => setFollowList(data));
  }, [url]);

  const onGetUser = (path) => {
    console.log("path: ", path);
    navigate(`/search/${path}`);
  };

  return (
    <div>
      {followList.map((item) => {
        return (
          <Card key={item.id}>
            <CardImg top style={{ width: "200px" }} src={item.avatar_url} />
            <CardBody>
              <CardTitle>Name : {item.name}</CardTitle>
              <CardSubtitle>{item.login}</CardSubtitle>
              <Button onClick={() => onGetUser(item.login)}>Search</Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};
export default Followers;
