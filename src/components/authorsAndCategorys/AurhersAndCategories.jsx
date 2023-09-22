import React, { useState, useEffect } from 'react';
import axios from "../../config/axiosConfig";
import { useSelector } from 'react-redux';
import Select from 'react-select';

function AurhersAndCategories() {
  
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const authorsXD = useSelector((state) =>state.authors.authors);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoriesXD = useSelector((state) =>state.categories);
  console.log(`categories---->`, categoriesXD);

  useEffect(() => {
    setAuthors(authorsXD.map(author => ({ value: author._id, label: author.name })));
    setCategories(categoriesXD.map(category => ({ value: category._id, label: category.name })));
  }, [authorsXD,categoriesXD]);


  const handleAuthorChange = (selectedOption) => {
    setSelectedAuthor(selectedOption);
    console.log(`Author Option selected:`, selectedOption);
  };
  const handleCategoryChange = (selectedOption) => {
    setCategories(selectedOption);
    console.log(`Category Option selected:`, selectedOption);
  };

  return (
    <>
      <h1 className='text-center'>AuthorsAndCategories</h1>
      
      <Select styles={{container: (provided) => ({...provided,width: '300px',margin: '0 auto'})}}
        value={selectedAuthor}
        onChange={handleAuthorChange}
        options={authors}
        placeholder="Select an author..."/>

      <Select styles={{container: (provided) => ({...provided,width: '300px',margin: '0 auto'})}}
        value={selectedCategory}
        onChange={handleCategoryChange}
        options={categories}
        placeholder="Select an author..."
      />
      
    </>
  )
}

export default AurhersAndCategories