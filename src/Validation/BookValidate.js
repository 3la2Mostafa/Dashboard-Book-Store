import * as Yup from 'yup';

// const BookSchema = Yup.object().shape({
    
//     bookTitle: Yup.string()
//       .min(3, 'Must be at least 3 characters')
//       .required('Title is Required'),
//     bookPages: Yup.number()
//       .min(0, 'Invalid number of pages')
//       .required('Num-Pages is Required'),
//     bookStock: Yup.number()
//       .min(1, 'Invalid number of Stock')
//       .max(100, 'Invalid number of Stock')
//       .required('Num-Stock is Required'),
//     price: Yup.number().required('Price is Required'),
//     publishedYear: Yup.number().required('Year is Required'),
//     bookImage: Yup.string().required('Image is Required'),
//     description: Yup.string().required('Description is Required'),
//     author: Yup.string().required('Author is Required'),
//     category: Yup.string().required('Category is Required'),
//     language: Yup.string().required('Language is Required'),

// });

const BookValidate = (values) => {
    const errors = {};
  
    if (!values.bookTitle) {
      errors.bookTitle = "Title is Required";
    } else if (values.bookTitle.length < 3) {
      errors.bookTitle = "Must be at least 3 characters";
    }
    if (!values.publishedYear) {
      errors.publishedYear = "Year is Required";
    } 
    // else if (isNaN(values.publishedYear) || values.publishedYear.length != 3) {
    //   errors.publishedYear = "Invalid publishedYear format";
    // }
    if (!values.bookPages) {
      errors.bookPages = "Num-Pages is Required";
    } else if (isNaN(values.bookPages) || values.bookPages < 0) {
      errors.bookPages = "Invalid number of bookPages";
    }
    if (!values.bookStock) {
      errors.bookStock = "Num-Stock is Required";
    } else if (isNaN(values.bookStock) || values.bookStock > 100) {
      errors.bookStock = "Invalid number of Stock";
    }
    if (!values.category) {
      errors.category = "Category is Required";
    }
    if (!values.author) {
      errors.author = "Author is Required";
    }
    if (!values.language) {
      errors.language = "Language is Required";
    }
    if (!values.description) {
      errors.description = "Description is Required";
    }
    if (!values.price) {
      errors.price = "Price is Required";
    }
    if (!values.bookImage) {
      errors.bookImage = "Image is Required";
    }
  
    return errors;
};

// export default BookSchema;
export default BookValidate;