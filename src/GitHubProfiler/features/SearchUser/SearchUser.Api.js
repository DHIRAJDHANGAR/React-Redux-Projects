import { getRequest } from "../../services/http/http.service";

export const searchUserDetails = async (user) => {
  const url = `https://api.github.com/users/${user}`;
  const result = await getRequest(url);
  return result;
};
