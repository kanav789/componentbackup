import express from "../../../assets/orderdetails/express.svg"

import ekart from "../../../assets/orderdetails/ekart.svg"
import bluedart from "../../../assets/orderdetails/bluedart.svg"
import DTX from "../../../assets/orderdetails/DTX.svg"


import "../../../App.css"
import RatingCircle from "../../../components/common/rating/RatingCircle"
const couriers = [
  {
    id: 1,
    name: "Xpressbees",
    type: "Surface | Min Weight: 500 kg",
    rto: 60,
    rating: 4.9,
    pickup: "Tomorrow",
    delivery: "14 Feb 2024",
    weight: "0.400 gm",
    charges: 60,
   logo :express, // Replace with actual logo
  },
  {
    id: 2,
    name: "Ekart by Flipkart",
    type: "Surface | Min Weight: 500 kg",
    rto: 60,
    rating: 3.5,
    pickup: "Tomorrow",
    delivery: "14 Feb 2024",
    weight: "0.400 gm",
    charges: 60,
    logo: ekart,
  },
  {
    id: 3,
    name: "Ekart by Flipkart",
    type: "Air Courier | Min Weight: 500 kg",
    rto: 200,
    rating: 1,
    pickup: "Tomorrow",
    delivery: "12 Feb 2024",
    weight: "0.400 gm",
    charges: 250,
    logo: ekart,
  },
  {
    id: 4,
    name: "BlueDart",
    type: "Surface | Min Weight: 500 kg",
    rto: 1,
    rating: 2.5,
    pickup: "Tomorrow",
    delivery: "15 Feb 2024",
    weight: "0.400 gm",
    charges: 80,
    logo: bluedart,
  },
  {
    id: 5,
    name: "DTDC",
    type: "Surface | Min Weight: 500 kg",
    rto: 40,
    rating: 3.3,
    pickup: "Tomorrow",
    delivery: "15 Feb 2024",
    weight: "0.400 gm",
    charges: 90,
    logo: DTX,
  },
];

const CourierTable = () => {
  return (
    <div className="mt-5">
    {/* Table contents */}
    <div className="">
      <div className="border border-[#5D4BFE] w-full flex items-center  justify-between p-3 rounded-2xl font bg-[#FFFEFE] text-sm">
        <div className="flex gap-3 items-center">

          <h2>Courier Partner</h2>
        </div>
        <div>
          <h2>Ratings</h2>
        </div>
        <div>
          <h2>Estimated Pickup</h2>
        </div>
        <div>
          <h2>Estimated Delivery</h2>
        </div>
        <div>
          <h2>Chargeable Weight </h2>
        </div>
        <div>
          <h2>Charges</h2>
        </div>
        <div>
          <h2>Action</h2>
        </div>
       
        
      </div>
    </div>
    {/* table  */}
    <div className="">
      {couriers.map((courier, index) => (
        <div
          className="border border-[#5D4BFE] w-full flex my-5  justify-between  py-3 px-2 rounded-2xl font bg-[#FFFEFE] text-sm items-center font"
          key={index}
        >

          {/* name */}
          <div className="flex gap-3 items-center w-[130px] justify-center">

            <div className="w-10">    <img className="w-full" src={courier.logo} alt="" /></div>
            <div className="flex flex-col   w-[130px] flex-wrap">
              <h2 className="text-[#232323] text-[13px]">{ courier.name}</h2>
              <h2 className="text-[#232323] text-[10px]">
                {courier.type}
              </h2>
   
              <h2 className="text-[#232323] text-[10px]">
               RTO Charges:-{courier.rto} 
              </h2>
            </div>
          </div>
          <div>
            {/* rating */}
            <div className="flex flex-col  w-[110px] flex-wrap items-center ">
           <div className="text-lg">
           <RatingCircle rating={courier.rating}/>
           </div>
          
            </div>
          </div>
          {/*  pickup */}
          <div>
          <div className="flex flex-col w-[110px]  flex-wrap items-center ">
              <h2 className="text-[#232323]">{courier.pickup}</h2>
        
            </div>
          </div>
          {/* estimated Delivery */}
          <div>
          <div className="flex flex-col w-[110px] flex-wrap items-center ">
          
              <h2 className="text-[#232323]">{courier.delivery}</h2>{" "}
     
            </div>
          </div>
          {/* weight */}
          <div>
          <div className="flex flex-col w-[110px] flex-wrap items-center ">
              <h2 className="text-[#232323]">{courier.weight}</h2>
            </div>
          </div>
          {/* charges  */}
          <div>
          <div className="flex flex-col w-[110px] flex-wrap items-center ">
              <h2 className="text-[#232323]">{courier.charges}</h2>
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
         
        </div>
      ))}
    </div>
  </div>
  );
};

export default CourierTable;
