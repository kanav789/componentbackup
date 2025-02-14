import express from "./assets/orderdetails/express.svg";
import ekart from "./assets/orderdetails/ekart.svg";
import bluedart from "./assets/orderdetails/bluedart.svg";
import DTX from "./assets/orderdetails/DTX.svg";
import { Select } from 'antd';

import RatingCircle from "./Rating";

import { Drawer } from "antd";


interface CourierTableProps {
  title: string;
  visible: boolean;
  placement: "left" | "right" | "top" | "bottom";
  onClose: () => void;
}

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
    logo: express, // Replace with actual logo
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

const CourierTable = ({ title, visible, placement, onClose }: CourierTableProps) => {


    const options = [
        { label: 'Sort by:- Shipdart Recommendation ', value: 'Sort by:- Shipdart Recommendation ' },
        { label: 'lime', value: 'lime' },
        { label: 'green', value: 'green' },
        { label: 'cyan', value: 'cyan' },
      ];
  return (
    <div className="mt-5">
      {/* Table contents */}
      <Drawer title={title} visible={visible} placement={placement} onClose={onClose} width={1000}>
       <div>
       <div className="flex gap-3 items-center ">
              <i className="ri-arrow-left-s-line text-2xl font-bold"></i>
              <h1 className="text-xl font-medium">Select Courier Partner</h1>
            </div>
            {/* sorting */}
            <div className="flex justify-between items-center">
              <div className="flex gap-4 mt-4 font-normal text-sm">
                <h3 className="text-blue-500">All</h3>
                <h3>Surface Service</h3>
                <h3>Air Service</h3>
                <h3>Our Recommendations</h3>
              </div>
              <div className="flex mt-4">
                <Select style={{ width: '300px' }} options={options} />
              </div>
            </div>
       </div>

        <div className="">
          <div className="border border-[#5D4BFE] w-full flex items-center justify-between p-3 rounded-2xl font bg-[#FFFEFE] text-sm">
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
              <h2>Chargeable Weight</h2>
            </div>
            <div>
              <h2>Charges</h2>
            </div>
            <div>
              <h2>Action</h2>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="">
          {couriers.map((courier, index) => (
            <div
              className="border border-[#5D4BFE] w-full flex my-5 justify-between py-3 px-2 rounded-2xl font bg-[#FFFEFE] text-sm items-center font"
              key={index}
            >
              {/* name */}
              <div className="flex gap-3 items-center w-[130px] justify-center">
                <div className="w-10">
                  <img className="w-full" src={courier.logo} alt="" />
                </div>
                <div className="flex flex-col w-[130px] flex-wrap">
                  <h2 className="text-[#232323] text-[13px]">{courier.name}</h2>
                  <h2 className="text-[#232323] text-[10px]">{courier.type}</h2>
                  <h2 className="text-[#232323] text-[10px]">RTO Charges:-{courier.rto}</h2>
                </div>
              </div>
              <div>
                {/* rating */}
                <div className="flex flex-col w-[110px] flex-wrap items-center">
                  <div className="text-lg">
                    <RatingCircle rating={courier.rating} />
                  </div>
                </div>
              </div>
              {/* pickup */}
              <div>
                <div className="flex flex-col w-[110px] flex-wrap items-center">
                  <h2 className="text-[#232323]">{courier.pickup}</h2>
                </div>
              </div>
              {/* estimated Delivery */}
              <div>
                <div className="flex flex-col w-[110px] flex-wrap items-center">
                  <h2 className="text-[#232323]">{courier.delivery}</h2>
                </div>
              </div>
              {/* weight */}
              <div>
                <div className="flex flex-col w-[110px] flex-wrap items-center">
                  <h2 className="text-[#232323]">{courier.weight}</h2>
                </div>
              </div>
              {/* charges */}
              <div>
                <div className="flex flex-col w-[110px] flex-wrap items-center">
                  <h2 className="text-[#232323]">{courier.charges}</h2>
                </div>
              </div>
              {/* Action */}
              <div>
                <div className="">
                  <button
                    className="bg-[#1900FF] cursor-pointer text-[#fff] px-2 py-2 rounded-lg"
                
                  >
                    Ship Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default CourierTable;