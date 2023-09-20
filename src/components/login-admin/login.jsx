import React from "react";
import axiosInstance from "../../config/axiosConfig";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AdminValidate from "../../Validation/AdminValidate";
import { useNavigate } from "react-router-dom";
import "./login.css";


function LoginAdmin() {
  const navigate = useNavigate();
  
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (object) => {
    try {
      const accessAdmin = await axiosInstance.post("/admin/login", object ,
        { headers: { Authorization: `Bearer ${Token}` } }
      );
      console.log("Success login:", accessAdmin);

      var Token = accessAdmin.data.token;
      var adminId = accessAdmin.data.adminId;
      localStorage.setItem("token", Token);
      localStorage.setItem("adminid", adminId);

      swal("Successfuly Login", "Email and Password is valid", "success", {
        button: false,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      swal("Unauthorized", "Email or password is invalid", "warning" , {
        button: false,
      });
    }
  };

  return (
    <section className="sec-log">
      <Formik
        initialValues={initialValues}
        validate={AdminValidate}
        onSubmit={handleSubmit}>
        {(props) => (
          <Form
            className="login row g-3 p-4 rounded my-3"
            onSubmit={props.handleSubmit}>
            <h2 className="text-center">Is Admin?</h2>

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

            <div className="col-12 text-center py-1">
              <button type="submit" className="btn btn-login p-3">LogIn</button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default LoginAdmin;
