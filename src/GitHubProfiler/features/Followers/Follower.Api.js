import { getRequest } from "../../services/http/http.service";

export const getFollowerList = async (user) => {
  const url = `https://api.github.com/users/${user}/followers`;
  const result = await getRequest(url);
  return result;
};
