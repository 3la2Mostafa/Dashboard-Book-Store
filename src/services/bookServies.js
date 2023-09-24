import axiosInstance from "../config/axiosConfig";

export const getBooks = async (page) => {
  try {
    const result = await axiosInstance.get(`/books?page=${page}&size=8`)
    console.log('result', result.data);
    console.log('page from service', page);
    return result.data;
  } catch (error) {
    console.log('error in getbooks service -> ', error)
  }
}