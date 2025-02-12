import { Button } from "antd";
import "../../App.css"
import { Select } from 'antd';
import CourierTable from "./component/CourierTable";




function OrderDetail() {
  const options = [
    { label: 'Sort by:- Shipdart Recommendation ', value: 'Sort by:- Shipdart Recommendation ' },
    { label: 'lime', value: 'lime' },
    { label: 'green', value: 'green' },
    { label: 'cyan', value: 'cyan' },
  ];
  return (
    <div className="font h-screen w-full mt-4">
  
  {/* order Details */}
  <div className="flex">
    {/* ist section  */}
<div className="bg-[#F0F0F0]  p-4 w-1/4">
<div className="flex flex-col ">
 {/* Order details  */}

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
 

 {/* Applicavle Weights */}
 <div className="mt-4">
 <h4 className="text-[#505051] text-md">Applicavle Weights (in K.G.S)</h4>
 <h2 className="text-[#232323] text-lg font-normal">#282010.00</h2>
  </div>

{/* button */}

  <Button className="btn" style={{
    width: "200px",
  }}>
    Ship Now
  </Button>




   
</div>

</div>
     
   {/* second section */}
 
    <div className="bg-[#FFFFFF]  p-4 w-3/4">


    <div>
      {/* select courier partner */}
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


<div className="flex mt-4" >
<Select  style={{ width: '300px' }} options={options}  />

   
</div>

       
     </div>
{/* courier table */}




<div>
  <CourierTable/>
</div>
    </div>
    



      


     </div>
 
     
  </div>

 

       
    </div>
  )
}

export default OrderDetail;