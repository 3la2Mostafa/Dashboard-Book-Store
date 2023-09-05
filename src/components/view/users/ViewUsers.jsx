import React  from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import '../viewstyle.css'

function ViewUsers() {

  const { id } = useParams();
  console.log("id from:---id -> userdetails--->", id);

  const user = useSelector((state) =>
    state.users.find((user) => user._id === id)
  );
  console.log("user:------>", user);

  return (
    <>
      <div className="card text-center view">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={user.image} className="card-img-top p-1" alt="user-Img"/>
            </div>
            <div className="col-md-8">
                <div className="card-body p-5">
                    <h2 className="card-title pb-4"><span>Full Name : </span>{user.firstName} {user.lastName}</h2>
                    <h3 className="card-text"><span className="fw-semibold">Email : </span>{user.email}</h3>
                    <h3 className="card-text"><span className="fw-semibold">Phone : </span>{user.phoneNumber}</h3>
                    <h3 className="card-text"><span className="fw-semibold">Country : </span>{user.country}</h3>
                    <h3 className="card-text"><span className="fw-semibold">Address : </span>{user.address}</h3>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ViewUsers;