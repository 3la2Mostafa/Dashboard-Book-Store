import React from "react";
import './home.css';

function Home() {
  return (
    <>
    <div className="container-width row row-cols-1 row-cols-md-4 g-3 dashboard">
      {/* <div className="col"> */}
        <div className="card m-2">
          <div className="row">
            <div className="col-md-4">
              <img src="/assets/img/admin2.png" className="img-fluid rounded-start rounded p-2" alt="cart-img" height={50}/>
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
              <img src="/assets/img/book1.PNG" className="img-fluid rounded-start rounded" alt="cart-img" height={100}/>
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
              <img src="/assets/img/users1.png" className="img-fluid rounded-start rounded" alt="cart-img" height={50}/>
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
              <img src="/assets/img/cart.png" className="img-fluid rounded-start rounded" alt="cart-img" height={50}/>
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
     
    </>
  );
}

export default Home;
