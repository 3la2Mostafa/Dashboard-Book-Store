import React from "react";
import Navbar from "../nav/nav";
import { useSelector } from "react-redux";
import axiosInstance from "../../config/axiosConfig";


function Orders() {

  const orders = useSelector((state) => state.orders);
  console.log("Orders ---->" , orders);

  const deleteOrder  = (orderId)=>{
    axiosInstance.delete(`/orders/${orderId}`).then(
      response => { 
        swal("Delete order" , "Order has been deleted successfully" ,"success" , {button:false});
        console.log('Order deleted successfully', response);
      }
    ).catch(error => {
      console.log('Error deleting order', error);
    });
  };
  
  return (
    <>
    <Navbar/>
    <div className="p-4 container-width">
      <table className="table table-hover ">
        <thead className="p-2 text-center rounded">
          <tr>
            <th scope="col">User</th>
            <th scope="col">Adress</th>
            <th scope="col">Statues</th>
            <th scope="col">Payment-Method</th>
            <th scope="col">Items</th>
            <th scope="col">Total Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center m-2">
          {orders.map((order,index)=>{
            return(
              <tr key={index} className="info-table">
                <td className="text-left align-middle fw-bolder"><h6>{order?.user?.firstName} {order?.user?.lastName}</h6></td>
                <td className="text-left align-middle">{order.address}</td>
                <td className="text-left align-middle">{order.status}</td>
                <td className="text-left align-middle">{order.paymentMethod}</td>
                <td>{order.items.map((e)=>{
                  return(
                    <div key={e._id} className="border p-2 rounded my-2 bg-secondary-subtle">
                      <p><span className="fw-bolder">Book Title : </span>{e.book.bookTitle}</p>
                      <p><span className="fw-bolder"> Quantity : </span>{e.quantity}</p>
                      <p><span className="fw-bolder">Price : </span>{e.book.price}.00 EGP</p>
                    </div>
                  );
                })}</td>
                <td className="text-left align-middle fw-bolder"><h6>{order.totalPrice}.00 EGP</h6></td>
                <td className="text-left align-middle">
                  <button type="button" className="btn" onClick={()=>deleteOrder(order._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Orders;