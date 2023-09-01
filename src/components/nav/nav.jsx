import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css';


function Navbar() {
  return (
    <>
      <div className="bg d-flex flex-column flex-shrink-0 p-3 ">
        <div className="div-navbar">
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" href="index.html">
            <img src="/assets/img/nav_img.png" alt="logo" height="50" />
            <span className="fs-3 logo">Alef BookStore</span>
        </a>
        <hr/>

        <ul className="nav flex-column mb-auto">
        <a className="nav-link active" aria-current="page" href="#">
            <NavLink to="/category" className="nav-pills">
                <i class="bi bi-grip-vertical"></i>
                <span>Category</span>
            </NavLink>
        </a>
        <a className="nav-link"  href="#">
            <NavLink to="/books" >
                <i className="bi bi-book"></i>
                <span>Books</span>
            </NavLink> 
        </a>
        <a className="nav-link" aria-current="page" href="#">
            <NavLink to="/addbook">
                <i class="bi bi-journal-plus"></i>
                <span>Add Book</span>
            </NavLink> 
        </a>
        <a className="nav-link" aria-current="page" href="#">
            <NavLink to="/editbook">
                <i class="bi bi-pencil-square"></i>
                <span>Edit Book</span>
            </NavLink>
        </a>
        <a className="nav-link" aria-current="page" href="#">
            <NavLink to="/orders">
                <i class="bi bi-cart"></i>
                <span>Orders</span>
            </NavLink>
        </a>
        <a className="nav-link" aria-current="page" href="#">
            <NavLink to="/users">
                <i class="bi bi-people"></i>
                <span>Users</span>
            </NavLink>
        </a>
        <a className="nav-link" aria-current="page" href="#">
            <NavLink to="/admins">
                <i class="bi bi-people-fill"></i>
                <span>Admins</span>
            </NavLink>
        </a>
        <a className="nav-link" aria-current="page" href="#">
            <NavLink to="/addadmin">
                <i class="bi bi-person-plus"></i>
                <span>Add Admin</span>
            </NavLink>
        </a><hr/>
        <a className="nav-link" aria-current="page" href="#">
            <NavLink>
                <i class="bi bi-door-open"></i>
                <span>LogOut</span>
            </NavLink>
        </a>
        </ul>
       
        </div>

      </div>
    </>
  );
}

export default Navbar;
