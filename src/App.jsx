import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Category from './components/category/category';
import AddBook from './components/add-book/add-book';
import EditBook from "./components/edit-book/edit-book";
import AddAdmin from './components/add-admin/add-admin';
import Users from './components/users/users';
import Orders from "./components/order/order";
import Admins from './components/admins/admins';
import Books from './components/books/books';



function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/category" element={<Category />}></Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/addbook" element={<AddBook />}></Route>
      <Route path="/editbook" element={<EditBook />}></Route>
      <Route path="/addadmin" element={<AddAdmin />}></Route>
      <Route path="/admins" element={<Admins />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
