import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { bookId , setBooks } from '../../store/reducer/booksSlice';
import { Link } from "react-router-dom";
import "../../style.css";
import Navbar from "../nav/nav";
import axiosInstance from "../../config/axiosConfig";
import { getBooks } from "../../services/bookServies";
import { useState } from "react";
import { useEffect } from "react";
import { Pagination } from "@mui/material";



function Books() {

  /////////////////////////////////////////////////////
  ///Select data of book from reducer
  const books = useSelector((state) => state.books.books);
  console.log(books);

  ////////////////////////////////////////////////
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

 console.log("---------------------------------------")
  const fetchBook = async (query) => {
    console.log("book ---------->" , books);

    getBooks(query).then((response) => {
        const { books, totalPages } = response;
        setTotalPages(totalPages);
        dispatch(setBooks(books));
        console.log("res paginate --->", response);
        console.log("page--->",page);
      })
      .catch((e) => {
        console.log("error in fetch book --> ",e);
      }
    );
  };

  useEffect(() => {
    fetchBook(page);
  }, [page]);


  ////////////////////////////////////////////////
  ///pagination

  const handlePageChange = (event, value) => {
    setPage(value);
    console.log("........................................");
    console.log(page);
    console.log(value);
  };

  const handleNext = () => {
    setPage(page + 1);
    console.log(page)
  };
    
  const handlePrev = () => {
    setPage(page - 1);
  };
  
  ////////////////////////////////////////////////
  ///Handle Delete Book
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

  ///////////////////////////////////////////////
  var dispatch = useDispatch();
  const updateBook = (ID) => {
    dispatch(bookId(ID));
  };

  return (
    <>
    <Navbar/>
      <div className="p-4 container-width" >
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
          <tbody className="text-center">
            {books.map((book)=>{
              return(
                <tr key={book._id} className="info-table">
                  <td><img className="rounded" src={book.bookImage}/></td>
                  <td className="text-left align-middle ">{book.bookTitle}</td>
                  <td className="text-left align-middle">{book.bookPages}</td>
                  <td className="text-left align-middle">{book.price}.00 EGP</td>
                  <td className="text-left align-middle">{book.bookStock}</td>
                  <td className="text-left align-middle"><p>{book.description}</p></td>
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
        {/* Pagination 1*/}
        <nav aria-label="Page navigation example"style={{marginLeft:"45%"}}>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link"  aria-label="Previous" disabled={page === 0} onClick={()=>handlePrev()}>
                <span aria-hidden="true" className="paginate">Prev</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" aria-label="Next" disabled={page == totalPages } onClick={()=>handleNext()}>
                <span aria-hidden="true" className="paginate">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Pagination 2*/}
        <div className="text-center" style={{marginLeft:"35%"}}>
        <Pagination count={totalPages} page={page}
        siblingCount={1}
        boundaryCount={1} onChange={handlePageChange}
        variant="outlined" color="secondary" />
        </div>
      </div>
    </>
  );
}

export default Books;
