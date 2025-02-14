import { Button } from "antd";

import CourierTable from "./CourierTable";
import { useState } from "react";

function CourierPartner() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="font h-screen w-full mt-4">
      {/* order Details */}
      <div className="flex">
        {/* ist section  */}
        <div className="bg-[#F0F0F0] p-4 w-1/4">
          <div className="flex flex-col ">
            {/* Order details */}
            <h1 className="font-semibold text-2xl">Order Details</h1>
            {/* order id */}
            <div className="mt-4">
              <h4 className="text-[#505051] text-md">Order Id #</h4>
              <h2 className="text-[#1900FF] text-lg">#28201001829</h2>
            </div>
            {/* pick up address */}
            <div className="mt-4">
              <h4 className="text-[#505051] text-md">Pickup From</h4>
              <h2 className="text-[#232323] text-lg font-normal">282010 Uttar Pardesh</h2>
            </div>
            {/* deliver address */}
            <div className="mt-4">
              <h4 className="text-[#505051] text-md">Deliver To</h4>
              <h2 className="text-[#232323] text-lg font-normal">282010, Jaipur</h2>
            </div>
            {/* order value */}
            <div className="mt-4">
              <h4 className="text-[#505051] text-md">Order Value</h4>
              <h2 className="text-[#232323] text-lg font-normal">#282010.00</h2>
            </div>
            {/* Applicable Weights */}
            <div className="mt-4">
              <h4 className="text-[#505051] text-md">Applicable Weights (in K.G.S)</h4>
              <h2 className="text-[#232323] text-lg font-normal">#282010.00</h2>
            </div>
            {/* button */}
            <Button className="btn" style={{ width: "200px" }} onClick={showDrawer}>
              Ship Now
            </Button>
          </div>
        </div>
        {/* second section */}
        <div className="bg-[#FFFFFF] p-4 w-3/4">
          <div>
            {/* select courier partner */}
         
            {/* courier table */}
            <div>
              <CourierTable title="Courier Details" visible={drawerVisible} placement="right" onClose={closeDrawer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourierPartner;