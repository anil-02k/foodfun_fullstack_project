import React, { useEffect, useState } from 'react';
import './Order.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets'; // Ensure this path is correct.

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
      console.error(error);
    }
  };


  const statusHandler=async(event,orderId)=>{
      const response=await axios.post(url+"/api/order/status",{orderId,status:event.target.value})
      if(response.data.success){
        await fetchAllOrders();
      }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
            <p><strong>Order ID:</strong> {order._id}</p>
              <p className='order-items-food'>
              <strong>Items: </strong>
                {order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name+" x "+item.quantity
                  }
                  else{
                    return item.name+" x "+item.quantity+ " , "
                  }
                })}
              </p>
              <p><strong>Amount:</strong> ₹{order.amount}</p>
              <p><strong>Delivery Address:</strong> {order.address.street + " , "+order.address.state + " , " +order.address.country + " , " +order.address.zipcode}</p>
              <p><strong>Phone: </strong>{order.address.phone}</p>
              <span><strong>Status: </strong></span>
              <select onChange={(e)=>statusHandler(e,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
