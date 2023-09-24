import React from "react";
import { Route , Routes } from "react-router-dom";
import Category from "./components/category/category";
import AddBook from "./components/add-book/add-book";
import EditBook from "./components/edit-book/edit-book";
import Users from "./components/users/users";
import Orders from "./components/order/order";
import Admins from "./components/admins/admins";
import Books from "./components/books/books";
import Home from "./components/dashboard/home";
import ViewBooks from "./components/view/books/viewBooks";
import ViewUsers from "./components/view/users/ViewUsers";
import LoginAdmin from "./components/login-admin/login";
import IsAuth from "./components/auth";
import NotFound from './components/not-found/not-found';



function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginAdmin />}></Route>
        <Route path="/dashboard" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="load" element={<Spinner />}></Route>
        <Route element={<IsAuth />}>
          <>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/addbook" element={<AddBook />}></Route>
            <Route path="/editbook/:id" element={<EditBook />}></Route>
            <Route path="/admins" element={<Admins />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            /////////////////////////////////////////////////////// 
            ///Views of Data///
            <Route path="/viewbooks/:id" element={<ViewBooks />}></Route>
            <Route path="/viewusers/:id" element={<ViewUsers />}></Route>
          </>
        </Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
