import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardLink,
} from "reactstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchUserDetails } from "./SearchUser.Api";

const SearchUser = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    searchUserDetails(id).then((data) => setProfile(data));
  }, [id]);

  const onGetFollowers = (url) => {
    console.log("ID : ", url);
    navigate(`/followers/${url}`);
  };
  const onGetRepoDetails = (url) => {
    navigate(`/repo/${url}`);
  };

  return (
    <>
      <div>
        <Card>
          <CardImg top style={{ width: "200px" }} src={profile.avatar_url} />
          <CardBody>
            <CardTitle>Name : {profile.name}</CardTitle>
            <CardSubtitle>ID : {id}</CardSubtitle>
            <CardText>Bio : {profile.bio}</CardText>
            <CardLink>RepoDetails : {profile.repos_url}</CardLink>
            <Button onClick={() => onGetFollowers(id)}>Followers</Button>
            <Button onClick={() => onGetRepoDetails(id)}>RepoDetails</Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default SearchUser;
