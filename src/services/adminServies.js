import axios from "../config/axiosConfig";

export const getAdmins = async () => {
  try {
    const result = await axios.get(`/admins`)
    console.log('result', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getAdmins service -> ', error)
  }
}