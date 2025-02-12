import React from "react";
import menu from "../assets/customerDashboard/menukabab.svg";
import reactangle from "../assets/customerDashboard/rectangle.svg";

const orders = [
  {
    id: "#85624023",
    date: "02/02/2025",
    time: "06:40 PM",
    customerName: "Mr Pranav Kumar",
    phone: "+91 8077572537",
    category: "Electronics",
    product: "Mobile Phone",
    deadWeight: "0.6 Kg",
    dimensions: "15 x 6 x 10 (cm)",
    volumetricWeight: "0.180 Kg",
    payment: "Prepaid",
    pickupAddress: "Home",
    shippingStatus: "E Way Bill Required",
  },
  {
    id: "#123456",
    date: "02/02/2025",
    time: "06:40 PM",
    customerName: "Mr Pranav Kumar",
    phone: "+91 8077572537",
    category: "Electronics",
    product: "Mobile Phone",
    deadWeight: "0.6 Kg",
    dimensions: "15 x 6 x 10 (cm)",
    volumetricWeight: "0.180 Kg",
    payment: "Prepaid",
    pickupAddress: "Home",
    shippingStatus: "E Way Bill Required",
  },
  {
    id: "#7676582",
    date: "02/02/2025",
    time: "06:40 PM",
    customerName: "Mr Pranav Kumar",
    phone: "+91 8077572537",
    category: "Electronics",
    product: "Mobile Phone",
    deadWeight: "0.6 Kg",
    dimensions: "15 x 6 x 10 (cm)",
    volumetricWeight: "0.180 Kg",
    payment: "Prepaid",
    pickupAddress: "Home",
    shippingStatus: "E Way Bill Required",
  },
];

const OrderTable: React.FC = () => {
  return (
    <div>
      {/* Table contents */}
      <div className="">
        <div className="border border-[#5D4BFE] w-full flex items-center  justify-between p-3 rounded-2xl font bg-[#FFFEFE] text-sm">
          <div className="flex gap-3 items-center">
            <img src={reactangle} alt="" />
            <h2>Order Details</h2>
          </div>
          <div>
            <h2>Customer Details</h2>
          </div>
          <div>
            <h2>Product Details</h2>
          </div>
          <div>
            <h2>Package Details</h2>
          </div>
          <div>
            <h2>Payment </h2>
          </div>
          <div>
            <h2>Pickup Address</h2>
          </div>
          <div>
            <h2>Shipping Status </h2>
          </div>
          <div>
            <h2>Action</h2>
          </div>
          <div>
            <h2></h2>
          </div>
        </div>
      </div>
      {/* table  */}
      <div className="">
        {orders.map((order, index) => (
          <div
            className="border border-[#5D4BFE] w-full flex my-5  justify-between p-3 rounded-2xl font bg-[#FFFEFE] text-sm shadow-2xl"
            key={index}
          >
            <div className="flex gap-8 items-center">
              <div></div>
              <div className="flex flex-col   w-[130px] flex-wrap">
                <h2 className="text-[#5D4BFE] text-sm">{order.id}</h2>
                <h2 className="text-[#23232380] text-sm">
                  {order.date} {order.time}
                </h2>
              </div>
            </div>
            <div>
              {/* customer details */}
              <div className="flex flex-col g w-[130px] flex-wrap">
                <h2 className="text-[#232323]">{order.customerName}</h2>
                <h2 className="text-[#23232380]">{order.phone}</h2>
              </div>
            </div>
            {/* product Details */}
            <div>
              <div className="flex flex-col  w-[130px] flex-wrap">
                <h2 className="text-[#232323]">{order.category}</h2>
                <h2 className="text-[#23232380]">{order.product}</h2>
              </div>
            </div>
            {/* package Details */}
            <div>
              <div className="flex flex-col  items-center  w-[130px] flex-wrap">
                <h2 className="text-[#232323]">
                  <span className="text-[11px] font-bold">DeadWeight:</span>{" "}
                  {order.deadWeight}
                </h2>
                <h2 className="text-[#23232380]">{order.dimensions}</h2>{" "}
                <h2 className="text-[#23232380]">{order.volumetricWeight}</h2>
              </div>
            </div>
            {/* payment  */}
            <div>
              <div className="flex flex-col items-center  w-[130px] flex-wrap">
                <h2 className="text-[#232323]">{order.payment}</h2>
              </div>
            </div>
            {/* Addres pickup */}
            <div>
              <div className="flex flex-col items-center  w-[130px] flex-wrap">
                <h2 className="text-[#232323]">{order.pickupAddress}</h2>
              </div>
            </div>

            {/* shipping status  */}
            <div>
              <div className="flex flex-col gap-1   flex-wrap">
                <h2 className="text-[#FF0000]">{order.shippingStatus}</h2>
              </div>
            </div>
            {/* Action  */}
            <div>
              <div className="">
                <button className="bg-[#1900FF] text-white px-2  py-1 rounded-lg">
                  Ship Now
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src={menu} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTable;
