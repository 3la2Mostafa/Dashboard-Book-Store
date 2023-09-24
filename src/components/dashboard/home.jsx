import React from "react";
import "./home.css";
import Navbar from "../nav/nav";
import CanvasJSReact from "@canvasjs/react-charts";
import { useSelector } from "react-redux";

function Home() {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const books = useSelector((state) => state.books.books.totalItems);
  const categories = useSelector((state) => state.categories);
  const orders = useSelector((state) => state.orders);
  const admins = useSelector((state) => state.admins);
  const users = useSelector((state) => state.users);
  ///////////////////////////////////////////////////
  const booksLength = books;
  const categoriesLength = categories.length;
  const ordersLength = orders.length;
  const adminsLength = admins.length;
  const usersLength = users.length;

  const options = {
    title: {
      text: "Number of items in every collection",
    },
    theme: "light2", //"light1", "dark1", "dark2"
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Admins", y: adminsLength },
          { label: "Users", y: usersLength },
          { label: "Books", y: booksLength },
          { label: "Orders", y: ordersLength },
          { label: "Categories", y: categoriesLength },
        ],
      },
    ],
    // backgroundColor: [
    //   'rgba(183, 129, 129,0.2)',
    // ],
  };

  return (
    <>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-4 g-0 dashboard">
        {/* <div className="col"> */}
        <div className="card m-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="/assets/img/admin2.png"
                className="img-fluid rounded-start rounded p-2"
                alt="cart-img"
                height={50}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">Admins</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-2">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/assets/img/book1.PNG"
                className="img-fluid rounded-start rounded"
                alt="cart-img"
                height={100}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">Books</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-2">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/assets/img/users1.png"
                className="img-fluid rounded-start rounded"
                alt="cart-img"
                height={50}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">Users</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-2">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/assets/img/cart.png"
                className="img-fluid rounded-start rounded"
                alt="cart-img"
                height={50}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">Order</h5>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="chart">
        <CanvasJSChart options={options} />
      </div>
    </>
  );
}

export default Home;
