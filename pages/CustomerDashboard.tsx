import "../../App.css";

import { Input } from "antd";
import search from "../../assets/customerDashboard/search.svg";

import filter from "../../assets/customerDashboard/filter.svg";
import sync from "../../assets/customerDashboard/sync.svg";
import OrderTable from "./OrderTable";
import { useNavigate } from "react-router-dom";

const CustomerOrder=()=> {
  const navigate=useNavigate()
  return (
    <div className=" font">
      {/* header  */}


      {/* dashboard  */}

      <div>
        {/* blue banner  */}
        <div className="bg-blue-600 mt-4 flex justify-center rounded-xl ">
          <h3 className="text-[#FFFFFF] p-2 font text-[13px] font-semibold">
            Todays Offer, Recharge your wallet now and get 25% of your total
            recharge amount
          </h3>
        </div>
        {/*  inputs */}

        <div>
          <div className="flex justify-between items-center mt-3">
            {/* search  */}
            <div className="bg-[#FFFFFF] flex gap-2 border border-[#5D4BFE] rounded-xl mt-4 px-5 py-2  items-center w-2/4 ">
              <img className="w-[34px]" src={search} alt="" />
              <Input
                size="large"
                placeholder="Search Shipment from AWB, Buyer Mobile No, Order Id, Email, Pickup Id"
                className="border-none outline-none active:border-none font"
              />
            </div>
            {/* buttons */}

            <div className="flex gap-2">
              <div className="flex gap-1 justify-center items-center border bg-[#5D4BFE] border-[#5D4BFE] rounded-2xl px-3 py-1 font cursor-pointer ">
                <div className="text-[20px] text-white">+</div>
                <h3 className="text-sm text-[#fff] font-semibold cursor-pointer mt-[4px]" onClick={()=>{navigate('/createOrder')}}>
                  Create Order
                </h3>
              </div>
              {/* Filter Order  */}
              <div className="flex gap-1 justify-center items-center border border-[#5D4BFE] rounded-2xl px-3 py-2 font cursor-pointer ">
                <img className="w-[15px]" src={filter} alt="" />
                <h3 className="text-sm text-[#5D4BFE] font-semibold cursor-pointe mt-[4px]r">
                  Filter Order
                </h3>
              </div>
              {/* Sync order */}
              <div className="flex gap-1 justify-center items-center border border-[#5D4BFE] rounded-2xl px-3 py-2 font cursor-pointer ">
                <img className="w-[15px]" src={sync} alt="" />
                <h3 className="text-sm text-[#5D4BFE] font-semibold cursor-pointer mt-[4px]">
                  Sync Order
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex gap-4 my-5">
          <div>
            <h4 className="text-[#5D4BFE] font-semibold text-sm">New Orders</h4>
          </div>
          <div>
            <h4 className="text-[#3D3D3D] font-semibold text-sm">
              Ready to ship
            </h4>
          </div>
          <div>
            <h4 className="text-[#3D3D3D] font-semibold text-sm">
              Pickup Pending
            </h4>
          </div>
          <div>
            <h4 className="text-[#3D3D3D] font-semibold text-sm">In Transit</h4>
          </div>
          <div>
            <h4 className="text-[#3D3D3D] font-semibold text-sm">Delivered</h4>
          </div>
          <div>
            <h4 className="text-[#3D3D3D] font-semibold text-sm">RTO</h4>
          </div>
        </div>

        {/*  table contents*/}

        <div>
          <OrderTable />
        </div>
      </div>
    </div>
  );
}

export default CustomerOrder;
