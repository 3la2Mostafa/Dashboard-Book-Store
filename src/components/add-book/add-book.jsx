import React from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import axiosInstance from "../../config/axiosConfig";
import BookValidat from "../../Validation/BookValidate";
import "./add-book.css";


const AddBook = () => {
  const initialValues = {
    bookTitle: "",
    publishedYear: "",
    language: "",
    price: "",
    bookPages: "",
    author: "",
    category: "",
    description: "",
    bookStock: "",
    bookImage: "",
  };
  // const submit = (values) => {
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     console.log("fatma");
  //     console.log(values);
  //   }, 1000);
  // };
  const handleSubmit = async (object) => {
    console.log(object);
    try {
      const bookObject = await axiosInstance.post("/books", object);
      console.log("success req object of book" , bookObject);
    } catch (err) {
      console.log("error in form" , er)
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={BookValidat}
      // validationSchema={BookSchema}
      // onSubmit={submit}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form
          className="add-book row g-3 p-2 rounded my-3"
          onSubmit={props.handleSubmit}>
          <h2 className="text-center">Add Book</h2>
          <div className="col-md-6">
            <label htmlFor="bookTitle" className="form-label">Title</label>
            <Field
              type="text"
              className="form-control"
              id="bookTitle"
              name="bookTitle"
              placeholder="Enter title of book"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.bookTitle}
            />
            <ErrorMessage name="bookTitle" component="div" />
          </div>
          <div className="col-md-6">
            <label htmlFor="publishedYear" className="form-label">Published Year</label>
            <Field
              type="number"
              className="form-control"
              id="publishedYear"
              name="publishedYear"
              placeholder="Enter published Year of book"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.publishedYear}
            />
            <ErrorMessage name="publishedYear" component="div" />
          </div>
          <div className="col-md-6">
            <label htmlFor="language" className="form-label">Language</label>
            <Field
              type="text"
              className="form-control"
              id="language"
              name="language"
              placeholder="Enter book language"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.language}
            />
            <ErrorMessage name="language" component="div" />
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Price</label>
            <Field
              type="number"
              className="form-control"
              id="price"
              name="price"
              placeholder="Enter price of book"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.price}
            />
            <ErrorMessage name="price" component="div" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bookStock" className="form-label">Book Stock</label>
            <Field
              type="number"
              className="form-control"
              id="bookStock"
              name="bookStock"
              placeholder="Enter available amount of stock"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.bookStock}
            />
            <ErrorMessage name="bookStock" component="div" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bookPages" className="form-label">Num-Pages</label>
            <Field
              type="number"
              className="form-control"
              id="bookPages"
              name="bookPages"
              placeholder="Enter num-Pages of book"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.bookPages}
            />
            <ErrorMessage name="bookPages" component="div" />
          </div>
          <div className="col-md-6">
            <label htmlFor="author" className="form-label">Author</label>
            <Field
              type="text"
              className="form-control"
              id="author"
              name="author"
              placeholder="Enter author name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.author}
            />
            <ErrorMessage name="author" component="div" />
          </div>
          <div className="col-md-6">
            <label htmlFor="category" className="form-label">Category</label>
            <Field
              type="text"
              className="form-control"
              id="category"
              name="category"
              placeholder="Enter a category of book"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.category}
            />
            <ErrorMessage name="category" component="div" />
          </div>
          <div className="col-12">
            <label htmlFor="description" className="form-label">Description</label>
            <Field
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter book description"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
            />
            <ErrorMessage name="description" component="div" />
          </div>
          <div className="col-12">
            <label htmlFor="bookImage" className="form-label">Cover Image</label>
            <Field
              type="file"
              className="form-control"
              id="bookImage"
              name="bookImage"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.bookImage}
            />
            <ErrorMessage name="bookImage" component="div" />
          </div>

          <div className="col-12 text-center py-1">
            <button type="submit" className="btn btn-primary p-3">Add Book</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddBook;
