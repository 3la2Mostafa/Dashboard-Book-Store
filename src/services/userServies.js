import axios from "../config/axiosConfig";

export const getUsers = async () => {
  try {
    const result = await axios.get(`/users`)
    console.log('result', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getUsers service -> ', error)
  }
}