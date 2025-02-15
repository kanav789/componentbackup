import "../../App.css";
import TableComponent from "../../components/common/tableComponent/TableComponent";
import { useEffect, useState } from "react";
import CourierPartner from "./CourierPartners";
import { Button, Popover } from "antd";
import useFetchData from "../../utils/useFetchData/customFetchData";
import service from "../../utils/service/service";
import { useSelector } from "react-redux";
import menu from "../../assets/customerDashboard/menukabab.svg";
import { Link, useNavigate } from "react-router-dom";

const OrderTable = () => {
  const navigate= useNavigate()
  const { getListData } = useFetchData();
  const { getOrderList } = useSelector((state: any) => state.reduxData);

  useEffect(() => {
    modalListing();
  }, []);

  const modalListing = async () => {
    const apiConfigs = {
      getOrderList: {
        apiUrl: service?.API_URL?.createOrder?.listing, // No body needed
      },
    };

    await getListData(apiConfigs);
  };

  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const handleShipNowClick = (orderId: string) => {
    setSelectedOrderId(orderId);
    console.log("Order ID: ", orderId);
    setShowDrawer(true);
  };

  const handlemenu = async (orderId: any) => {
    console.log(orderId);
  };

  const popupcontent = (
    <div className="flex flex-col gap-2">
      <Link to="">Edit</Link>
      <Link to="">Delete</Link>
    </div>
  );

  const columns = [
    { header: "Order ID", dataIndex: "orderId", key: "orderId",
      render:(text: string, record: any) => (
      <div className="">
        <h2 style={{ color: "#5D4BFE" }} className="underline cursor-pointer " onClick={()=>navigate('/createOrder')} >{record.orderId}</h2>
        <h2 style={{ color: "#23232380" }} className="-mt-[10px]">{record.date}</h2>
      </div>

      )
     },
    {
      header: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      render: (text: string, record: any) => (
        <div >
          <h2 style={{ color: "#5D4BFE" }}>{record.customerName}</h2>
          <h2 style={{ color: "#23232380" }}>{record.mobileNo}</h2>
        </div>
      ),
    },
    { header: "Product", dataIndex: "product", key: "product" },
    { header: "Package Details", dataIndex: "packageDetails", key: "packageDetails" },
    { header: "Shipping Status", dataIndex: "shippingStatus", key: "shippingStatus" },
    { header: "Shipping Date", dataIndex: "shippingDate", key: "shippingDate" },
    {
      header: "Action",
      dataIndex: "action",
      key: "action",
      render: (text: string, record: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Button onClick={() => handleShipNowClick(record.orderId)} type="primary">
            Ship
          </Button>
          <Popover content={popupcontent} title="" trigger="click">
            <img src={menu} alt="menu" style={{ cursor: "pointer" }} onClick={() => handlemenu(record.orderId)} />
          </Popover>
        </div>
      ),
    },
  ];

  const data = getOrderList.map((order: any) => ({
    orderId: order.ORDER_NO   ,
    date: order.CREATED_MODIFIED_DATE    ,
     customerName: order.DELIVER_TO,
    mobileNo: order.MOBILE_NO, 
    product: "Product details here", 
    packageDetails: "Package details here", 
    shippingStatus: order.ORDER_STATUS, 
    shippingDate: order.ORDER_DATETIME,
  }));
 

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <h2>Order List</h2>
      </div>
      <TableComponent columns={columns} data={data} />

      {showDrawer && (
        <CourierPartner visible={showDrawer} onClose={() => setShowDrawer(false)} />
      )}
    </div>
  );
};

export default OrderTable;