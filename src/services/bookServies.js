import axiosInstance from "../config/axiosConfig";

export const getBooks = async () => {
  try {
    const result = await axiosInstance.get(`/books`)
    console.log('result', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getbooks service -> ', error)
  }
}