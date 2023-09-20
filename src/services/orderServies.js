import axios from "../config/axiosConfig";

export const getOrders = async () => {
  try {
    const result = await axios.get(`/orders`)
    console.log('result', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getorders service -> ', error)
  }
}