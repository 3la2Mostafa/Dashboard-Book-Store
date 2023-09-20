import { Form, Formik, ErrorMessage, Field } from "formik";
import axiosInstance from "../../config/axiosConfig";
import {  useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import React,{useState,useEffect} from "react";
import Select from 'react-select';
import swal from "sweetalert";
import Axios from "axios";
import "./edit-book.css";

function EditBook() {
  const { id } = useParams();
  const selectedBook = useSelector((state) =>state.books.books.find((book) => book._id === id));


  const [authors, setAuthors] = useState([]);
  const authorsXD = useSelector((state) =>state.authors.authors);


  const [categories, setCategories] = useState([]);
  const categoriesXD = useSelector((state) =>state.categories);


  useEffect(() => {
    setAuthors(authorsXD.map(author => ({ value: author._id, label: author.name })));
    setCategories(categoriesXD.map(category => ({ value: category._id, label: category.name })));
  }, [authorsXD,categoriesXD]);

  const bookData ={
    bookTitle:     selectedBook.bookTitle ,
    publishedYear: selectedBook.publishedYear ,
    language:      selectedBook.language ,
    price:         selectedBook.price ,
    bookPages:     selectedBook.bookPages ,
    author:        selectedBook.author ,
    category:      selectedBook.category ,
    description:   selectedBook.description ,
    bookStock:     selectedBook.bookStock ,
    bookImage:     selectedBook.bookImage ,
  }

  const [imageSelected, setImageSelected] = useState(null);
  

  const [values,setValues]= useState(bookData);
  
  console.log("values out ----->", values);


  const handleSubmit = async () => {
    console.log("values in ----->", values);

    try {
      if(imageSelected === null){ //if user not select a new image yet add the existance image
         const updateBook = await axiosInstance.patch(`/books/${id}`,values);
         console.log("Success updatedBook book:", updateBook);

      }else{// if user select image add a new image instadde of exist
        setImageSelected(values.bookImage)

        const formData = new FormData();
        formData.append('file', imageSelected); 
        formData.append('upload_preset', 'uqgi54ug'); 
                          
        const response = await Axios.post("https://api.cloudinary.com/v1_1/dxghziwrc/image/upload", formData);
        const imageUrl = response.data.secure_url; 
  
        const bookObject = {...values,bookImage: imageUrl, author: values.author._id};
        const createdBook = await axiosInstance.patch(`/books/${id}`, bookObject);
        console.log("Success creating book:", createdBook);
      }
      swal(" updated book" , "The book has been added successfully" ,"success" , {button:false});
    } catch (error) {
      console.log("Error:", error);
      swal("Try Again", "Added book is rejected " ,"warning");
    } 
  };
  return (
    <>
    <Formik
      initialValues={{values,bookImage:""}}
      enableReinitialize={true} 
      onSubmit={handleSubmit}
    >

      {(props) => 
          <Form className="add-book row g-3 p-2 rounded my-3" onSubmit={props.handleSubmit}>
            <h2 className="text-center">Update Book</h2>

            <div className="col-md-6">
              <label htmlFor="bookTitle" className="form-label">Title</label>
              <Field
                type="text"
                className="form-control"
                id="bookTitle"
                name="bookTitle"
                placeholder="Enter title of book"
                onBlur={props.handleBlur}
                onChange={(e) => {
                  props.handleChange(e);
                  setValues({ ...values, bookTitle: e.target.value }); // Update bookTitle in values state
                }}
                value={values.bookTitle }
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
                onBlur={props.handleBlur}
                onChange={(e) => {
                  props.handleChange(e);
                  setValues({ ...values, publishedYear: e.target.value });
                }} 
                value={values.publishedYear}
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
                onBlur={props.handleBlur}
                onChange={(e) => {
                  props.handleChange(e);
                    setValues({ ...values, language: e.target.value });
                }}
                value={values.language}
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
                onBlur={props.handleBlur}
                onChange={(e) => {
                  props.handleChange(e);
                    setValues({ ...values, price: e.target.value});
                }}
                value={values.price}
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
                onBlur={props.handleBlur}
                onChange={(e) => {
                  props.handleChange(e);
                  setValues({ ...values, bookStock: e.target.value });
                }}
                value={values.bookStock}
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
                onBlur={props.handleBlur}
                onChange={(e) => {
                  props.handleChange(e);
                  setValues({ ...values, bookPages: e.target.value });
                }}
                value={values.bookPages}
              />
              <ErrorMessage name="bookPages" component="div" />
            </div>
            <div className="col-md-6">
              <label htmlFor="author" className="form-label">Author</label>
              <Select
                  styles={{ container: (provided) => ({ ...provided, width: '300px', margin: '0 auto' }) }}
                  value={authors.find(option => option.label === props.values.author)}
                  onChange={(selectedOption) => {
                    setValues({ ...values, author:{ _id: selectedOption.value, name: selectedOption.label } });
                }}
                  options={authors}
                  placeholder={values.author.name}
              />
              <ErrorMessage name="author" component="div" />
            </div>
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">Category</label>
              <Select
                  styles={{ container: (provided) => ({ ...provided, width: '300px', margin: '0 auto' }) }}
                  value={categories.find(option => option.label === props.values.category)}
                  onChange={(selectedOption) => {
                  setValues({ ...values, category:{...values.category,_id:selectedOption.value,name:selectedOption.label}})
                }}
                  options={categories}
                  placeholder={values.category.name}
              />
              {/* <Field
                type="text"
                className="form-control"
                id="category"
                name="category"
                placeholder="Enter a category of book"
                onBlur={props.handleBlur}
                onChange={(e) => {
                  props.handleChange(e);
                  setValues({ ...values, category: e.target.value }); 
                }}
                value={values.category.name}
              /> */}
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
                onBlur={props.handleBlur}
                onChange={(e) => {
                  props.handleChange(e);
                  setValues({ ...values, description: e.target.value });
                }}
                value={values.description}
              />
              <ErrorMessage name="description" component="div" />
            </div>
            
            <div className="col-12">
              <label htmlFor="bookImage" className="form-label">
                Cover Image : {imageSelected ? imageSelected.name : " Choose an image"}
              </label>
            <Field
                type="file"
                className="form-control"
                id="bookImage"
                name="bookImage"
                onBlur={props.handleBlur}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                      setImageSelected(file);
                  }
                }}
              /> 
              <ErrorMessage name="bookImage" component="div" /> 
            </div> 
            <div className="col-12 text-center pt-5">
              <button type="submit" className="btn btn-primary "> Update</button>
            </div>
          </Form>
      }
    </Formik>
    </>
  )
}

export default EditBook;

