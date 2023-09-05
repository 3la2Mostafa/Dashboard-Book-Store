import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Books() {

  const books = useSelector((state) => state.books);
  console.log("Books---->" , books);

  return (
    <>
      <div className="container p-4" style={{ marginLeft: '25%' , backgroundColor:"#900c3f"}}>
      <table className="table table-hover">
        <thead className="text-center mb-2">
          <tr>
            <th scope="col">Img</th>
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
              <tr key={book._id}>
                <td><img src={book.bookImage} height={100}/></td>
                <td>{book.bookTitle}</td>
                <td>{book.bookPages}</td>
                <td>{book.price}</td>
                <td>{book.bookStock}</td>
                <td>{book.description}</td>
                <td>
                  <Link to={`/viewbooks/${book._id}`}>
                    <button type="button" className="btn btn-outline-primary mb-1">View</button>
                  </Link>
                  <button type="button" className="btn btn-outline-primary mb-1">Update</button>
                  <button type="button" className="btn btn-outline-primary">Delete</button>
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