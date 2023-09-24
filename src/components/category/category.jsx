import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../config/axiosConfig";
import Navbar from "../nav/nav";


function Category() {

  const CatValidate = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = "Name of category is Required";
    } else if (values.name.length < 3) {
      errors.name = "Must be at least 3 characters";
    }

    return errors;
  };

  const initialValues = {
    name : ""
  };
  
  const categories = useSelector((state) => state.categories);
  console.log("Category ---->" , categories);

  const deleteCategory  = (catId)=>{
    axiosInstance.delete(`/categories/${catId}`).then(
      response => { 
        swal("Delete category" , "Category has been deleted successfully" ,"success" , {button:false});
        console.log('Category deleted successfully', response);
      }
    ).catch(error => {
      console.log('Error deleting category', error);
    });
  };

  const handleSubmit = async (object) => {
    try {
      const createdCat = await axiosInstance.post("/categories", object);
      console.log("Success creating category:", createdCat);
      swal("Added category" , "The category has been added successfully" ,"success" , {button:false});
    } catch (error) {
      console.error("Error:", error);
      swal("Try Again", "Added book is rejected " ,"warning");
    } 
  };

  return (
    <>
      <Navbar/>
      <div className="text-bg-light p-2 text-center" style={{ marginLeft: '20%'}}>
        <h2 className="text-dark p-2">Add New Category</h2>
      </div>
      <Formik initialValues={initialValues} validate={CatValidate} onSubmit={handleSubmit}>
      {(props) => (
        <Form className="row p-5" style={{ marginLeft: '40%' , maxWidth:"60%"}} onSubmit={props.handleSubmit}>
          <div className="col-md-8">
            <input type="text" className="form-control" id="category" name="name" placeholder="Add new category"
            onChange={props.handleChange}
            value={props.values.name}/>
            <ErrorMessage name="name" component="div" className="mx-5"/>
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary px-3">Add</button>
          </div>
        </Form>
      )}
      </Formik>

      <div className="text-bg-light p-2 text-center" style={{ marginLeft: '20%' }}>
        <h2 className="text-dark p-2">Count of Category : {categories.length} </h2>
      </div>
      <div className="p-2 container-width" >
      <table className="table table-hover m-0">
        <thead className="text-center rounded">
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
                  <button type="button" className="btn mx-2">Update</button>
                  <button type="button" className="btn" onClick={()=>deleteCategory(category._id)}>Delete</button>
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