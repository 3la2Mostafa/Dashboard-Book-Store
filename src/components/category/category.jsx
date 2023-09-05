import React from "react";
import { useSelector } from "react-redux";


function Category() {
  
  const categories = useSelector((state) => state.categories);
  console.log("Category ---->" , categories)

  return (
    <>
      <div className="text-bg-light p-2 text-center" style={{ marginLeft: '20%'}}>
        <h2 className="text-dark p-2">Add New Category</h2>
      </div>
      <form className="row g-3 p-5" style={{ marginLeft: '25%' }}>
        <div className="col-md-8">
          <input type="text" className="form-control py-2" id="category" name="category" placeholder="Add new category"/>
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary px-3">Add</button>
        </div>
      </form>
      <div className="text-bg-light p-2 text-center" style={{ marginLeft: '20%' , backgroundColor:"#900c3f"}}>
        <h2 className="text-dark p-2">Count of Category : {categories.length} </h2>
      </div>
      <div className="container p-4" style={{ marginLeft: '26%' , backgroundColor:"#900c3f" , marginTop:"3%"}}>
      <table className="table table-hover">
        <thead className="text-center">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {categories.map((category)=>{
            return(
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>
                  <button type="button" className="btn btn-outline-primary mx-2">Update</button>
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

export default Category;