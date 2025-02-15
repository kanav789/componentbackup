import { Button } from "antd";
import React, { useState } from "react";

interface ColumnType {
  header: string;
  dataIndex: string;
  key: string;
  render?: (value: any, record: any, index: number) => React.ReactNode;
}

interface TableProps {
  columns: ColumnType[];
  data: Record<string, any>[];
}
const TableComponent: React.FC<TableProps> = ({ columns, data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filteredData = data?.filter((row:any) =>
    columns?.some((col:any) =>
      row[col.dataIndex]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-[#f8f8f8] rounded-lg">
      {/* Search Box */}
      {/* <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-md mb-4 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /> */}

      <div className="overflow-x-auto">
        {/* Column Headers */}
        <div
          className="grid gap-6 bg-white p-3 font-medium border-b"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
            border: "1px solid #5D4BFE",
            borderRadius: "12px",
            margin: "20px 0px",
          }}
        >
          {columns.map((col:any) => (
            <div key={col.dataIndex} className="p-2 text-left">
              {col.header}
            </div>
          ))}
        </div>

        {/* Data Rows with Spacing */}
        <div className="flex flex-col gap-y-4">
          {paginatedData.map((row:any, index:any) => (
            <div
              key={index}
              className="grid gap-6 p-3 bg-white"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
                border: "1px solid #5D4BFE",
                borderRadius: "12px",
              }}
            >
              {columns?.map((col:any) => (
                <div key={col.dataIndex} className="p-2 text-left">
                  {col.render ? col.render(row[col.dataIndex], row, index) : row[col.dataIndex]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div
        className="flex justify-center gap-4 items-center mt-4 w-max"
        style={{
          border: "1px solid #5D4BFE",
          margin: "15px auto",
          borderRadius: "50px",
        }}
      >
        <Button
          className="border-[#5D4BFE]"
          style={{ color: "#000000", background: "unset", boxShadow: "inherit" }}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          {/* Left Arrow */}
        </Button>

        <span>{currentPage} / {Math.ceil(filteredData.length / rowsPerPage)}</span>

        <Button
          className="border-[#5D4BFE]"
          style={{ color: "#000000", background: "unset", boxShadow: "inherit" }}
          disabled={currentPage * rowsPerPage >= filteredData.length}
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(filteredData.length / rowsPerPage))
            )
          }
        >
          {/* Right Arrow */}
        </Button>
      </div>
    </div>
  );
};

export default TableComponent;
