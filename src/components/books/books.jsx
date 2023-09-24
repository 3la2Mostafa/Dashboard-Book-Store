import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { bookId } from '../../store/reducer/booksSlice';
import { Link } from "react-router-dom";
import "../../style.css";
import Navbar from "../nav/nav";
import axiosInstance from "../../config/axiosConfig";


function Books() {

  const books = useSelector((state) => state.books.books);
  console.log("Books---->" , books);
  
  const deleteBook  = (bookId)=>{
    axiosInstance.delete(`/books/${bookId}`).then(
      response => { 
        swal("Delete book" , "Book has been deleted successfully" ,"success" , {button:false});
        console.log('Book deleted successfully', response);
      }
    ).catch(error => {
      console.log('Error deleting book', error);
    });
  };

  const updateBook = (ID) => {
    dispatch(bookId(ID));
  };

  return (
    <>
    <Navbar />
    <div className="p-4 container-width">
        <table className="table table-hover">
          <thead className=" text-center" >
            <tr className="rounded">
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Pages</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Details</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-center" >
            {books.map((book)=>{
              return(
                <tr key={book._id} className="info-table">
                  <td><img className="rounded" src={book.bookImage}/></td>
                  <td>{book.bookTitle}</td>
                  <td>{book.bookPages}</td>
                  <td>{book.price}.00 EGP</td>
                  <td>{book.bookStock}</td>
                  <td><p>{book.description}</p></td>
                  <td>
                    <Link to={`/viewbooks/${book._id}`}>
                      <button type="button" className="btn">View</button>
                    </Link>
                    <Link to={`/editbook/${book._id}`}>
                      <button type="button" className="btn" onClick={()=>updateBook(book._id)}>Update</button>
                    </Link>
                    <button type="button" className="btn" onClick={()=>deleteBook(book._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  </>
  );
}

export default Books;
