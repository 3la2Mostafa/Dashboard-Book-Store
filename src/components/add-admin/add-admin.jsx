import React from "react";
import axiosInstance from "../../config/axiosConfig";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AdminValidate from "../../Validation/AdminValidate";
import Navbar from "../nav/nav";


function AddAdmin() {
  
  const initialValues = {
    email : "",
    password : ""
  };

  const handleSubmit = async (object) => {
    try {

      const createdAdmin = await axiosInstance.post("/admin", object);
      console.log("Success creating book:", createdAdmin);
      swal("Added Admins" , "The admin has been added successfully" ,"success" , {button:false});
    } catch (error) {
      console.error("Error:", error);
      swal("Try Again", "Added admin is rejected " ,"warning");
    } 
  };

  return (
    <>
      <Navbar/>
      <Formik
        initialValues={initialValues}
        validate={AdminValidate}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form
            className="add-book row g-3 p-2 rounded my-3"
            onSubmit={props.handleSubmit}>
            <h2 className="text-center">Add Admin</h2>

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email</label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={props.handleChange}
                value={props.values.email}
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="col-12">
              <label htmlFor="password" className="form-label">Password</label>
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={props.handleChange}
                value={props.values.password}
              />
              <ErrorMessage name="password" component="div" />
            </div>
            {/* <div className="col-12">
              <label htmlFor="conpassword" className="form-label">Confirm Password</label>
              <Field
                type="password"
                className="form-control"
                id="conpassword"
                name="conpassword"
                placeholder="Enter your password"
                onChange={props.handleChange}
                value={props.values.confpass}
              />
              <ErrorMessage name="confpass" component="div" />
            </div> */}

            <div className="col-12 text-center py-1">
              <button type="submit" className="btn btn-primary p-3">LogIn</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddAdmin;
