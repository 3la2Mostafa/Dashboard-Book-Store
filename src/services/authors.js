import axios from "../config/axiosConfig";

export const getAuthors = async () => {
    try{
        const result = await axios.get('/authors');
        const authors = result.data
        return authors;
        console.log('authors from author service --->',authors)
    }catch (error) {
        console.log('error in getAuthors service -> ', error)
      }
}