import axios from "axios";
export const getRequest = async (url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    return false;
  }
};
